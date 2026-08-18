#!/usr/bin/env python3
"""Provider-agnostic narrative authoring orchestrator for P8.3.

GitHub is the durable queue. Repository artifacts, not hidden model-chat memory,
are the continuity source of truth. Every model unit is bounded and persisted
before the next unit begins.
"""
from __future__ import annotations

import argparse
import datetime as dt
import hashlib
import json
import os
import pathlib
import re
import shutil
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

MAX_FULL_CONTEXT_FILE_CHARS = 40_000
MAX_CONTEXT_SECTION_CHARS = 30_000
MAX_BASE_CONTEXT_CHARS = 100_000
MAX_FULL_DEPENDENCY_CHARS = 16_000

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

SESSION_ARTIFACTS = (
    "spec.json",
    "context.json",
    "draft.ko-KR.md",
    "summary.json",
    "continuity.json",
    "qa.json",
    "last-worker-diagnostic.txt",
)


def now_iso() -> str:
    return dt.datetime.now(dt.timezone.utc).replace(microsecond=0).isoformat()


def read_json(path: pathlib.Path) -> Any:
    return json.loads(path.read_text(encoding="utf-8"))


def read_json_input(path: str) -> Any:
    if path == "-":
        return json.load(sys.stdin)
    return read_json(pathlib.Path(path))


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


def stable_request_key(issue: dict[str, Any], body: str, title: str) -> str:
    payload = json.dumps(
        {
            "number": issue.get("number"),
            "updated_at": issue.get("updated_at"),
            "title": title,
            "body": body,
        },
        ensure_ascii=False,
        sort_keys=True,
    )
    return hashlib.sha256(payload.encode("utf-8")).hexdigest()[:24]


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
    request.setdefault("mode", "author")
    request.setdefault(
        "target_total_chars",
        PROFILE_DEFAULTS.get(request["profile"], PROFILE_DEFAULTS["encounter_arc"])["chars"],
    )
    request.setdefault("context_files", [])
    request.setdefault("context_sections", [])
    request.setdefault("session_id", None)
    request.setdefault("feedback", "")
    request.setdefault("cascade", False)
    request["issue_number"] = issue.get("number")
    request["issue_url"] = issue.get("html_url")
    request["request_key"] = stable_request_key(issue, body, title)
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


def read_full_context_file(rel: str) -> str:
    path = safe_repo_file(rel)
    text = path.read_text(encoding="utf-8")
    if len(text) > MAX_FULL_CONTEXT_FILE_CHARS:
        raise ValueError(
            f"context file too large for full injection ({len(text)} chars): {rel}; "
            "use context_sections with start_marker/end_marker"
        )
    return f"\n===== {path.relative_to(ROOT)} =====\n{text}\n"


def read_context_section(selector: dict[str, Any]) -> str:
    rel = str(selector.get("path") or "")
    if not rel:
        raise ValueError("context section requires path")
    start_marker = str(selector.get("start_marker") or "")
    if not start_marker:
        raise ValueError(f"context section requires start_marker: {rel}")
    end_marker = selector.get("end_marker")
    path = safe_repo_file(rel)
    text = path.read_text(encoding="utf-8")
    start = text.find(start_marker)
    if start < 0:
        raise ValueError(f"context start_marker not found in {rel}: {start_marker}")
    if end_marker:
        end = text.find(str(end_marker), start + len(start_marker))
        if end < 0:
            raise ValueError(f"context end_marker not found in {rel}: {end_marker}")
    else:
        end = min(len(text), start + MAX_CONTEXT_SECTION_CHARS)
    section = text[start:end].strip()
    if len(section) > MAX_CONTEXT_SECTION_CHARS:
        raise ValueError(
            f"context section too large ({len(section)} chars): {rel}; narrow the markers"
        )
    return (
        f"\n===== {path.relative_to(ROOT)} :: {start_marker} =====\n"
        f"{section}\n"
    )


