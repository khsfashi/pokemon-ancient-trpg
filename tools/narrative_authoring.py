#!/usr/bin/env python3
"""Local/provider-agnostic narrative authoring orchestrator.

The GitHub Actions workflow calls one unit at a time and commits after each unit.
This script intentionally keeps provider output and story identity separate.
"""
from __future__ import annotations

import argparse
import datetime as dt
import hashlib
import json
import os
import pathlib
import re
import subprocess
import sys
from typing import Any

ROOT = pathlib.Path(__file__).resolve().parents[1]
AUTHORING_ROOT = ROOT / "content" / "authoring" / "topics"
PLAN_SCHEMA = ROOT / "content" / "authoring" / "schemas" / "authoring-plan.schema.json"
SESSION_SCHEMA = ROOT / "content" / "authoring" / "schemas" / "authoring-session-output.schema.json"
CANON_DIGEST = ROOT / "docs" / "P8_3_AUTHORING_CANON_DIGEST.md"
FACTORY_GUIDE = ROOT / "docs" / "P8_3_NARRATIVE_AUTHORING_FACTORY.md"
PIXEL_GUIDE = ROOT / "docs" / "P8_3_PIXEL_ART_AND_TYPOGRAPHY_DIRECTION.md"

QUOTA_MARKERS = (
    "usage limit",
    "rate limit",
    "quota",
    "credit balance",
    "credits exhausted",
    "limit reached",
    "too many requests",
)
AUTH_MARKERS = (
    "not logged in",
    "authentication",
    "unauthorized",
    "sign in",
    "invalid api key",
)

PROFILE_DEFAULTS = {
    "scene": {"chars": 3500, "paragraphs": 14},
    "encounter_arc": {"chars": 5200, "paragraphs": 18},
    "worldbuilding": {"chars": 6000, "paragraphs": 20},
    "microcopy": {"chars": 1800, "paragraphs": 10},
}


def now_iso() -> str:
    return dt.datetime.now(dt.timezone.utc).replace(microsecond=0).isoformat()


def read_json(path: pathlib.Path) -> Any:
    return json.loads(path.read_text(encoding="utf-8"))


