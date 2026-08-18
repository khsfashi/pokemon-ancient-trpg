extends Control

const LayerCanvasScript = preload("res://scripts/layer_canvas.gd")
const PixelSkinScript = preload("res://scripts/pixel_skin.gd")
const PokemonEncounterSpriteScript = preload("res://scripts/pokemon_encounter_sprite.gd")
const SpikeRuntimeScript = preload("res://scripts/spike_runtime.gd")
const LOCAL_BEEDRILL_ATLAS_PATH := "res://local_assets/pokemon/beedrill/15.png"
const LOCAL_BEEDRILL_METADATA_PATH := "res://local_assets/pokemon/beedrill/15.json"

const ICON_VITALITY := "res://assets/ui/icon_vitality.svg"
const ICON_FATIGUE := "res://assets/ui/icon_fatigue.svg"
const ICON_PROVISIONS := "res://assets/ui/icon_provisions.svg"

# Avoid editor-generated global class cache as a runtime prerequisite. The spike must
# parse and boot from a clean checkout using only explicit preloads.
var runtime
var surface_root: Control
var transition_overlay: ColorRect
var result_label: Label
var choice_buttons: Array[Button] = []

func _ready() -> void:
	texture_filter = CanvasItem.TEXTURE_FILTER_NEAREST
	runtime = SpikeRuntimeScript.new()
	_build_surface_root()
	_show_opening_surface()
	_build_transition_overlay()

func _build_surface_root() -> void:
	surface_root = Control.new()
	surface_root.name = "SurfaceRoot"
	add_child(surface_root)
	_full_rect(surface_root)

func _build_transition_overlay() -> void:
	transition_overlay = ColorRect.new()
	transition_overlay.name = "TransitionOverlay"
	transition_overlay.color = PixelSkinScript.INK
	transition_overlay.modulate.a = 0.0
	transition_overlay.mouse_filter = Control.MOUSE_FILTER_IGNORE
	transition_overlay.z_index = 100
	add_child(transition_overlay)
	_full_rect(transition_overlay)

func _show_opening_surface() -> void:
	_clear_surface()
	_add_world_layer(LayerCanvasScript.LayerKind.OPENING_BACKGROUND, 0)
	_add_world_layer(LayerCanvasScript.LayerKind.OPENING_HUMAN, 10)
	_add_world_layer(LayerCanvasScript.LayerKind.OPENING_FOREGROUND, 20)

	var shade := ColorRect.new()
	shade.color = Color(0.05, 0.06, 0.05, 0.42)
	shade.position = Vector2.ZERO
	shade.size = Vector2(390, 844)
	shade.mouse_filter = Control.MOUSE_FILTER_IGNORE
	shade.z_index = 30
	surface_root.add_child(shade)

	var crest := Label.new()
	crest.text = "ANCIENT TRPG"
	crest.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	crest.position = Vector2(32, 154)
	crest.size = Vector2(326, 34)
	crest.z_index = 40
	crest.add_theme_font_size_override("font_size", 16)
	crest.add_theme_color_override("font_color", Color("#d8c78f"))
	surface_root.add_child(crest)

	var title := Label.new()
	title.text = "경계 밖의 길"
	title.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	title.position = Vector2(24, 194)
	title.size = Vector2(342, 72)
	title.z_index = 40
	title.add_theme_font_size_override("font_size", 34)
	title.add_theme_color_override("font_color", Color("#f4ecd1"))
	surface_root.add_child(title)

	var divider := ColorRect.new()
	divider.color = PixelSkinScript.BORDER
	divider.position = Vector2(132, 270)
	divider.size = Vector2(126, 2)
	divider.z_index = 40
	surface_root.add_child(divider)

	var subtitle := Label.new()
	subtitle.text = "사람의 길과 야생의 영역이\n아직 하나의 지도에 담기지 못했던 시대"
	subtitle.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	subtitle.autowrap_mode = TextServer.AUTOWRAP_WORD_SMART
	subtitle.position = Vector2(48, 288)
	subtitle.size = Vector2(294, 70)
	subtitle.z_index = 40
	subtitle.add_theme_font_size_override("font_size", 13)
	subtitle.add_theme_color_override("font_color", Color("#ded3b2"))
	surface_root.add_child(subtitle)

	var start_button := _make_pixel_button("여정을 시작한다")
	start_button.position = Vector2(55, 690)
	start_button.size = Vector2(280, 58)
	start_button.z_index = 40
	start_button.pressed.connect(_on_start_pressed)
	surface_root.add_child(start_button)

	var chapter := Label.new()
	chapter.text = "고대 기행 · 제1장"
	chapter.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	chapter.position = Vector2(44, 766)
	chapter.size = Vector2(302, 24)
	chapter.z_index = 40
	chapter.add_theme_font_size_override("font_size", 10)
	chapter.add_theme_color_override("font_color", Color("#ad9f7b"))
	surface_root.add_child(chapter)