def bootstrap_topic(request: dict[str, Any]) -> dict[str, Any]:
    tdir = topic_dir(request["topic_id"])
    topic_path = tdir / "topic.json"
    if topic_path.exists():
        return read_json(topic_path)
    profile = str(request.get("profile", "encounter_arc"))
    defaults = PROFILE_DEFAULTS.get(profile, PROFILE_DEFAULTS["encounter_arc"])
    topic = {
        "schema_version": 2,
        "topic_id": request["topic_id"],
        "title": request["title"],
        "brief": request.get("brief", ""),
        "profile": profile,
        "target_total_chars": int(request.get("target_total_chars") or defaults["chars"]),
        "worker_preference": request.get("worker", "auto"),
        "context_files": list(request.get("context_files") or []),
        "context_sections": list(request.get("context_sections") or []),
        "status": "planning",
        "owner_review": "pending",
        "source_issue_number": request.get("issue_number"),
        "applied_request_keys": [],
        "created_at": now_iso(),
        "updated_at": now_iso(),
    }
    write_json(topic_path, topic)
    write_json(
        tdir / "continuity-ledger.json",
        {"schema_version": 2, "facts": [], "unresolved_hooks": [], "updated_at": now_iso()},
    )
    return topic


def load_base_context(topic: dict[str, Any]) -> str:
    chunks: list[str] = []
    for path in (CANON_DIGEST, FACTORY_GUIDE, PIXEL_GUIDE):
        chunks.append(
            f"\n===== {path.relative_to(ROOT)} =====\n"
            f"{path.read_text(encoding='utf-8')}\n"
        )
    for rel in topic.get("context_files", []):
        chunks.append(read_full_context_file(str(rel)))
    for selector in topic.get("context_sections", []):
        if not isinstance(selector, dict):
            raise ValueError("context_sections entries must be objects")
        chunks.append(read_context_section(selector))
    result = "".join(chunks)
    if len(result) > MAX_BASE_CONTEXT_CHARS:
        raise ValueError(
            f"base authoring context exceeds {MAX_BASE_CONTEXT_CHARS} chars ({len(result)}); "
            "narrow context_files/context_sections"
        )
    return result


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
    try:
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
    except FileNotFoundError as exc:
        return "missing", str(exc)
    combined = f"{proc.stdout}\n{proc.stderr}".strip()
    if proc.returncode == 0:
        return "ok", combined
    lowered = combined.lower()
    if any(marker in lowered for marker in QUOTA_MARKERS):
        return "quota", combined
    if any(marker in lowered for marker in AUTH_MARKERS):
        return "auth", combined
    return "error", combined


def plan_context(topic: dict[str, Any]) -> dict[str, Any]:
    profile = topic.get("profile", "encounter_arc")
    defaults = PROFILE_DEFAULTS.get(profile, PROFILE_DEFAULTS["encounter_arc"])
    return {
        "schema_version": 2,
        "topic": {
            "topic_id": topic["topic_id"],
            "title": topic["title"],
            "brief": topic["brief"],
            "profile": profile,
            "target_total_chars": topic["target_total_chars"],
        },
        "default_session_target_chars": defaults["chars"],
        "default_session_target_paragraphs": defaults["paragraphs"],
        "hard_session_char_ceiling": 8000,
        "canon_and_style": load_base_context(topic),
    }


def planner_prompt(context: dict[str, Any]) -> str:
    topic = context["topic"]
    return f"""You are planning bounded Korean narrative authoring sessions for Pokémon Ancient TRPG.
Do not write final prose. Return only JSON matching the supplied output schema.

TOPIC
{json.dumps(topic, ensure_ascii=False, indent=2)}

SESSION RULES
- Each session owns one coherent dramatic/scene job.
- Default target is around {context['default_session_target_chars']} Korean characters and {context['default_session_target_paragraphs']} paragraphs.
- Hard maximum is 8,000 player-facing Korean characters per session.
- Split large topics into as many sessions as quality requires. Never compress a ~200k-character topic into oversized calls.
- Dependencies point only backward.
- IDs are s001, s002, ... with no gaps.
- Use dependency summaries by default; request full dependency prose only when continuity truly requires it by adding `full:<session-id>` to continuity_focus.
- Preserve supplied canon and native-Korean writing direction.

REFERENCE CONTEXT
{context['canon_and_style']}
"""


