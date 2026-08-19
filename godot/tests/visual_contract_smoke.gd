extends SceneTree

const PROJECT_LAYERS := [
	"res://assets/environment/opening_reedbank.svg",
	"res://assets/human/opening_traveler.svg",
	"res://assets/foreground/opening_brush.svg",
	"res://assets/golden_screen/runtime/windbreak_far.png",
	"res://assets/golden_screen/runtime/windbreak_mid.png",
	"res://assets/golden_screen/runtime/keeper.png",
	"res://assets/golden_screen/runtime/windbreak_foreground.png",
]

const UI_ASSETS := [
	"res://assets/golden_screen/runtime/hud_frame.png",
	"res://assets/golden_screen/runtime/event_frame.png",
	"res://assets/golden_screen/runtime/choice_normal.png",
	"res://assets/golden_screen/runtime/choice_focused.png",
	"res://assets/golden_screen/runtime/choice_pressed.png",
	"res://assets/golden_screen/runtime/icon_vitality.png",
	"res://assets/golden_screen/runtime/icon_fatigue.png",
	"res://assets/golden_screen/runtime/icon_provisions.png",
]

const KOREAN_FONT := "res://assets/ui/runtime_korean_font.tres"
const KOREAN_GLYPH_SAMPLES := "한글여행자경계"

const FORBIDDEN_SPECIES_TOKENS := [
	"beedrill", "독침붕", "weedle", "뿔충이", "rattata", "꼬렛", "pikachu", "피카츄"
]

var _failed := false

func _init() -> void:
	for path in PROJECT_LAYERS + UI_ASSETS:
		_require_resource(path)

	_require_korean_font(KOREAN_FONT)

	for path in PROJECT_LAYERS:
		_require_layer_separation(path)

	var main_source := FileAccess.get_file_as_string("res://scripts/main.gd")
	var layer_source := FileAccess.get_file_as_string("res://scripts/layer_canvas.gd")
	var encounter_source := FileAccess.get_file_as_string("res://scripts/pokemon_encounter_sprite.gd")
	_assert_true(not main_source.contains("P8.3 GODOT ARCHITECTURE SPIKE"), "developer spike label leaked into player-facing UI")
	_assert_true(main_source.contains("LOCAL_BEEDRILL_ATLAS_PATH"), "P6 local Pokemon atlas slot must remain explicit")
	_assert_true(main_source.contains("LOCAL_BEEDRILL_METADATA_PATH"), "P6 local Pokemon metadata slot must remain explicit")
	_assert_true(main_source.contains("PokemonEncounterSpriteScript"), "direct encounter must use the bounded P6 atlas adapter")
	_assert_true(main_source.contains("PokemonLayer"), "Pokemon must remain an independent runtime layer")
	_assert_true(main_source.contains("POKEMON_GUIDE_RECT"), "missing-P6 golden screen must retain an explicit Pokemon placement box")
	_assert_true(main_source.contains("LayerKind.FOREGROUND, 40"), "foreground occlusion layer must remain above Pokemon z=30")
	_assert_true(main_source.contains("EventStoryOverlay"), "event prose/choices must remain an overlay over the full-height world")
	_assert_true(not main_source.contains("Rect2(12, 493, 366, 339)"), "rejected floating article/card panel geometry returned")
	_assert_true(layer_source.contains("RETAINED_SIZE := Vector2(390, 844)"), "event world layers must retain the full 390x844 game screen")
	_assert_true(layer_source.contains("golden_screen/runtime/windbreak_far.png"), "windbreak FAR raster layer is not active")
	_assert_true(layer_source.contains("golden_screen/runtime/windbreak_mid.png"), "windbreak MID raster layer is not active")
	_assert_true(layer_source.contains("golden_screen/runtime/keeper.png"), "windbreak keeper raster sprite is not active")
	_assert_true(layer_source.contains("golden_screen/runtime/windbreak_foreground.png"), "windbreak foreground raster layer is not active")
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

func _require_korean_font(path: String) -> void:
	_assert_true(FileAccess.file_exists(path), "missing Korean review font resource: %s" % path)
	if not FileAccess.file_exists(path):
		return
	_assert_true(ResourceLoader.exists(path), "Godot cannot load Korean review font resource: %s" % path)
	if not ResourceLoader.exists(path):
		return
	var font := load(path) as Font
	_assert_true(font != null, "Korean review font resource is not a Font: %s" % path)
	if font == null:
		return
	for index in range(KOREAN_GLYPH_SAMPLES.length()):
		var codepoint := KOREAN_GLYPH_SAMPLES.unicode_at(index)
		_assert_true(font.has_char(codepoint), "Korean review font lacks glyph U+%04X" % codepoint)

func _require_layer_separation(path: String) -> void:
	if not FileAccess.file_exists(path):
		_assert_true(false, "missing retained layer source: %s" % path)
		return
	if path.get_extension().to_lower() == "png":
		var texture := load(path) as Texture2D
		var image := texture.get_image() if texture != null else null
		_assert_true(image != null and not image.is_empty(), "retained raster layer has no imported image: %s" % path)
		if image != null and not image.is_empty():
			var expected_size := Vector2i(96, 170) if path.ends_with("keeper.png") else Vector2i(390, 844)
			_assert_true(image.get_size() == expected_size, "retained raster layer has wrong dimensions: %s" % path)
			if not path.ends_with("windbreak_far.png"):
				_assert_true(image.detect_alpha() != Image.ALPHA_NONE, "retained overlay lacks alpha: %s" % path)
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
