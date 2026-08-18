extends Control

# Bounded P8.3 adapter for the already-frozen P6/D-036 direct-encounter atlas contract.
# The atlas texture is decoded once per encounter node; animation only changes the visible region.
@export_file("*.png") var atlas_path: String = ""
@export_file("*.json") var metadata_path: String = ""
@export_range(0.05, 1.0, 0.01) var frame_interval_seconds: float = 0.12

var _atlas_texture: Texture2D
var _sprite: Sprite2D
var _frames: Array = []
var _frame_index := 0
var _resource_ready := false
var _failure_reason := ""

func _ready() -> void:
	mouse_filter = Control.MOUSE_FILTER_IGNORE
	texture_filter = CanvasItem.TEXTURE_FILTER_NEAREST
	clip_contents = true
	_resource_ready = _load_pinned_atlas()
	if not _resource_ready:
		return

	_sprite = Sprite2D.new()
	_sprite.name = "EncounterAtlasFrame"
	_sprite.texture = _atlas_texture
	_sprite.centered = false
	_sprite.region_enabled = true
	_sprite.region_filter_clip_enabled = true
	_sprite.texture_filter = CanvasItem.TEXTURE_FILTER_NEAREST
	add_child(_sprite)
	_apply_frame(0)

	if _frames.size() > 1:
		var timer := Timer.new()
		timer.name = "EncounterAnimationTimer"
		timer.wait_time = frame_interval_seconds
		timer.autostart = true
		timer.timeout.connect(_advance_frame)
		add_child(timer)

func is_resource_ready() -> bool:
	return _resource_ready

func failure_reason() -> String:
	return _failure_reason

func frame_count() -> int:
	return _frames.size()

func _load_pinned_atlas() -> bool:
	if atlas_path.is_empty() or metadata_path.is_empty():
		return _fail("atlas/metadata path is empty")
	if not FileAccess.file_exists(atlas_path) or not FileAccess.file_exists(metadata_path):
		return _fail("local P6 atlas or metadata is missing")
	if not ResourceLoader.exists(atlas_path):
		return _fail("Godot has not imported the local P6 atlas")

	_atlas_texture = load(atlas_path) as Texture2D
	if _atlas_texture == null:
		return _fail("local P6 atlas is not loadable as Texture2D")

	var metadata_text := FileAccess.get_file_as_string(metadata_path)
	var metadata: Variant = JSON.parse_string(metadata_text)
	if not metadata is Dictionary:
		return _fail("local P6 atlas metadata root is not an object")

	var raw_frames: Variant = _find_frame_payload(metadata)
	if raw_frames == null:
		return _fail("local P6 atlas metadata has no matching frame payload")

	var normalized := _normalize_frames(raw_frames)
	for entry_value in normalized:
		if not entry_value is Dictionary:
			return _fail("local P6 frame entry is not an object")
		var frame := _parse_frame(entry_value)
		if frame.is_empty():
			return false
		_frames.append(frame)

	if _frames.size() < 2:
		return _fail("direct-encounter P6 atlas must contain multiple frames")
	return true

func _find_frame_payload(metadata: Dictionary) -> Variant:
	var expected_image := atlas_path.get_file()
	var textures: Variant = metadata.get("textures")
	if textures is Array:
		for texture_value in textures:
			if not texture_value is Dictionary:
				continue
			var texture_entry: Dictionary = texture_value
			if String(texture_entry.get("image", "")) == expected_image:
				return texture_entry.get("frames")

	if metadata.has("frames"):
		var meta: Variant = metadata.get("meta")
		if meta is Dictionary:
			var image_name := String((meta as Dictionary).get("image", ""))
			if not image_name.is_empty() and image_name != expected_image:
				return null
		return metadata.get("frames")
	return null

func _normalize_frames(raw_frames: Variant) -> Array:
	if raw_frames is Array:
		return raw_frames
	if not raw_frames is Dictionary:
		return []

	var frame_map: Dictionary = raw_frames
	var keys := frame_map.keys()
	keys.sort()
	var normalized: Array = []
	for key in keys:
		var value: Variant = frame_map[key]
		if not value is Dictionary:
			continue
		var entry: Dictionary = (value as Dictionary).duplicate(true)
		if not entry.has("filename"):
			entry["filename"] = String(key)
		normalized.append(entry)
	return normalized

func _parse_frame(entry: Dictionary) -> Dictionary:
	var rect_data: Variant = entry.get("frame")
	if not rect_data is Dictionary:
		_fail("P6 frame rectangle is missing")
		return {}
	var rect_dict: Dictionary = rect_data
	var x := float(rect_dict.get("x", -1))
	var y := float(rect_dict.get("y", -1))
	var width := float(rect_dict.get("w", 0))
	var height := float(rect_dict.get("h", 0))
	if x < 0.0 or y < 0.0 or width <= 0.0 or height <= 0.0:
		_fail("P6 frame rectangle is invalid")
		return {}
	if x + width > _atlas_texture.get_width() or y + height > _atlas_texture.get_height():
		_fail("P6 frame rectangle exceeds atlas bounds")
		return {}

	var source_size := Vector2(width, height)
	var source_size_data: Variant = entry.get("sourceSize")
	if source_size_data is Dictionary:
		var source_dict: Dictionary = source_size_data
		source_size = Vector2(
			float(source_dict.get("w", width)),
			float(source_dict.get("h", height))
		)
	if source_size.x <= 0.0 or source_size.y <= 0.0:
		_fail("P6 source frame size is invalid")
		return {}

	var sprite_source := Rect2(Vector2.ZERO, Vector2(width, height))
	var sprite_source_data: Variant = entry.get("spriteSourceSize")
	if sprite_source_data is Dictionary:
		var sprite_dict: Dictionary = sprite_source_data
		sprite_source = Rect2(
			Vector2(float(sprite_dict.get("x", 0)), float(sprite_dict.get("y", 0))),
			Vector2(float(sprite_dict.get("w", width)), float(sprite_dict.get("h", height)))
		)
	if sprite_source.position.x < 0.0 or sprite_source.position.y < 0.0:
		_fail("P6 sprite source offset is invalid")
		return {}
	if sprite_source.size.x <= 0.0 or sprite_source.size.y <= 0.0:
		_fail("P6 sprite source size is invalid")
		return {}
	if sprite_source.end.x > source_size.x or sprite_source.end.y > source_size.y:
		_fail("P6 sprite source rectangle exceeds source frame")
		return {}

	return {
		"region": Rect2(Vector2(x, y), Vector2(width, height)),
		"source_size": source_size,
		"sprite_source": sprite_source,
	}

func _advance_frame() -> void:
	if not _resource_ready or _frames.is_empty():
		return
	_frame_index = (_frame_index + 1) % _frames.size()
	_apply_frame(_frame_index)

func _apply_frame(index: int) -> void:
	if _sprite == null or index < 0 or index >= _frames.size():
		return
	var frame: Dictionary = _frames[index]
	var region: Rect2 = frame["region"]
	var source_size: Vector2 = frame["source_size"]
	var sprite_source: Rect2 = frame["sprite_source"]
	var scale_factor: float = min(size.x / source_size.x, size.y / source_size.y)
	if scale_factor >= 1.0:
		scale_factor = max(1.0, floor(scale_factor))

	_sprite.region_rect = region
	_sprite.scale = Vector2(scale_factor, scale_factor)
	_sprite.position = (size - source_size * scale_factor) * 0.5 + sprite_source.position * scale_factor

func _fail(reason: String) -> bool:
	_failure_reason = reason
	return false
