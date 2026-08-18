extends SceneTree

const SpikeRuntimeScript = preload("res://scripts/spike_runtime.gd")
const SAVE_PATH := "user://p8_3_spike_roundtrip.json"

func _init() -> void:
	var runtime := SpikeRuntimeScript.new() as SpikeRuntime
	assert(runtime.event_id() == "slice.mixed.orchard_boundary")
	assert(runtime.available_choice_ids() == ["protect_windbreak", "take_shortcut"])

	var protect := runtime.resolve_choice("protect_windbreak")
	assert(protect["resolution_kind"] == "direct")
	assert(protect["rng_draw_count"] == 0)
	assert(protect["outcome_id"] == "windbreak_protected")
	assert(protect["transition"]["to_locality"] == "windbreak-orchard")
	assert(protect["relationship"]["state_id"] == "route_respected")
	assert(protect["encounters"][0]["species_id"] == 15)
	assert(protect["p5_effects"].size() == 1)

	var shortcut := runtime.resolve_choice("take_shortcut")
	assert(shortcut["resolution_kind"] == "direct")
	assert(shortcut["rng_draw_count"] == 0)
	assert(shortcut["outcome_id"] == "shortcut_taken")
	assert(shortcut["relationship"]["state_id"] == "route_strained")
	assert(shortcut["p5_effects"].size() == 2)
	assert(shortcut["p5_effects"][1]["operation"] == "narrative.counter.add")
	assert(shortcut["p5_effects"][1]["ref"] == "slice.social_cost")
	assert(shortcut["p5_effects"][1]["amount"] == 1)

	var round_trip := runtime.save_round_trip(SAVE_PATH, shortcut)
	assert(round_trip["save_schema_version"] == 1)
	assert(round_trip["architecture_contract_version"] == "p7-architecture-v1")
	assert(round_trip["p5_contract_version"] == "p5-event-contract-v1")
	assert(round_trip["content_pack_id"] == "p8.reedbank-slice")
	assert(round_trip["content_pack_version"] == "1")
	assert(round_trip["content_digest_sha256"] == "d981fb23af5a8f25a5c2a5a09af1a4e0b7378e2fd65e980ee754691c17dfc0b8")
	assert(round_trip["authoritative_state"]["godot_spike_projection"]["choice_id"] == "take_shortcut")
	assert(round_trip["authoritative_state"]["godot_spike_projection"]["outcome_id"] == "shortcut_taken")

	DirAccess.remove_absolute(ProjectSettings.globalize_path(SAVE_PATH))
	print("P8.3 Godot parity smoke: PASS")
	quit(0)