def write_json(path: pathlib.Path, value: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    tmp = path.with_suffix(path.suffix + ".tmp")
    tmp.write_text(json.dumps(value, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    tmp.replace(path)


def write_text(path: pathlib.Path, value: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    tmp = path.with_suffix(path.suffix + ".tmp")
    tmp.write_text(value.rstrip() + "\n", encoding="utf-8")
    tmp.replace(path)


def slugify(value: str) -> str:
    value = value.strip().lower()
    value = re.sub(r"[^a-z0-9가-힣._-]+", "-", value)
    value = re.sub(r"-+", "-", value).strip("-._")
    if not value:
        raise ValueError("topic_id/title cannot produce an empty slug")
    return value[:80]


def extract_request(event_path: pathlib.Path) -> dict[str, Any]:
    event = read_json(event_path)
    issue = event.get("issue") or {}
    title = str(issue.get("title") or "")
    if not title.startswith("[authoring]"):
        raise ValueError("issue title must start with [authoring]")
    body = str(issue.get("body") or "").strip()
    request: dict[str, Any] = {}
    if body:
        fenced = re.search(r"```(?:json|authoring)?\s*(\{.*?\})\s*```", body, flags=re.S | re.I)
        candidate = fenced.group(1) if fenced else body
        try:
            loaded = json.loads(candidate)
            if isinstance(loaded, dict):
                request = loaded
        except json.JSONDecodeError:
            request = {"brief": body}

    suffix = title[len("[authoring]"):].strip()
    request.setdefault("title", suffix or "Narrative topic")
    request.setdefault("topic_id", slugify(suffix or request["title"]))
    request["topic_id"] = slugify(str(request["topic_id"]))
    request.setdefault("brief", suffix)
    request.setdefault("profile", "encounter_arc")
    request.setdefault("worker", "auto")
    request.setdefault("target_total_chars", PROFILE_DEFAULTS.get(request["profile"], PROFILE_DEFAULTS["encounter_arc"])["chars"])
    request.setdefault("context_files", [])
    request["issue_number"] = issue.get("number")
    request["issue_url"] = issue.get("html_url")
    return request


def topic_dir(topic_id: str) -> pathlib.Path:
    return AUTHORING_ROOT / topic_id


def context_hash(payload: str) -> str:
    return hashlib.sha256(payload.encode("utf-8")).hexdigest()


def safe_repo_file(rel: str) -> pathlib.Path:
    path = (ROOT / rel).resolve()
    if ROOT not in path.parents and path != ROOT:
        raise ValueError(f"context file escapes repository: {rel}")
    if not path.is_file():
        raise ValueError(f"context file not found: {rel}")
    return path


def bootstrap_topic(request: dict[str, Any]) -> dict[str, Any]:
    tdir = topic_dir(request["topic_id"])
    topic_path = tdir / "topic.json"
    if topic_path.exists():
        return read_json(topic_path)
    profile = str(request.get("profile", "encounter_arc"))
    defaults = PROFILE_DEFAULTS.get(profile, PROFILE_DEFAULTS["encounter_arc"])
    topic = {
        "schema_version": 1,
        "topic_id": request["topic_id"],
        "title": request["title"],
        "brief": request.get("brief", ""),
        "profile": profile,
        "target_total_chars": int(request.get("target_total_chars") or defaults["chars"]),
        "worker_preference": request.get("worker", "auto"),
        "context_files": list(request.get("context_files") or []),
        "status": "planning",
        "owner_review": "pending",
        "source_issue_number": request.get("issue_number"),
        "created_at": now_iso(),
        "updated_at": now_iso(),
    }
    write_json(topic_path, topic)
    write_json(tdir / "continuity-ledger.json", {"schema_version": 1, "facts": [], "unresolved_hooks": [], "updated_at": now_iso()})
    return topic


def load_base_context(topic: dict[str, Any]) -> str:
    chunks = []
    for path in (CANON_DIGEST, FACTORY_GUIDE, PIXEL_GUIDE):
        chunks.append(f"\n===== {path.relative_to(ROOT)} =====\n{path.read_text(encoding='utf-8')}\n")
    for rel in topic.get("context_files", []):
        path = safe_repo_file(str(rel))
        chunks.append(f"\n===== {path.relative_to(ROOT)} =====\n{path.read_text(encoding='utf-8')}\n")
    return "".join(chunks)


def run_codex(prompt: str, schema: pathlib.Path, out_path: pathlib.Path) -> tuple[str, str]:
    codex_bin = os.environ.get("CODEX_BIN", "codex")
    cmd = [
        codex_bin,
        "exec",
        "--ephemeral",
        "--output-schema",
        str(schema),
        "--output-last-message",
        str(out_path),
        "-",
    ]
    proc = subprocess.run(
        cmd,
        input=prompt,
        text=True,
        encoding="utf-8",
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        cwd=ROOT,
        check=False,
    )
    combined = f"{proc.stdout}\n{proc.stderr}".strip()
    if proc.returncode == 0:
        return "ok", combined
    lowered = combined.lower()
    if any(marker in lowered for marker in QUOTA_MARKERS):
        return "quota", combined
    if any(marker in lowered for marker in AUTH_MARKERS):
        return "auth", combined
    return "error", combined


def planner_prompt(topic: dict[str, Any]) -> str:
    profile = topic.get("profile", "encounter_arc")
    defaults = PROFILE_DEFAULTS.get(profile, PROFILE_DEFAULTS["encounter_arc"])
    base = load_base_context(topic)
    return f"""You are planning bounded Korean narrative authoring sessions for Pokémon Ancient TRPG.
Do not write the final prose yet. Return only JSON matching the supplied output schema.

TOPIC
- topic_id: {topic['topic_id']}
- title: {topic['title']}
- brief: {topic['brief']}
- requested total player-facing Korean characters: {topic['target_total_chars']}
- profile: {profile}

SESSION RULES
- Each session must own one coherent dramatic/scene job.
- Default target is around {defaults['chars']} Korean characters and {defaults['paragraphs']} paragraphs.
- Hard maximum is 8,000 player-facing Korean characters per session.
- Split large topics into as many sessions as quality requires. Do not compress a 200k-character topic into oversized calls.
- Dependencies must only point backward.
- Session IDs are s001, s002, ... with no gaps.
- Preserve the supplied canon and Korean writing direction.

REFERENCE CONTEXT
{base}
"""


def build_plan(topic: dict[str, Any]) -> str:
    tdir = topic_dir(topic["topic_id"])
    temp = tdir / ".planner-output.json"
    status, diagnostics = run_codex(planner_prompt(topic), PLAN_SCHEMA, temp)
    if status == "quota":
        topic["status"] = "awaiting_chatgpt_plan"
        topic["updated_at"] = now_iso()
        write_json(tdir / "topic.json", topic)
        write_text(tdir / "last-worker-diagnostic.txt", diagnostics[-12000:])
        return "awaiting_chatgpt"
    if status != "ok":
        topic["status"] = "blocked"
        topic["updated_at"] = now_iso()
        write_json(tdir / "topic.json", topic)
        write_text(tdir / "last-worker-diagnostic.txt", diagnostics[-12000:])
        return "blocked"
    try:
        plan = read_json(temp)
    finally:
        temp.unlink(missing_ok=True)
    validate_plan(plan, topic["topic_id"])
    for session in plan["sessions"]:
        session["status"] = "ready"
        session["revision"] = 1
        session["owner_review"] = "pending"
    plan["schema_version"] = 1
    plan["created_at"] = now_iso()
    write_json(tdir / "plan.json", plan)
    topic["status"] = "authoring"
    topic["updated_at"] = now_iso()
    write_json(tdir / "topic.json", topic)
    return "progress"


def validate_plan(plan: dict[str, Any], expected_topic_id: str) -> None:
    if plan.get("topic_id") != expected_topic_id:
        raise ValueError("planner changed topic_id")
    sessions = plan.get("sessions")
    if not isinstance(sessions, list) or not sessions:
        raise ValueError("plan must contain sessions")
    seen: set[str] = set()
    for index, session in enumerate(sessions, start=1):
        expected = f"s{index:03d}"
        if session.get("session_id") != expected:
            raise ValueError(f"expected session_id {expected}")
        target_chars = int(session.get("target_chars", 0))
        if not 500 <= target_chars <= 8000:
            raise ValueError(f"{expected} target_chars out of bounds")
        for dep in session.get("dependencies", []):
            if dep not in seen:
                raise ValueError(f"{expected} has non-backward/unknown dependency {dep}")
        seen.add(expected)


def dependency_context(tdir: pathlib.Path, session: dict[str, Any]) -> tuple[list[dict[str, Any]], list[str]]:
    summaries: list[dict[str, Any]] = []
    full_text: list[str] = []
    for dep in session.get("dependencies", []):
        sdir = tdir / "sessions" / dep
        summary_path = sdir / "summary.json"
        if summary_path.exists():
            summaries.append(read_json(summary_path))
        if f"full:{dep}" in session.get("continuity_focus", []):
            prose_path = sdir / "draft.ko-KR.md"
            if prose_path.exists():
                full_text.append(f"===== FULL DEPENDENCY {dep} =====\n{prose_path.read_text(encoding='utf-8')}")
    return summaries, full_text


def build_session_context(topic: dict[str, Any], session: dict[str, Any]) -> dict[str, Any]:
    tdir = topic_dir(topic["topic_id"])
    summaries, full_text = dependency_context(tdir, session)
    ledger = read_json(tdir / "continuity-ledger.json")
    return {
        "schema_version": 1,
        "topic": {
            "topic_id": topic["topic_id"],
            "title": topic["title"],
            "brief": topic["brief"],
        },
        "session": session,
        "canon_and_style": load_base_context(topic),
        "continuity_ledger": ledger,
        "dependency_summaries": summaries,
        "full_dependency_text": full_text,
    }


def session_prompt(context: dict[str, Any]) -> str:
    session = context["session"]
    serialized = json.dumps(context, ensure_ascii=False, indent=2)
    return f"""Write exactly one bounded Korean narrative authoring session for Pokémon Ancient TRPG.
Return only JSON matching the supplied output schema.

QUALITY PRIORITIES
1. Native, easy-to-understand Korean. Never write translationese.
2. This is playable TRPG/text-RPG prose: concrete scene geography, tension and decision-relevant causality matter more than literary ornament.
3. Pokémon presence must feel physical/ecological when relevant: posture, movement, sound, distance, threat vector and environmental response.
4. Keep the approved pre-modern proto-Kanto canon. Do not invent durable institutions/rules that conflict with the context.
5. Visual beats should be compatible with high-resolution medieval-feeling pixel art.
6. Avoid generic fantasy filler and survey/questionnaire phrasing.

SIZE CONTRACT
- target Korean characters: approximately {session['target_chars']}
- target paragraphs: approximately {session['target_paragraphs']}
- hard prose ceiling: 8,000 Korean characters
- finish this session's dramatic purpose; do not start later sessions early.

CONTEXT BUNDLE
{serialized}
"""


def paragraph_count(prose: str) -> int:
    return len([p for p in re.split(r"\n\s*\n", prose.strip()) if p.strip()])


def repeated_paragraphs(prose: str) -> list[str]:
    seen: set[str] = set()
    dup: list[str] = []
    for para in [re.sub(r"\s+", " ", p.strip()) for p in re.split(r"\n\s*\n", prose) if p.strip()]:
        key = para.casefold()
        if len(key) >= 30 and key in seen:
            dup.append(para[:120])
        seen.add(key)
    return dup


def qa_session(session: dict[str, Any], output: dict[str, Any]) -> dict[str, Any]:
    prose = str(output.get("prose") or "").strip()
    chars = len(prose)
    paragraphs = paragraph_count(prose)
    failures = []
    if not prose:
        failures.append("empty prose")
    if chars > 8000:
        failures.append(f"hard character ceiling exceeded: {chars} > 8000")
    target = int(session["target_chars"])
    if chars < max(500, int(target * 0.55)):
        failures.append(f"prose materially below target: {chars} vs {target}")
    placeholders = ("TODO", "TBD", "placeholder", "테스트 문구", "검증용")
    for marker in placeholders:
        if marker.casefold() in prose.casefold():
            failures.append(f"forbidden placeholder/proof marker: {marker}")
    dups = repeated_paragraphs(prose)
    if dups:
        failures.append(f"duplicate paragraphs detected: {len(dups)}")
    return {
        "schema_version": 1,
        "status": "pass" if not failures else "fail",
        "characters": chars,
        "paragraphs": paragraphs,
        "target_characters": target,
        "target_paragraphs": int(session["target_paragraphs"]),
        "failures": failures,
        "duplicate_samples": dups,
        "checked_at": now_iso(),
    }


def merge_continuity(tdir: pathlib.Path, output: dict[str, Any]) -> None:
    ledger_path = tdir / "continuity-ledger.json"
    ledger = read_json(ledger_path)
    facts = list(ledger.get("facts", []))
    for item in output["continuity"].get("introduced", []):
        if item not in facts:
            facts.append(item)
    for item in output["continuity"].get("changed", []):
        if item not in facts:
            facts.append(item)
    for resolved in output["continuity"].get("resolved", []):
        facts = [fact for fact in facts if fact != resolved]
    ledger["facts"] = facts[-256:]
    ledger["unresolved_hooks"] = list(dict.fromkeys(output.get("unresolved_hooks", [])))[:128]
    ledger["updated_at"] = now_iso()
    write_json(ledger_path, ledger)


def advance_session(topic: dict[str, Any], plan: dict[str, Any]) -> str:
    tdir = topic_dir(topic["topic_id"])
    session = next((s for s in plan["sessions"] if s.get("status") in ("ready", "revision_requested")), None)
    if session is None:
        if all(s.get("status") == "completed" for s in plan["sessions"]):
            topic["status"] = "complete_pending_owner_review"
            topic["updated_at"] = now_iso()
            write_json(tdir / "topic.json", topic)
            return "complete"
        if any(s.get("status") == "awaiting_chatgpt" for s in plan["sessions"]):
            topic["status"] = "awaiting_chatgpt"
            topic["updated_at"] = now_iso()
            write_json(tdir / "topic.json", topic)
            return "awaiting_chatgpt"
        return "blocked"

    sid = session["session_id"]
    sdir = tdir / "sessions" / sid
    context = build_session_context(topic, session)
    serialized_context = json.dumps(context, ensure_ascii=False, indent=2)
    write_json(sdir / "spec.json", session)
    write_json(sdir / "context.json", {**context, "context_sha256": context_hash(serialized_context)})

    worker = topic.get("worker_preference", "auto")
    if worker == "chatgpt":
        session["status"] = "awaiting_chatgpt"
        session["updated_at"] = now_iso()
        write_json(sdir / "spec.json", session)
        write_json(tdir / "plan.json", plan)
        topic["status"] = "awaiting_chatgpt"
        topic["updated_at"] = now_iso()
        write_json(tdir / "topic.json", topic)
        return "awaiting_chatgpt"

    session["status"] = "running_codex"
    session["updated_at"] = now_iso()
    write_json(sdir / "spec.json", session)
    write_json(tdir / "plan.json", plan)

    temp = sdir / ".codex-output.json"
    status, diagnostics = run_codex(session_prompt(context), SESSION_SCHEMA, temp)
    if status == "quota":
        session["status"] = "awaiting_chatgpt"
        session["updated_at"] = now_iso()
        write_json(sdir / "spec.json", session)
        write_json(tdir / "plan.json", plan)
        topic["status"] = "awaiting_chatgpt"
        topic["updated_at"] = now_iso()
        write_json(tdir / "topic.json", topic)
        write_text(sdir / "last-worker-diagnostic.txt", diagnostics[-12000:])
        temp.unlink(missing_ok=True)
        return "awaiting_chatgpt"
    if status != "ok":
        session["status"] = "blocked"
        session["updated_at"] = now_iso()
        write_json(sdir / "spec.json", session)
        write_json(tdir / "plan.json", plan)
        topic["status"] = "blocked"
        topic["updated_at"] = now_iso()
        write_json(tdir / "topic.json", topic)
        write_text(sdir / "last-worker-diagnostic.txt", diagnostics[-12000:])
        temp.unlink(missing_ok=True)
        return "blocked"

    try:
        output = read_json(temp)
    finally:
        temp.unlink(missing_ok=True)
    qa = qa_session(session, output)
    if qa["status"] != "pass":
        session["status"] = "blocked"
        session["updated_at"] = now_iso()
        write_json(sdir / "spec.json", session)
        write_json(sdir / "qa.json", qa)
        write_json(tdir / "plan.json", plan)
        topic["status"] = "blocked"
        topic["updated_at"] = now_iso()
        write_json(tdir / "topic.json", topic)
        return "blocked"

    write_text(sdir / "draft.ko-KR.md", output["prose"])
    write_json(sdir / "summary.json", {
        "schema_version": 1,
        "topic_id": topic["topic_id"],
        "session_id": sid,
        "revision": session.get("revision", 1),
        "summary": output["summary"],
        "unresolved_hooks": output["unresolved_hooks"],
        "created_at": now_iso(),
    })
    write_json(sdir / "continuity.json", {
        "schema_version": 1,
        "topic_id": topic["topic_id"],
        "session_id": sid,
        "revision": session.get("revision", 1),
        **output["continuity"],
        "unresolved_hooks": output["unresolved_hooks"],
        "created_at": now_iso(),
    })
    qa["model_qa_notes"] = output.get("qa_notes", [])
    write_json(sdir / "qa.json", qa)
    merge_continuity(tdir, output)

    session["status"] = "completed"
    session["worker"] = "codex"
    session["completed_at"] = now_iso()
    session["updated_at"] = now_iso()
    write_json(sdir / "spec.json", session)
    write_json(tdir / "plan.json", plan)
    topic["status"] = "authoring"
    topic["updated_at"] = now_iso()
    write_json(tdir / "topic.json", topic)
    return "progress"


def validate_topic(tdir: pathlib.Path) -> list[str]:
    errors: list[str] = []
    if not (tdir / "topic.json").is_file():
        return [f"missing topic.json: {tdir}"]
    topic = read_json(tdir / "topic.json")
    plan_path = tdir / "plan.json"
    if not plan_path.exists():
        if topic.get("status") not in ("planning", "awaiting_chatgpt_plan", "blocked"):
            errors.append("missing plan.json for non-planning topic")
        return errors
    plan = read_json(plan_path)
    try:
        validate_plan(plan, topic["topic_id"])
    except Exception as exc:
        errors.append(str(exc))
    for session in plan.get("sessions", []):
        if session.get("status") == "completed":
            sdir = tdir / "sessions" / session["session_id"]
            for name in ("spec.json", "context.json", "draft.ko-KR.md", "summary.json", "continuity.json", "qa.json"):
                if not (sdir / name).is_file():
                    errors.append(f"{session['session_id']}: missing {name}")
            qa_path = sdir / "qa.json"
            if qa_path.exists() and read_json(qa_path).get("status") != "pass":
                errors.append(f"{session['session_id']}: completed with failing qa")
    return errors


def cmd_request_info(args: argparse.Namespace) -> int:
    request = extract_request(pathlib.Path(args.event))
    print(json.dumps({
        "topic_id": request["topic_id"],
        "branch": f"authoring/{request['topic_id']}",
        "issue_number": request.get("issue_number"),
    }, ensure_ascii=False))
    return 0


def cmd_advance_one(args: argparse.Namespace) -> int:
    request = extract_request(pathlib.Path(args.event))
    topic = bootstrap_topic(request)
    tdir = topic_dir(topic["topic_id"])
    plan_path = tdir / "plan.json"
    if not plan_path.exists():
        result = build_plan(topic)
    else:
        plan = read_json(plan_path)
        result = advance_session(topic, plan)
    print(f"AUTHORING_RESULT={result}")
    print(f"AUTHORING_TOPIC={topic['topic_id']}")
    return {"progress": 0, "complete": 10, "awaiting_chatgpt": 20, "blocked": 30}.get(result, 30)


def cmd_validate(args: argparse.Namespace) -> int:
    errors: list[str] = []
    if args.topic:
        errors.extend(validate_topic(topic_dir(args.topic)))
    elif AUTHORING_ROOT.exists():
        for tdir in sorted(p for p in AUTHORING_ROOT.iterdir() if p.is_dir()):
            errors.extend(validate_topic(tdir))
    if errors:
        for error in errors:
            print(f"ERROR: {error}", file=sys.stderr)
        return 1
    print("Narrative authoring artifacts valid")
    return 0


def main() -> int:
    parser = argparse.ArgumentParser()
    sub = parser.add_subparsers(dest="command", required=True)

    p_info = sub.add_parser("request-info")
    p_info.add_argument("--event", required=True)
    p_info.set_defaults(func=cmd_request_info)

    p_advance = sub.add_parser("advance-one")
    p_advance.add_argument("--event", required=True)
    p_advance.set_defaults(func=cmd_advance_one)

    p_validate = sub.add_parser("validate")
    p_validate.add_argument("--topic")
    p_validate.set_defaults(func=cmd_validate)

    args = parser.parse_args()
    try:
        return int(args.func(args))
    except FileNotFoundError as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 31
    except (ValueError, json.JSONDecodeError) as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 32


if __name__ == "__main__":
    raise SystemExit(main())
