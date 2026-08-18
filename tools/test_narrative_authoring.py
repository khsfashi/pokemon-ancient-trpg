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
                            "title": "[authoring] windbreak-beedrill",
                            "body": json.dumps(
                                {
                                    "title": "방풍림 독침붕",
                                    "brief": "초반 조우",
                                    "target_total_chars": 20000,
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
            status, diagnostics = na.run_codex("prompt", pathlib.Path("schema.json"), pathlib.Path("out.json"))
        self.assertEqual(status, "quota")
        self.assertIn("Usage limit", diagnostics)


if __name__ == "__main__":
    unittest.main()
