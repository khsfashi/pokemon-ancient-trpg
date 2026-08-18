extends RefCounted
class_name SpikeRuntime

const FIXTURE_PATH := "res://fixtures/orchard_boundary_fixture.json"
const FIXED_RUN_SEED := "00000000000000000000000000000000"
const FIXED_TIMESTAMP := "2026-08-18T00:00:00.000Z"

var fixture: Dictionary = {}
var last_resolution: Dictionary = {}

func _init() -> void:
	fixture = _read_json_object(FIXTURE_PATH)
	_assert_fixture_contract()

func event_id() -> String:
	return String(fixture["event_id"])

func available_choice_ids() -> Array[String]:
	var result: Array[String] = []
	for choice_id in fixture["choices"].keys():
		result.append(String(choice_id))
	result.sort()
	return result

func resolve_choice(choice_id: String) -> Dictionary:
	var choices: Dictionary = fixture["choices"]
	assert(choices.has(choice_id), "Unknown authoritative choice id: %s" % choice_id)
	var choice: Dictionary = choices[choice_id]
	last_resolution = {
		"event_id": fixture["event_id"],
		"choice_id": choice_id,
		"resolution_kind": fixture["resolution_kind"],
		"rng_draw_count": fixture["rng_draw_count"],
		"outcome_id": choice["outcome_id"],
		"transition": choice["transition"].duplicate(true),
		"relationship": choice["relationship"].duplicate(true),
		"encounters": choice["encounters"].duplicate(true),
		"p5_effects": choice["p5_effects"].duplicate(true),
	}
	return last_resolution.duplicate(true)

func build_save_envelope(resolution: Dictionary) -> Dictionary:
	var contract: Dictionary = fixture["save_envelope_contract"]
	var pack: Dictionary = fixture["content_pack"]
	return {
		"save_schema_version": contract["save_schema_version"],
		"architecture_contract_version": contract["architecture_contract_version"],
		"content_pack_id": pack["content_pack_id"],
		"content_pack_version": pack["content_pack_version"],
		"content_digest_sha256": pack["content_digest_sha256"],
		"p5_contract_version": contract["p5_contract_version"],
		"run_seed_hex": FIXED_RUN_SEED,
		"transition_seq_u64": "1",
		"created_at_iso": FIXED_TIMESTAMP,
		"updated_at_iso": FIXED_TIMESTAMP,
		"authoritative_state": {
			"godot_spike_projection": resolution.duplicate(true),
		},
	}

func save_round_trip(path: String, resolution: Dictionary) -> Dictionary:
	var envelope := build_save_envelope(resolution)
	var output := FileAccess.open(path, FileAccess.WRITE)
	assert(output != null, "Unable to open save path: %s" % path)
	output.store_string(JSON.stringify(envelope))
	output.close()
	return _read_json_object(path)

func _assert_fixture_contract() -> void:
	assert(not fixture.is_empty(), "Parity fixture could not be loaded")
	assert(fixture["event_id"] == "slice.mixed.orchard_boundary")
	assert(fixture["resolution_kind"] == "direct")
	assert(int(fixture["rng_draw_count"]) == 0)
	var choices: Dictionary = fixture["choices"]
	assert(choices.has("protect_windbreak"))
	assert(choices.has("take_shortcut"))

func _read_json_object(path: String) -> Dictionary:
	var text := FileAccess.get_file_as_string(path)
	assert(not text.is_empty(), "JSON file is empty or unreadable: %s" % path)
	var parsed: Variant = JSON.parse_string(text)
	assert(typeof(parsed) == TYPE_DICTIONARY, "JSON root must be an object: %s" % path)
	return parsed as Dictionary