func _show_event_surface() -> void:
	_clear_surface()
	_add_world_layer(LayerCanvasScript.LayerKind.BACKGROUND, 0)
	_add_world_layer(LayerCanvasScript.LayerKind.MIDGROUND, 10)
	_add_world_layer(LayerCanvasScript.LayerKind.HUMAN, 20)
	_add_pokemon_layer()
	_add_world_layer(LayerCanvasScript.LayerKind.FOREGROUND, 40)
	_add_event_hud()
	_add_event_panel()

func _add_world_layer(kind: int, layer_z: int) -> void:
	var layer = LayerCanvasScript.new()
	layer.layer_kind = kind
	layer.z_index = layer_z
	surface_root.add_child(layer)
	_full_rect(layer)

func _add_pokemon_layer() -> void:
	var pokemon_layer := Control.new()
	pokemon_layer.name = "PokemonLayer"
	pokemon_layer.z_index = 30
	pokemon_layer.mouse_filter = Control.MOUSE_FILTER_IGNORE
	pokemon_layer.position = Vector2.ZERO
	pokemon_layer.size = Vector2(390, 610)
	surface_root.add_child(pokemon_layer)

	if FileAccess.file_exists(LOCAL_BEEDRILL_ATLAS_PATH) and FileAccess.file_exists(LOCAL_BEEDRILL_METADATA_PATH):
		var encounter = PokemonEncounterSpriteScript.new()
		encounter.name = "BeedrillP6Sprite"
		encounter.atlas_path = LOCAL_BEEDRILL_ATLAS_PATH
		encounter.metadata_path = LOCAL_BEEDRILL_METADATA_PATH
		encounter.position = Vector2(190, 204)
		encounter.size = Vector2(166, 166)
		pokemon_layer.add_child(encounter)
		if encounter.is_resource_ready():
			return
		push_warning("P6 Beedrill atlas failed to load: %s" % encounter.failure_reason())
		encounter.queue_free()

	# Public repository intentionally keeps Pokemon media metadata-only.
	var missing := _make_panel(Rect2(194, 224, 164, 86), Color(0.08, 0.08, 0.06, 0.78), Color("#8d7b50"), 2)
	pokemon_layer.add_child(missing)
	var label := Label.new()
	label.text = "P6 독침붕 리소스\n로컬 불러오기 필요"
	label.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	label.vertical_alignment = VERTICAL_ALIGNMENT_CENTER
	label.position = Vector2(8, 8)
	label.size = Vector2(148, 70)
	label.add_theme_font_size_override("font_size", 11)
	label.add_theme_color_override("font_color", Color("#d8cca8"))
	missing.add_child(label)

func _add_event_hud() -> void:
	var hud := _make_panel(Rect2(12, 12, 366, 60), Color("#20231d"), PixelSkinScript.BORDER, 2)
	hud.z_index = 60
	surface_root.add_child(hud)

	var identity := Label.new()
	identity.text = "여행자 · 방풍림 경계"
	identity.position = Vector2(12, 7)
	identity.size = Vector2(240, 20)
	identity.add_theme_font_size_override("font_size", 13)
	identity.add_theme_color_override("font_color", PixelSkinScript.TEXT)
	hud.add_child(identity)

	# Values are not invented during the bounded architecture spike. These slots prove
	# icon-first density and will bind to authoritative state only after Godot adoption.
	_add_hud_metric(hud, ICON_VITALITY, "체력 —", 12)
	_add_hud_metric(hud, ICON_FATIGUE, "피로 —", 92)
	_add_hud_metric(hud, ICON_PROVISIONS, "식량 —", 172)

	var detail := _make_pixel_button("상세")
	detail.position = Vector2(294, 11)
	detail.size = Vector2(60, 38)
	detail.disabled = true
	hud.add_child(detail)

func _add_hud_metric(parent: Control, icon_path: String, text_value: String, x: float) -> void:
	if ResourceLoader.exists(icon_path):
		var texture := load(icon_path) as Texture2D
		if texture != null:
			var icon := TextureRect.new()
			icon.texture = texture
			icon.texture_filter = CanvasItem.TEXTURE_FILTER_NEAREST
			icon.expand_mode = TextureRect.EXPAND_IGNORE_SIZE
			icon.stretch_mode = TextureRect.STRETCH_KEEP_ASPECT_CENTERED
			icon.position = Vector2(x, 34)
			icon.size = Vector2(14, 14)
			parent.add_child(icon)

	var label := Label.new()
	label.text = text_value
	label.position = Vector2(x + 18, 31)
	label.size = Vector2(58, 18)
	label.add_theme_font_size_override("font_size", 10)
	label.add_theme_color_override("font_color", PixelSkinScript.TEXT_MUTED)
	parent.add_child(label)

