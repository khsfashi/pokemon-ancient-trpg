extends SceneTree

const PROJECT_LAYERS := [
	"res://assets/environment/opening_reedbank.svg",
	"res://assets/human/opening_traveler.svg",
	"res://assets/foreground/opening_brush.svg",
	"res://assets/environment/orchard_far.svg",
	"res://assets/environment/orchard_mid.svg",
	"res://assets/human/orchard_keeper.svg",
	"res://assets/foreground/orchard_foliage.svg",
]

const UI_ASSETS := [
	"res://assets/ui/icon_vitality.svg",
	"res://assets/ui/icon_fatigue.svg",
	"res://assets/ui/icon_provisions.svg",
]

const FORBIDDEN_SPECIES_TOKENS := [
	"beedrill", "독침붕", "weedle", "뿔충이", "rattata", "꼬렛", "pikachu", "피카츄"
]

var _failed := false

func _init() -> void:
	for path in PROJECT_LAYERS + UI_ASSETS:
		_require_resource(path)

	for path in PROJECT_LAYERS:
		_require_layer_separation(path)

	var main_source := FileAccess.get_file_as_string("res://scripts/main.gd")
	var encounter_source := FileAccess.get_file_as_string("res://scripts/pokemon_encounter_sprite.gd")
	_assert_true(not main_source.contains("P8.3 GODOT ARCHITECTURE SPIKE"), "developer spike label leaked into player-facing UI")
	_assert_true(main_source.contains("LOCAL_BEEDRILL_ATLAS_PATH"), "P6 local Pokemon atlas slot must remain explicit")
	_assert_true(main_source.contains("LOCAL_BEEDRILL_METADATA_PATH"), "P6 local Pokemon metadata slot must remain explicit")
	_assert_true(main_source.contains("PokemonEncounterSpriteScript"), "direct encounter must use the bounded P6 atlas adapter")
	_assert_true(main_source.contains("PokemonLayer"), "Pokemon must remain an independent runtime layer")
	_assert_true(main_source.contains("LayerKind.FOREGROUND, 40"), "foreground occlusion layer must remain above Pokemon z=30")
	_assert_true(encounter_source.contains("region_rect"), "P6 encounter atlas must select frame regions instead of drawing the full atlas")
	_assert_true(encounter_source.contains("_atlas_texture"), "P6 encounter animation must reuse one decoded atlas texture")

	if _failed:
		quit(1)
		return
	print("P8.3 Godot visual contract smoke: PASS")
	quit(0)

func _require_resource(path: String) -> void:
	_assert_true(FileAccess.file_exists(path), "missing retained resource: %s" % path)
	if not FileAccess.file_exists(path):
		return
	_assert_true(ResourceLoader.exists(path), "Godot cannot import retained resource: %s" % path)
	if not ResourceLoader.exists(path):
		return
	var texture := load(path) as Texture2D
	_assert_true(texture != null, "retained resource is not loadable as Texture2D: %s" % path)

func _require_layer_separation(path: String) -> void:
	if not FileAccess.file_exists(path):
		_assert_true(false, "missing retained layer source: %s" % path)
		return
	var source := FileAccess.get_file_as_string(path).to_lower()
	_assert_true(not source.contains("<text"), "localized/runtime text baked into art layer: %s" % path)
	_assert_true(not source.contains("<image"), "embedded raster/flattened image found in art layer: %s" % path)
	for token in FORBIDDEN_SPECIES_TOKENS:
		_assert_true(not source.contains(token), "Pokemon species token baked into project-owned layer %s: %s" % [path, token])

func _assert_true(condition: bool, message: String) -> void:
	if condition:
		return
	_failed = true
	push_error(message)