def normalize_plan(plan: dict[str, Any], topic: dict[str, Any]) -> dict[str, Any]:
    validate_plan(plan, topic["topic_id"])
    for session in plan["sessions"]:
        session["status"] = "ready"
        session["revision"] = 1
        session["owner_review"] = "pending"
        session.setdefault("owner_feedback", "")
    plan["schema_version"] = 2
    plan["created_at"] = now_iso()
    plan["updated_at"] = now_iso()
    return plan


def persist_plan(topic: dict[str, Any], plan: dict[str, Any], worker: str) -> None:
    tdir = topic_dir(topic["topic_id"])
    plan["planner_worker"] = worker
    plan["updated_at"] = now_iso()
    write_json(tdir / "plan.json", plan)
    topic["status"] = "authoring"
    topic["updated_at"] = now_iso()
    write_json(tdir / "topic.json", topic)
    (tdir / "last-worker-diagnostic.txt").unlink(missing_ok=True)


def build_plan(topic: dict[str, Any]) -> str:
    tdir = topic_dir(topic["topic_id"])
    context = plan_context(topic)
    serialized = json.dumps(context, ensure_ascii=False, indent=2)
    write_json(tdir / "plan-context.json", {**context, "context_sha256": context_hash(serialized)})

    if topic.get("worker_preference") == "chatgpt":
        topic["status"] = "awaiting_chatgpt_plan"
        topic["updated_at"] = now_iso()
        write_json(tdir / "topic.json", topic)
        return "awaiting_chatgpt"

    temp = tdir / ".planner-output.json"
    status, diagnostics = run_codex(planner_prompt(context), PLAN_SCHEMA, temp)
    if status == "quota":
        topic["status"] = "awaiting_chatgpt_plan"
        topic["updated_at"] = now_iso()
        write_json(tdir / "topic.json", topic)
        write_text(tdir / "last-worker-diagnostic.txt", diagnostics[-12000:])
        return "awaiting_chatgpt"
    if status != "ok":
        topic["status"] = "blocked"
        topic["updated_at"] = now_iso()
        topic["blocked_reason"] = f"codex_{status}"
        write_json(tdir / "topic.json", topic)
        write_text(tdir / "last-worker-diagnostic.txt", diagnostics[-12000:])
        return "blocked"
    try:
        plan = normalize_plan(read_json(temp), topic)
    finally:
        temp.unlink(missing_ok=True)
    persist_plan(topic, plan, "codex")
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


def dependency_context(
    tdir: pathlib.Path, session: dict[str, Any]
) -> tuple[list[dict[str, Any]], list[str]]:
    summaries: list[dict[str, Any]] = []
    full_text: list[str] = []
    total_full_chars = 0
    for dep in session.get("dependencies", []):
        sdir = tdir / "sessions" / dep
        summary_path = sdir / "summary.json"
        if summary_path.exists():
            summaries.append(read_json(summary_path))
        if f"full:{dep}" in session.get("continuity_focus", []):
            prose_path = sdir / "draft.ko-KR.md"
            if prose_path.exists():
                prose = prose_path.read_text(encoding="utf-8")
                total_full_chars += len(prose)
                if total_full_chars > MAX_FULL_DEPENDENCY_CHARS:
                    raise ValueError(
                        f"full dependency prose exceeds {MAX_FULL_DEPENDENCY_CHARS} chars; "
                        "use summaries or narrow full-text dependencies"
                    )
                full_text.append(f"===== FULL DEPENDENCY {dep} =====\n{prose}")
    return summaries, full_text


