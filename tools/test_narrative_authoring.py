#!/usr/bin/env python3
from __future__ import annotations

import importlib.util
import json
import pathlib
import subprocess
import tempfile
import unittest
from unittest import mock

MODULE_PATH = pathlib.Path(__file__).with_name("narrative_authoring.py")
SPEC = importlib.util.spec_from_file_location("narrative_authoring", MODULE_PATH)
assert SPEC and SPEC.loader
na = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(na)


class NarrativeAuthoringTests(unittest.TestCase):
    def test_request_issue_parsing(self) -> None:
        with tempfile.TemporaryDirectory() as tmp:
            event = pathlib.Path(tmp) / "event.json"
            event.write_text(
                json.dumps(
                    {
                        "issue": {
                            "number": 12,
                            "updated_at": "2026-08-18T05:00:00Z",
                            "title": "[authoring] windbreak-beedrill",
                            "body": json.dumps(
                                {
                                    "title": "방풍림 독침붕",
                                    "brief": "초반 조우",
                                    "target_total_chars": 20000,
                                    "mode": "revise",
                                    "session_id": "s002",
                                    "feedback": "위협 묘사를 강화",
                                },
                                ensure_ascii=False,
                            ),
                        }
                    },
                    ensure_ascii=False,
                ),
                encoding="utf-8",
            )
            request = na.extract_request(event)
            self.assertEqual(request["topic_id"], "windbreak-beedrill")
            self.assertEqual(request["title"], "방풍림 독침붕")
            self.assertEqual(request["issue_number"], 12)
            self.assertEqual(request["worker"], "auto")
            self.assertEqual(request["mode"], "revise")
            self.assertEqual(request["session_id"], "s002")
            self.assertEqual(len(request["request_key"]), 24)

    def test_plan_requires_strict_backward_dependencies(self) -> None:
        invalid = {
            "topic_id": "topic",
            "title": "topic",
            "sessions": [
                {
                    "session_id": "s001",
                    "title": "one",
                    "purpose": "one",
                    "target_chars": 2000,
                    "target_paragraphs": 8,
                    "dependencies": ["s002"],
                    "continuity_focus": [],
                },
                {
                    "session_id": "s002",
                    "title": "two",
                    "purpose": "two",
                    "target_chars": 2000,
                    "target_paragraphs": 8,
                    "dependencies": [],
                    "continuity_focus": [],
                },
            ],
        }
        with self.assertRaises(ValueError):
            na.validate_plan(invalid, "topic")

    def test_context_section_extracts_only_requested_range(self) -> None:
        with tempfile.TemporaryDirectory() as tmp:
            root = pathlib.Path(tmp)
            path = root / "docs" / "dossiers.md"
            path.parent.mkdir(parents=True)
            path.write_text(
                "## #013 Weedle\nweedle facts\n---\n## #015 Beedrill\nbeedrill facts\nneedle facts\n---\n## #016 Pidgey\npidgey facts",
                encoding="utf-8",
            )
            with mock.patch.object(na, "ROOT", root):
                result = na.read_context_section(
                    {
                        "path": "docs/dossiers.md",
                        "start_marker": "## #015 Beedrill",
                        "end_marker": "---\n## #016 Pidgey",
                    }
                )
            self.assertIn("beedrill facts", result)
            self.assertIn("needle facts", result)
            self.assertNotIn("weedle facts", result)
            self.assertNotIn("pidgey facts", result)

    def test_full_context_rejects_oversized_file(self) -> None:
        with tempfile.TemporaryDirectory() as tmp:
            root = pathlib.Path(tmp)
            path = root / "huge.md"
            path.write_text("x" * (na.MAX_FULL_CONTEXT_FILE_CHARS + 1), encoding="utf-8")
            with mock.patch.object(na, "ROOT", root):
                with self.assertRaises(ValueError):
                    na.read_full_context_file("huge.md")

    def test_session_qa_accepts_bounded_unique_prose(self) -> None:
        session = {"target_chars": 500, "target_paragraphs": 4}
        paragraphs = [
            "방풍림 끝의 바람이 갑자기 끊겼다. 길 위의 마른 잎만 제자리에서 떨렸다. " + "가" * 90,
            "나무 사이에서 낮은 날갯소리가 밀려왔다. 소리는 한곳에 머물지 않고 길을 따라 움직였다. " + "나" * 90,
            "독침붕은 가지보다 조금 높은 곳에 몸을 세웠다. 두 앞다리의 침 끝이 길 한가운데를 향했다. " + "다" * 90,
            "옆의 마른 도랑까지는 세 걸음이었다. 뒤로 물러날지 몸을 낮출지 결정할 시간은 길지 않았다. " + "라" * 90,
        ]
        output = {"prose": "\n\n".join(paragraphs)}
        qa = na.qa_session(session, output)
        self.assertEqual(qa["status"], "pass")
        self.assertEqual(qa["paragraphs"], 4)

    def test_session_qa_rejects_repeated_paragraph(self) -> None:
        session = {"target_chars": 500, "target_paragraphs": 4}
        paragraph = "같은 문단이 반복되면 장문 생성 품질 저하로 취급해야 한다. " + "반복" * 60
        output = {"prose": f"{paragraph}\n\n{paragraph}\n\n다른 문단 " + "내용" * 80}
        qa = na.qa_session(session, output)
        self.assertEqual(qa["status"], "fail")
        self.assertTrue(any("duplicate paragraphs" in item for item in qa["failures"]))

    def test_codex_usage_limit_is_handoff_not_generic_error(self) -> None:
        completed = subprocess.CompletedProcess(
            args=["codex"],
            returncode=1,
            stdout="",
            stderr="Usage limit reached. Try again later.",
        )
        with mock.patch.object(na.subprocess, "run", return_value=completed):
            status, diagnostics = na.run_codex(
                "prompt", pathlib.Path("schema.json"), pathlib.Path("out.json")
            )
        self.assertEqual(status, "quota")
        self.assertIn("Usage limit", diagnostics)

    def test_missing_codex_is_classified_without_exception(self) -> None:
        with mock.patch.object(na.subprocess, "run", side_effect=FileNotFoundError("codex missing")):
            status, diagnostics = na.run_codex(
                "prompt", pathlib.Path("schema.json"), pathlib.Path("out.json")
            )
        self.assertEqual(status, "missing")
        self.assertIn("codex missing", diagnostics)

    def test_revision_preserves_identity_and_marks_downstream_review(self) -> None:
        with tempfile.TemporaryDirectory() as tmp:
            authoring_root = pathlib.Path(tmp) / "topics"
            with mock.patch.object(na, "AUTHORING_ROOT", authoring_root):
                topic = {
                    "topic_id": "topic",
                    "status": "complete_pending_owner_review",
                    "updated_at": na.now_iso(),
                }
                plan = self._completed_plan()
                tdir = authoring_root / "topic"
                tdir.mkdir(parents=True)
                na.write_json(tdir / "topic.json", topic)
                na.write_json(tdir / "plan.json", plan)
                na.write_json(
                    tdir / "continuity-ledger.json",
                    {"schema_version": 2, "facts": [], "unresolved_hooks": []},
                )
                self._seed_completed_artifacts(tdir, plan)

                na.prepare_revision(topic, plan, "s001", "독침붕 위협을 강화", False)

                self.assertEqual(plan["sessions"][0]["session_id"], "s001")
                self.assertEqual(plan["sessions"][0]["revision"], 2)
                self.assertEqual(plan["sessions"][0]["status"], "revision_requested")
                self.assertEqual(plan["sessions"][1]["status"], "continuity_review")
                self.assertEqual(plan["sessions"][2]["status"], "continuity_review")
                self.assertTrue(
                    (tdir / "sessions" / "s001" / "revisions" / "r001" / "draft.ko-KR.md").exists()
                )

    def test_cascade_revision_marks_dependents_for_regeneration(self) -> None:
        with tempfile.TemporaryDirectory() as tmp:
            authoring_root = pathlib.Path(tmp) / "topics"
            with mock.patch.object(na, "AUTHORING_ROOT", authoring_root):
                topic = {"topic_id": "topic", "status": "complete_pending_owner_review"}
                plan = self._completed_plan()
                tdir = authoring_root / "topic"
                tdir.mkdir(parents=True)
                na.write_json(tdir / "topic.json", topic)
                na.write_json(tdir / "plan.json", plan)
                na.write_json(
                    tdir / "continuity-ledger.json",
                    {"schema_version": 2, "facts": [], "unresolved_hooks": []},
                )
                self._seed_completed_artifacts(tdir, plan)

                na.prepare_revision(topic, plan, "s001", "전체 연쇄 재작성", True)

                self.assertTrue(
                    all(s["status"] == "revision_requested" for s in plan["sessions"])
                )
                self.assertTrue(all(s["revision"] == 2 for s in plan["sessions"]))

    def test_request_intent_is_idempotent_per_issue_revision(self) -> None:
        with tempfile.TemporaryDirectory() as tmp:
            authoring_root = pathlib.Path(tmp) / "topics"
            with mock.patch.object(na, "AUTHORING_ROOT", authoring_root):
                topic = {
                    "topic_id": "topic",
                    "status": "complete_pending_owner_review",
                    "applied_request_keys": [],
                }
                plan = self._completed_plan()
                tdir = authoring_root / "topic"
                tdir.mkdir(parents=True)
                na.write_json(tdir / "topic.json", topic)
                na.write_json(tdir / "plan.json", plan)
                na.write_json(
                    tdir / "continuity-ledger.json",
                    {"schema_version": 2, "facts": [], "unresolved_hooks": []},
                )
                self._seed_completed_artifacts(tdir, plan)
                request = {
                    "request_key": "same-key",
                    "mode": "revise",
                    "session_id": "s002",
                    "feedback": "다시",
                    "cascade": False,
                }
                na.apply_request_intent(request, topic)
                once = na.read_json(tdir / "plan.json")["sessions"][1]["revision"]
                topic_after = na.read_json(tdir / "topic.json")
                na.apply_request_intent(request, topic_after)
                twice = na.read_json(tdir / "plan.json")["sessions"][1]["revision"]
                self.assertEqual(once, 2)
                self.assertEqual(twice, 2)

    @staticmethod
    def _completed_plan() -> dict:
        return {
            "topic_id": "topic",
            "title": "topic",
            "sessions": [
                {
                    "session_id": "s001",
                    "title": "one",
                    "purpose": "one",
                    "target_chars": 1000,
                    "target_paragraphs": 4,
                    "dependencies": [],
                    "continuity_focus": [],
                    "status": "completed",
                    "revision": 1,
                },
                {
                    "session_id": "s002",
                    "title": "two",
                    "purpose": "two",
                    "target_chars": 1000,
                    "target_paragraphs": 4,
                    "dependencies": ["s001"],
                    "continuity_focus": [],
                    "status": "completed",
                    "revision": 1,
                },
                {
                    "session_id": "s003",
                    "title": "three",
                    "purpose": "three",
                    "target_chars": 1000,
                    "target_paragraphs": 4,
                    "dependencies": ["s002"],
                    "continuity_focus": [],
                    "status": "completed",
                    "revision": 1,
                },
            ],
        }

    @staticmethod
    def _seed_completed_artifacts(tdir: pathlib.Path, plan: dict) -> None:
        for session in plan["sessions"]:
            sid = session["session_id"]
            sdir = tdir / "sessions" / sid
            na.write_json(sdir / "spec.json", session)
            na.write_json(sdir / "context.json", {"session": sid})
            na.write_text(sdir / "draft.ko-KR.md", f"{sid} old prose")
            na.write_json(sdir / "summary.json", {"summary": f"{sid} summary"})
            na.write_json(
                sdir / "continuity.json",
                {
                    "introduced": [f"fact:{sid}"],
                    "changed": [],
                    "resolved": [],
                    "unresolved_hooks": [],
                },
            )
            na.write_json(sdir / "qa.json", {"status": "pass"})


if __name__ == "__main__":
    unittest.main()