func _add_event_panel() -> void:
	var panel := _make_panel(Rect2(12, 493, 366, 339), Color("#1e1d18"), PixelSkinScript.BORDER, 3)
	panel.z_index = 70
	surface_root.add_child(panel)

	var kicker := Label.new()
	kicker.text = "방풍림 · 경계 사건"
	kicker.position = Vector2(16, 14)
	kicker.size = Vector2(330, 18)
	kicker.add_theme_font_size_override("font_size", 10)
	kicker.add_theme_color_override("font_color", Color("#ae9a69"))
	panel.add_child(kicker)

	var title := Label.new()
	title.text = "방풍림의 경계"
	title.position = Vector2(16, 36)
	title.size = Vector2(330, 32)
	title.add_theme_font_size_override("font_size", 22)
	title.add_theme_color_override("font_color", PixelSkinScript.TEXT)
	panel.add_child(title)

	var prose := Label.new()
	prose.text = "독침붕이 물러난 뒤에도 과수원지기는 날갯소리가 멀어지는 쪽부터 살핀다.\n바깥길은 늦지만 안전하다. 안쪽 지름길은 빠른 대신 경고선을 스친다."
	prose.autowrap_mode = TextServer.AUTOWRAP_WORD_SMART
	prose.position = Vector2(16, 74)
	prose.size = Vector2(334, 82)
	prose.add_theme_font_size_override("font_size", 13)
	prose.add_theme_color_override("font_color", Color("#d8ceb1"))
	prose.add_theme_constant_override("line_spacing", 4)
	panel.add_child(prose)

	var protect := _make_pixel_button("방풍림 바깥 우회로를 지킨다")
	protect.position = Vector2(16, 168)
	protect.size = Vector2(334, 48)
	protect.pressed.connect(_on_choice_pressed.bind("protect_windbreak"))
	panel.add_child(protect)
	choice_buttons.append(protect)

	var shortcut := _make_pixel_button("안쪽 지름길로 들어간다")
	shortcut.position = Vector2(16, 224)
	shortcut.size = Vector2(334, 48)
	shortcut.pressed.connect(_on_choice_pressed.bind("take_shortcut"))
	panel.add_child(shortcut)
	choice_buttons.append(shortcut)

	result_label = Label.new()
	result_label.text = "경고선을 넘기 전, 어느 길을 택할지 결정해야 한다."
	result_label.autowrap_mode = TextServer.AUTOWRAP_WORD_SMART
	result_label.position = Vector2(16, 284)
	result_label.size = Vector2(334, 38)
	result_label.add_theme_font_size_override("font_size", 10)
	result_label.add_theme_color_override("font_color", Color("#aa9f84"))
	panel.add_child(result_label)

func _on_start_pressed() -> void:
	_fade_to(Callable(self, "_show_event_surface"))

func _on_choice_pressed(choice_id: String) -> void:
	var resolution = runtime.resolve_choice(choice_id)
	for button in choice_buttons:
		button.disabled = true
	var relationship: Dictionary = resolution["relationship"]
	if choice_id == "protect_windbreak":
		result_label.text = "과수원지기가 짧게 고개를 끄덕인다. 위험을 피한 만큼 길은 조금 더 이어진다."
	else:
		result_label.text = "과수원지기의 표정이 굳는다. 시간을 아꼈지만, 다음 부탁은 쉽게 얻기 어려워졌다."
	print("P8.3 choice=%s outcome=%s relationship=%s rng_draws=0" % [choice_id, resolution["outcome_id"], relationship["state_id"]])

func _fade_to(callback: Callable) -> void:
	transition_overlay.mouse_filter = Control.MOUSE_FILTER_STOP
	var tween := create_tween()
	tween.tween_property(transition_overlay, "modulate:a", 1.0, 0.14)
	tween.tween_callback(callback)
	tween.tween_property(transition_overlay, "modulate:a", 0.0, 0.20)
	tween.tween_callback(Callable(self, "_unlock_transition_input"))

func _unlock_transition_input() -> void:
	transition_overlay.mouse_filter = Control.MOUSE_FILTER_IGNORE

func _clear_surface() -> void:
	choice_buttons.clear()
	result_label = null
	for child in surface_root.get_children():
		child.queue_free()

func _full_rect(node: Control) -> void:
	node.set_anchors_and_offsets_preset(Control.PRESET_FULL_RECT)

func _make_pixel_button(text_value: String) -> Button:
	var button := Button.new()
	button.text = text_value
	PixelSkinScript.apply_button(button)
	return button

func _make_panel(rect: Rect2, fill: Color, border: Color, width: int) -> Panel:
	var panel := Panel.new()
	panel.position = rect.position
	panel.size = rect.size
	panel.add_theme_stylebox_override("panel", PixelSkinScript.panel_style(fill, border, width))
	return panel
