#!/usr/bin/env python3
"""Validate the committed P8 generated pack against its normalized authored source."""

from __future__ import annotations

import json

import build_p8_slice_pack as builder


def main() -> int:
    source = builder.load_source()
    builder.validate_source(source)
    expected = builder.build_pack(source)
    with builder.OUTPUT_PATH.open("r", encoding="utf-8") as handle:
        actual = json.load(handle)
    if actual != expected:
        builder.fail("generated P8 slice pack is stale; run python tools/build_p8_slice_pack.py")
    print("P8 authored slice source/generated semantic check: OK")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