def build_session_context(topic: dict[str, Any], session: dict[str, Any]) -> dict[str, Any]:
    tdir = topic_dir(topic["topic_id"])
    summaries, full_text = dependency_context(tdir, session)
    ledger = read_json(tdir / "continuity-ledger.json")
    return {
        "schema_version": 2,
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
    feedback = session.get("owner_feedback") or "none"
    return f"""Write exactly one bounded Korean narrative authoring session for Pokémon Ancient TRPG.
Return only JSON matching the supplied output schema.

QUALITY PRIORITIES
1. Native, easy-to-understand Korean. Never write translationese.
2. This is playable TRPG/text-RPG prose: geography, tension and decision-relevant causality matter more than ornamental language.
3. Pokémon presence must feel physical/ecological when relevant: posture, movement, sound, distance, threat vector and environmental response.
4. Keep approved pre-modern proto-Kanto canon. Do not invent durable institutions/rules that conflict with context.
5. Visual beats must translate naturally into high-resolution medieval-feeling pixel art.
6. Avoid generic fantasy filler, questionnaires and test/proof phrasing.
7. Respect explicit owner revision feedback below when present.

OWNER REVISION FEEDBACK
{feedback}

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
    for para in [
        re.sub(r"\s+", " ", p.strip())
        for p in re.split(r"\n\s*\n", prose)
        if p.strip()
    ]:
        key = para.casefold()
        if len(key) >= 30 and key in seen:
            dup.append(para[:120])
        seen.add(key)
    return dup


def qa_session(session: dict[str, Any], output: dict[str, Any]) -> dict[str, Any]:
    prose = str(output.get("prose") or "").strip()
    chars = len(prose)
    paragraphs = paragraph_count(prose)
    failures: list[str] = []
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
        "schema_version": 2,
        "status": "pass" if not failures else "fail",
        "characters": chars,
        "paragraphs": paragraphs,
        "target_characters": target,
        "target_paragraphs": int(session["target_paragraphs"]),
        "failures": failures,
        "duplicate_samples": dups,
        "checked_at": now_iso(),
    }


def rebuild_continuity_ledger(tdir: pathlib.Path, plan: dict[str, Any]) -> None:
    facts: list[str] = []
    hooks: list[str] = []
    for session in plan.get("sessions", []):
        if session.get("status") != "completed":
            continue
        continuity_path = tdir / "sessions" / session["session_id"] / "continuity.json"
        if not continuity_path.exists():
            continue
        continuity = read_json(continuity_path)
        for item in continuity.get("introduced", []):
            if item not in facts:
                facts.append(item)
        for item in continuity.get("changed", []):
            if item not in facts:
                facts.append(item)
        for resolved in continuity.get("resolved", []):
            facts = [fact for fact in facts if fact != resolved]
        for hook in continuity.get("unresolved_hooks", []):
            if hook not in hooks:
                hooks.append(hook)
    write_json(
        tdir / "continuity-ledger.json",
        {
            "schema_version": 2,
            "facts": facts[-256:],
            "unresolved_hooks": hooks[-128:],
            "updated_at": now_iso(),
        },
    )


def archive_session_revision(sdir: pathlib.Path, revision: int) -> None:
    archive = sdir / "revisions" / f"r{revision:03d}"
    archive.mkdir(parents=True, exist_ok=True)
    for name in SESSION_ARTIFACTS:
        source = sdir / name
        if source.exists():
            shutil.copy2(source, archive / name)


def transitive_dependents(plan: dict[str, Any], session_id: str) -> list[dict[str, Any]]:
    affected = {session_id}
    result: list[dict[str, Any]] = []
    for session in plan.get("sessions", []):
        if session.get("session_id") == session_id:
            continue
        if any(dep in affected for dep in session.get("dependencies", [])):
            affected.add(session["session_id"])
            result.append(session)
    return result


def prepare_revision(
    topic: dict[str, Any], plan: dict[str, Any], session_id: str, feedback: str, cascade: bool
) -> None:
    tdir = topic_dir(topic["topic_id"])
    session = next((s for s in plan["sessions"] if s.get("session_id") == session_id), None)
    if session is None:
        raise ValueError(f"revision session not found: {session_id}")
    if session.get("status") not in ("completed", "blocked", "continuity_review"):
        raise ValueError(
            f"cannot revise {session_id} from status {session.get('status')}; finish or resolve it first"
        )

    current_revision = int(session.get("revision", 1))
    sdir = tdir / "sessions" / session_id
    if sdir.exists():
        archive_session_revision(sdir, current_revision)
    session["revision"] = current_revision + 1
    session["status"] = "revision_requested"
    session["owner_review"] = "pending"
    session["owner_feedback"] = feedback
    session["revision_requested_at"] = now_iso()

    for dependent in transitive_dependents(plan, session_id):
        if dependent.get("status") not in ("completed", "continuity_review"):
            continue
        if cascade:
            dep_id = dependent["session_id"]
            dep_revision = int(dependent.get("revision", 1))
            dep_dir = tdir / "sessions" / dep_id
            if dep_dir.exists():
                archive_session_revision(dep_dir, dep_revision)
            dependent["revision"] = dep_revision + 1
            dependent["status"] = "revision_requested"
            dependent["owner_review"] = "pending"
            dependent["owner_feedback"] = (
                f"Upstream session {session_id} changed. Re-author this dependent session while "
                "preserving its dramatic purpose and reconciling the new upstream continuity."
            )
        else:
            dependent["status"] = "continuity_review"
            dependent["continuity_review_reason"] = f"upstream_revision:{session_id}"

    topic["status"] = "authoring"
    topic["updated_at"] = now_iso()
    write_json(tdir / "plan.json", plan)
    write_json(tdir / "topic.json", topic)
    rebuild_continuity_ledger(tdir, plan)


def apply_request_intent(request: dict[str, Any], topic: dict[str, Any]) -> None:
    key = request["request_key"]
    applied = list(topic.get("applied_request_keys", []))
    if key in applied:
        return
    mode = str(request.get("mode") or "author")
    tdir = topic_dir(topic["topic_id"])
    plan_path = tdir / "plan.json"

    if mode == "revise":
        if not plan_path.exists():
            raise ValueError("cannot revise before plan exists")
        session_id = str(request.get("session_id") or "")
        if not session_id:
            raise ValueError("revision request requires session_id")
        plan = read_json(plan_path)
        prepare_revision(
            topic,
            plan,
            session_id,
            str(request.get("feedback") or ""),
            bool(request.get("cascade")),
        )
    elif mode == "resume":
        if plan_path.exists():
            plan = read_json(plan_path)
            requested = request.get("session_id")
            target = next(
                (
                    s
                    for s in plan["sessions"]
                    if s.get("status") == "blocked"
                    and (not requested or s.get("session_id") == requested)
                ),
                None,
            )
            if target is not None:
                target["status"] = "ready"
                target["updated_at"] = now_iso()
                write_json(plan_path, plan)
                topic["status"] = "authoring"
                topic.pop("blocked_reason", None)
    elif mode != "author":
        raise ValueError(f"unsupported authoring mode: {mode}")

    applied.append(key)
    topic["applied_request_keys"] = applied[-32:]
    topic["updated_at"] = now_iso()
    write_json(tdir / "topic.json", topic)


def persist_session_output(
    topic: dict[str, Any],
    plan: dict[str, Any],
    session: dict[str, Any],
    output: dict[str, Any],
    worker: str,
) -> str:
    tdir = topic_dir(topic["topic_id"])
    sid = session["session_id"]
    sdir = tdir / "sessions" / sid
    qa = qa_session(session, output)
    if qa["status"] != "pass":
        session["status"] = "blocked"
        session["updated_at"] = now_iso()
        write_json(sdir / "spec.json", session)
        write_json(sdir / "qa.json", qa)
        write_json(tdir / "plan.json", plan)
        topic["status"] = "blocked"
        topic["blocked_reason"] = f"qa_failed:{sid}"
        topic["updated_at"] = now_iso()
        write_json(tdir / "topic.json", topic)
        return "blocked"

    write_text(sdir / "draft.ko-KR.md", str(output["prose"]))
    write_json(
        sdir / "summary.json",
        {
            "schema_version": 2,
            "topic_id": topic["topic_id"],
            "session_id": sid,
            "revision": session.get("revision", 1),
            "summary": output["summary"],
            "unresolved_hooks": output["unresolved_hooks"],
            "worker": worker,
            "created_at": now_iso(),
        },
    )
    write_json(
        sdir / "continuity.json",
        {
            "schema_version": 2,
            "topic_id": topic["topic_id"],
            "session_id": sid,
            "revision": session.get("revision", 1),
            **output["continuity"],
            "unresolved_hooks": output["unresolved_hooks"],
            "worker": worker,
            "created_at": now_iso(),
        },
    )
    qa["model_qa_notes"] = output.get("qa_notes", [])
    qa["worker"] = worker
    write_json(sdir / "qa.json", qa)

    session["status"] = "completed"
    session["worker"] = worker
    session["completed_at"] = now_iso()
    session["updated_at"] = now_iso()
    session.pop("continuity_review_reason", None)
    write_json(sdir / "spec.json", session)
    write_json(tdir / "plan.json", plan)
    rebuild_continuity_ledger(tdir, plan)
    topic["status"] = "authoring"
    topic.pop("blocked_reason", None)
    topic["updated_at"] = now_iso()
    write_json(tdir / "topic.json", topic)
    (sdir / "last-worker-diagnostic.txt").unlink(missing_ok=True)
    return "progress"


def advance_session(topic: dict[str, Any], plan: dict[str, Any]) -> str:
    tdir = topic_dir(topic["topic_id"])
    session = next(
        (s for s in plan["sessions"] if s.get("status") in ("ready", "revision_requested")),
        None,
    )
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
        if any(s.get("status") == "continuity_review" for s in plan["sessions"]):
            topic["status"] = "continuity_review"
            topic["updated_at"] = now_iso()
            write_json(tdir / "topic.json", topic)
            return "continuity_review"
        return "blocked"

    sid = session["session_id"]
    sdir = tdir / "sessions" / sid
    context = build_session_context(topic, session)
    serialized_context = json.dumps(context, ensure_ascii=False, indent=2)
    write_json(sdir / "spec.json", session)
    write_json(sdir / "context.json", {**context, "context_sha256": context_hash(serialized_context)})

    if topic.get("worker_preference") == "chatgpt":
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
        topic["blocked_reason"] = f"codex_{status}:{sid}"
        topic["updated_at"] = now_iso()
        write_json(tdir / "topic.json", topic)
        write_text(sdir / "last-worker-diagnostic.txt", diagnostics[-12000:])
        temp.unlink(missing_ok=True)
        return "blocked"

    try:
        output = read_json(temp)
    finally:
        temp.unlink(missing_ok=True)
    return persist_session_output(topic, plan, session, output, "codex")


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
        status = session.get("status")
        if status == "completed":
            sdir = tdir / "sessions" / session["session_id"]
            for name in (
                "spec.json",
                "context.json",
                "draft.ko-KR.md",
                "summary.json",
                "continuity.json",
                "qa.json",
            ):
                if not (sdir / name).is_file():
                    errors.append(f"{session['session_id']}: missing {name}")
            qa_path = sdir / "qa.json"
            if qa_path.exists() and read_json(qa_path).get("status") != "pass":
                errors.append(f"{session['session_id']}: completed with failing qa")
        if status == "awaiting_chatgpt":
            sdir = tdir / "sessions" / session["session_id"]
            if not (sdir / "context.json").exists():
                errors.append(f"{session['session_id']}: awaiting_chatgpt without context.json")
    return errors


def cmd_request_info(args: argparse.Namespace) -> int:
    request = extract_request(pathlib.Path(args.event))
    print(
        json.dumps(
            {
                "topic_id": request["topic_id"],
                "branch": f"authoring/{request['topic_id']}",
                "issue_number": request.get("issue_number"),
                "mode": request.get("mode"),
            },
            ensure_ascii=False,
        )
    )
    return 0


def cmd_advance_one(args: argparse.Namespace) -> int:
    request = extract_request(pathlib.Path(args.event))
    topic = bootstrap_topic(request)
    apply_request_intent(request, topic)
    topic = read_json(topic_dir(topic["topic_id"]) / "topic.json")
    tdir = topic_dir(topic["topic_id"])
    plan_path = tdir / "plan.json"
    if not plan_path.exists():
        result = build_plan(topic)
    else:
        plan = read_json(plan_path)
        result = advance_session(topic, plan)
    print(f"AUTHORING_RESULT={result}")
    print(f"AUTHORING_TOPIC={topic['topic_id']}")
    return {
        "progress": 0,
        "complete": 10,
        "awaiting_chatgpt": 20,
        "continuity_review": 25,
        "blocked": 30,
    }.get(result, 30)


def cmd_apply_plan(args: argparse.Namespace) -> int:
    tdir = topic_dir(args.topic)
    topic = read_json(tdir / "topic.json")
    if topic.get("status") not in ("awaiting_chatgpt_plan", "planning", "blocked"):
        raise ValueError(f"topic is not waiting for a plan: {topic.get('status')}")
    plan = normalize_plan(read_json_input(args.input), topic)
    persist_plan(topic, plan, args.worker)
    print(f"Applied {args.worker} plan for {args.topic}")
    return 0


def cmd_apply_session(args: argparse.Namespace) -> int:
    tdir = topic_dir(args.topic)
    topic = read_json(tdir / "topic.json")
    plan = read_json(tdir / "plan.json")
    session = next((s for s in plan["sessions"] if s.get("session_id") == args.session), None)
    if session is None:
        raise ValueError(f"session not found: {args.session}")
    if session.get("status") not in (
        "awaiting_chatgpt",
        "revision_requested",
        "ready",
        "blocked",
    ):
        raise ValueError(
            f"session {args.session} cannot accept external worker output from {session.get('status')}"
        )
    sdir = tdir / "sessions" / args.session
    if not (sdir / "context.json").exists():
        context = build_session_context(topic, session)
        serialized = json.dumps(context, ensure_ascii=False, indent=2)
        write_json(sdir / "context.json", {**context, "context_sha256": context_hash(serialized)})
    output = read_json_input(args.input)
    result = persist_session_output(topic, plan, session, output, args.worker)
    print(f"APPLY_SESSION_RESULT={result}")
    return 0 if result == "progress" else 1


def cmd_pending(args: argparse.Namespace) -> int:
    tdir = topic_dir(args.topic)
    topic = read_json(tdir / "topic.json")
    result: dict[str, Any] = {"topic": topic}
    plan_path = tdir / "plan.json"
    if not plan_path.exists():
        context_path = tdir / "plan-context.json"
        result["pending_kind"] = "plan"
        if context_path.exists():
            result["context"] = read_json(context_path)
    else:
        plan = read_json(plan_path)
        pending = next(
            (
                s
                for s in plan["sessions"]
                if s.get("status") in (
                    "awaiting_chatgpt",
                    "revision_requested",
                    "continuity_review",
                    "blocked",
                )
            ),
            None,
        )
        result["pending_kind"] = "session" if pending else "none"
        result["session"] = pending
        if pending:
            context_path = tdir / "sessions" / pending["session_id"] / "context.json"
            if context_path.exists():
                result["context"] = read_json(context_path)
    print(json.dumps(result, ensure_ascii=False, indent=2))
    return 0


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

    p_plan = sub.add_parser("apply-plan-output")
    p_plan.add_argument("--topic", required=True)
    p_plan.add_argument("--input", required=True, help="JSON file path or - for stdin")
    p_plan.add_argument("--worker", default="chatgpt")
    p_plan.set_defaults(func=cmd_apply_plan)

    p_session = sub.add_parser("apply-session-output")
    p_session.add_argument("--topic", required=True)
    p_session.add_argument("--session", required=True)
    p_session.add_argument("--input", required=True, help="JSON file path or - for stdin")
    p_session.add_argument("--worker", default="chatgpt")
    p_session.set_defaults(func=cmd_apply_session)

    p_pending = sub.add_parser("pending")
    p_pending.add_argument("--topic", required=True)
    p_pending.set_defaults(func=cmd_pending)

    p_validate = sub.add_parser("validate")
    p_validate.add_argument("--topic")
    p_validate.set_defaults(func=cmd_validate)

    args = parser.parse_args()
    try:
        return int(args.func(args))
    except (FileNotFoundError, ValueError, json.JSONDecodeError, KeyError) as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 32


if __name__ == "__main__":
    raise SystemExit(main())
