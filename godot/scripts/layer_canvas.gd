extends Control
class_name SpikeLayerCanvas

# Retained project-owned visual layers. Pokemon remains a separate P6/D-036 runtime slot.
enum LayerKind { OPENING_BACKGROUND, OPENING_HUMAN, OPENING_FOREGROUND, BACKGROUND, MIDGROUND, HUMAN, FOREGROUND }

const LAYER_PATHS := {
	LayerKind.OPENING_BACKGROUND: "res://assets/environment/opening_reedbank.svg",
	LayerKind.OPENING_HUMAN: "res://assets/human/opening_traveler.svg",
	LayerKind.OPENING_FOREGROUND: "res://assets/foreground/opening_brush.svg",
	LayerKind.BACKGROUND: "res://assets/golden_screen/runtime/windbreak_far.png",
	LayerKind.MIDGROUND: "res://assets/golden_screen/runtime/windbreak_mid.png",
	LayerKind.HUMAN: "res://assets/golden_screen/runtime/keeper.png",
	LayerKind.FOREGROUND: "res://assets/golden_screen/runtime/windbreak_foreground.png",
}

const RETAINED_SIZE := Vector2(390, 844)

@export var layer_kind: LayerKind = LayerKind.BACKGROUND

func _ready() -> void:
	mouse_filter = Control.MOUSE_FILTER_IGNORE
	texture_filter = CanvasItem.TEXTURE_FILTER_NEAREST
	_build_retained_layer()

func _build_retained_layer() -> void:
	var path: String = LAYER_PATHS.get(layer_kind, "")
	if path.is_empty() or not ResourceLoader.exists(path):
		_add_missing_asset_marker(path)
		return

	var texture := load(path) as Texture2D
	if texture == null:
		_add_missing_asset_marker(path)
		return

	var rect := TextureRect.new()
	rect.name = "RetainedLayer"
	rect.texture = texture
	rect.texture_filter = CanvasItem.TEXTURE_FILTER_NEAREST
	rect.expand_mode = TextureRect.EXPAND_IGNORE_SIZE
	rect.stretch_mode = TextureRect.STRETCH_SCALE
	if layer_kind == LayerKind.HUMAN:
		rect.position = Vector2(68, 342)
		rect.size = Vector2(96, 170)
	else:
		rect.position = Vector2.ZERO
		rect.size = RETAINED_SIZE
	rect.mouse_filter = Control.MOUSE_FILTER_IGNORE
	add_child(rect)

func _add_missing_asset_marker(path: String) -> void:
	# This is deliberately not replacement art: project-owned retained layers are required.
	var marker := ColorRect.new()
	marker.color = Color("#3f2430")
	marker.position = Vector2.ZERO
	marker.size = RETAINED_SIZE
	marker.mouse_filter = Control.MOUSE_FILTER_IGNORE
	add_child(marker)

	var label := Label.new()
	label.text = "MISSING PROJECT LAYER\n%s" % path
	label.position = Vector2(16, 82)
	label.size = Vector2(358, 60)
	label.autowrap_mode = TextServer.AUTOWRAP_WORD_SMART
	label.add_theme_font_size_override("font_size", 10)
	label.add_theme_color_override("font_color", Color("#f1d4cf"))
	marker.add_child(label)
