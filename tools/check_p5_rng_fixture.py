#!/usr/bin/env python3
"""Verify frozen gameplay determinism vectors and discovery evidence boundaries."""
import hashlib
from pathlib import Path

import yaml

root = Path(__file__).resolve().parents[1]
foundation_path = root / "docs" / "P5_FOUNDATION_SEMANTIC_FIXTURES.yaml"
batch02_path = root / "docs" / "P5_BATCH_02_VALIDATION_FIXTURES.yaml"

with foundation_path.open("r", encoding="utf-8") as handle:
    fixture = yaml.safe_load(handle)

pack = fixture["content_pack"]
vectors = fixture["rng_vectors"]
assert len(vectors) == 4, f"expected 4 RNG vectors, found {len(vectors)}"

for vector in vectors:
    seed = bytes.fromhex(vector["run_seed"])
    assert len(seed) == 16
    parts = [
        b"pokemon-ancient-trpg/p5-rng-v1", b"\x00",
        seed, b"\x00",
        pack["id"].encode("ascii"), b"\x00",
        pack["version"].encode("ascii"), b"\x00",
        int(vector["origin_transition_seq"]).to_bytes(8, "big"), b"\x00",
        vector["trigger_id"].encode("ascii"), b"\x00",
        vector["channel"].encode("ascii"), b"\x00",
        vector["subject_id"].encode("ascii"), b"\x00",
        int(vector["draw_index"]).to_bytes(8, "big"),
    ]
    digest = hashlib.sha256(b"".join(parts)).digest()
    digest_hex = digest.hex()
    raw = int.from_bytes(digest[:8], "big")
    assert digest_hex == vector["sha256"], f"{vector['id']}: sha256 mismatch"
    assert raw == vector["raw_u64_be"], f"{vector['id']}: raw_u64 mismatch"

    bound = int(vector["bound"])
    limit = (1 << 64) - ((1 << 64) % bound)
    assert raw < limit, f"{vector['id']}: frozen draw unexpectedly requires rejection"
    expected = vector.get("bounded_result", vector.get("bounded_result_zero_based"))
    assert raw % bound == expected, f"{vector['id']}: bounded result mismatch"
    if "die_result" in vector:
        assert vector["die_result"] == expected + 1, f"{vector['id']}: die result mismatch"

with batch02_path.open("r", encoding="utf-8") as handle:
    batch02 = yaml.safe_load(handle)

boundaries = {item["fixture_id"]: item for item in batch02["boundary_fixtures"]}
insight = boundaries["B02-insight-evidence-boundary"]
pool = insight["given"]["discovery_pool"]
eligible_ids = [entry["insight_id"] for entry in pool if entry["eligible"]]
assert all(entry.get("evidence_ref") for entry in pool), "discovery entries require evidence refs"
assert eligible_ids == insight["expected"]["eligible_ids"], "discovery eligibility set mismatch"
assert insight["expected"]["hidden_origin_selectable"] is False, "hidden origin became selectable"
assert insight["expected"]["eligibility_rng_draw_count"] == 0, "discovery eligibility consumed RNG"

print(
    f"P5 determinism fixture PASS: vectors={len(vectors)} "
    f"algorithm=p5-rng-v1 insight_boundary=PASS"
)
