extends SceneTree

const MAIN_SCENE := preload("res://scenes/main.tscn")
const P6_ATLAS_PATH := "res://local_assets/pokemon/beedrill/15.png"
const P6_METADATA_PATH := "res://local_assets/pokemon/beedrill/15.json"
const CAPTURE_DIR := "res://captures/owner-evidence"
const EXPECTED_SIZE := Vector2i(390, 844)

var _allow_missing_p6 := false

func _init() -> void:
	_allow_missing_p6 = "--allow-missing-p6" in OS.get_cmdline_user_args()
	call_deferred("_run")

func _run() -> void:
	var p6_files_present := FileAccess.file_exists(P6_ATLAS_PATH) and FileAccess.file_exists(P6_METADATA_PATH)
	if not p6_files_present and not _allow_missing_p6:
		_fail(
			"real P6 Beedrill owner evidence requires the pinned local materialization; " +
			"run `python tools/materialize_p8_3_beedrill.py` first",
			2
		)
		return

	var capture_dir_absolute := ProjectSettings.globalize_path(CAPTURE_DIR)
	var mkdir_error := DirAccess.make_dir_recursive_absolute(capture_dir_absolute)
	if mkdir_error != OK:
		_fail("failed to create owner evidence capture directory", 3)
		return

	var main := MAIN_SCENE.instantiate()
	get_root().add_child(main)
	await process_frame
	await process_frame

	# A Godot process can survive a dependent script parse failure. Treat an unloaded
	# main script or missing runtime nodes as a hard capture failure rather than allowing
	# a blank/root-only viewport to become false-positive owner evidence.
	if main.get_script() == null or not main.has_method("_on_start_pressed"):
		_fail("main scene script failed to load; refusing to capture false owner evidence", 4)
		return
	if main.find_child("SurfaceRoot", true, false) == null or main.find_child("TransitionOverlay", true, false) == null:
		_fail("main scene did not build the required runtime nodes", 4)
		return

	await RenderingServer.frame_post_draw
	var opening_path := "%s/opening.png" % CAPTURE_DIR
	var opening_size := _capture_current_viewport(opening_path)
	if opening_size != EXPECTED_SIZE:
		_fail("opening capture is %s instead of 390x844" % opening_size, 4)
		return

	# Exercise the real transition path rather than calling the event builder directly.
	main.call("_on_start_pressed")
	await create_timer(0.50).timeout
	await process_frame
	await RenderingServer.frame_post_draw

	var pokemon_layer := main.find_child("PokemonLayer", true, false)
	if pokemon_layer == null:
		_fail("PokemonLayer is missing from the event surface", 5)
		return

	var p6_node := main.find_child("BeedrillP6Sprite", true, false)
	var p6_rendered := false
	var p6_frame_count := 0
	if p6_node != null and p6_node.has_method("is_resource_ready"):
		p6_rendered = bool(p6_node.call("is_resource_ready"))
		if p6_rendered and p6_node.has_method("frame_count"):
			p6_frame_count = int(p6_node.call("frame_count"))

	if p6_files_present and not p6_rendered:
		var reason := "unknown adapter failure"
		if p6_node != null and p6_node.has_method("failure_reason"):
			reason = String(p6_node.call("failure_reason"))
		_fail("local P6 files exist but Beedrill did not render: %s" % reason, 6)
		return
	if not p6_files_present and p6_rendered:
		_fail("P6 renderer reported ready without the required local files", 7)
		return

	var event_filename := "windbreak-beedrill.png" if p6_rendered else "windbreak-missing-p6-ci.png"
	var event_path := "%s/%s" % [CAPTURE_DIR, event_filename]
	var event_size := _capture_current_viewport(event_path)
	if event_size != EXPECTED_SIZE:
		_fail("event capture is %s instead of 390x844" % event_size, 8)
		return

	var manifest := {
		"schema_version": "p8-3-owner-evidence-capture-v1",
		"godot_version": Engine.get_version_info().get("string", "unknown"),
		"viewport": {"width": EXPECTED_SIZE.x, "height": EXPECTED_SIZE.y},
		"p6": {
			"atlas_path": P6_ATLAS_PATH,
			"metadata_path": P6_METADATA_PATH,
			"files_present": p6_files_present,
			"rendered": p6_rendered,
			"frame_count": p6_frame_count,
		},
		"captures": {
			"opening": opening_path,
			"event": event_path,
		},
		"owner_evidence_candidate": p6_rendered and p6_frame_count > 1,
		"manual_owner_checks_still_required": [
			"foreground foliage visibly occludes the independently composed Pokemon layer",
			"transition/input feedback feels game-native",
			"Godot product feel materially improves on the rejected DOM/PWA shell",
		],
	}
	var manifest_path := "%s/manifest.json" % CAPTURE_DIR
	var manifest_file := FileAccess.open(manifest_path, FileAccess.WRITE)
	if manifest_file == null:
		_fail("failed to open owner evidence manifest for writing", 9)
		return
	manifest_file.store_string(JSON.stringify(manifest, "\t") + "\n")
	manifest_file.close()

	print(
		"P8.3 owner evidence capture harness: PASS " +
		"owner_candidate=%s p6_rendered=%s frames=%d" % [
			str(manifest["owner_evidence_candidate"]),
			str(p6_rendered),
			p6_frame_count,
		]
	)
	quit(0)

func _capture_current_viewport(path: String) -> Vector2i:
	var image := get_root().get_texture().get_image()
	if image == null or image.is_empty():
		return Vector2i.ZERO
	var error := image.save_png(ProjectSettings.globalize_path(path))
	if error != OK:
		return Vector2i.ZERO
	return image.get_size()

func _fail(message: String, code: int) -> void:
	push_error(message)
	quit(code)
