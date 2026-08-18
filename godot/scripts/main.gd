extends Control

const LayerCanvasScript = preload("res://scripts/layer_canvas.gd")
const SpikeRuntimeScript = preload("res://scripts/spike_runtime.gd")
const LOCAL_BEEDRILL_PATH := "res://local_assets/pokemon/beedrill.png"

var runtime: SpikeRuntime
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
	_full_rect(surface_root)
	add_child(surface_root)

func _build_transition_overlay() -> void:
	transition_overlay = ColorRect.new()
	transition_overlay.name = "TransitionOverlay"
	transition_overlay.color = Color("#17150f")
	transition_overlay.modulate.a = 0.0
	transition_overlay.mouse_filter = Control.MOUSE_FILTER_IGNORE
	transition_overlay.z_index = 100
	_full_rect(transition_overlay)
	add_child(transition_overlay)

func _show_opening_surface() -> void:
	_clear_surface()
	var background := LayerCanvasScript.new() as SpikeLayerCanvas
	background.layer_kind = SpikeLayerCanvas.LayerKind.BACKGROUND
	_full_rect(background)
	surface_root.add_child(background)

	var shade := ColorRect.new()
	shade.color = Color(0.06, 0.07, 0.05, 0.34)
	shade.position = Vector2(0, 0)
	shade.size = Vector2(390, 844)
	surface_root.add_child(shade)

	var crest := Label.new()
	crest.text = "ANCIENT  TRPG"
	crest.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	crest.position = Vector2(32, 176)
	crest.size = Vector2(326, 34)
	crest.add_theme_font_size_override("font_size", 18)
	crest.add_theme_color_override("font_color", Color("#e8d8a1"))
	surface_root.add_child(crest)

	var title := Label.new()
	title.text = "경계 밖의 길"
	title.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	title.position = Vector2(24, 220)
	title.size = Vector2(342, 72)
	title.add_theme_font_size_override("font_size", 34)
	title.add_theme_color_override("font_color", Color("#f4ecd1"))
	surface_root.add_child(title)

	var subtitle := Label.new()
	subtitle.text = "사람과 포켓몬의 경계가 아직 지도보다 먼저였던 시대"
	subtitle.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	subtitle.autowrap_mode = TextServer.AUTOWRAP_WORD_SMART
	subtitle.position = Vector2(52, 304)
	subtitle.size = Vector2(286, 56)
	subtitle.add_theme_font_size_override("font_size", 13)
	subtitle.add_theme_color_override("font_color", Color("#ddd1ad"))
	surface_root.add_child(subtitle)

	var start_button := _make_pixel_button("여정을 시작한다")
	start_button.position = Vector2(55, 674)
	start_button.size = Vector2(280, 58)
	start_button.pressed.connect(_on_start_pressed)
	surface_root.add_child(start_button)

	var note := Label.new()
	note.text = "P8.3 GODOT ARCHITECTURE SPIKE"
	note.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	note.position = Vector2(44, 758)
	note.size = Vector2(302, 24)
	note.add_theme_font_size_override("font_size", 10)
	note.add_theme_color_override("font_color", Color("#a99c79"))
	surface_root.add_child(note)

func _show_event_surface() -> void:
	_clear_surface()
	_add_world_layer(SpikeLayerCanvas.LayerKind.BACKGROUND, 0)
	_add_world_layer(SpikeLayerCanvas.LayerKind.MIDGROUND, 10)
	_add_world_layer(SpikeLayerCanvas.LayerKind.HUMAN, 20)
	_add_pokemon_layer()
	_add_world_layer(SpikeLayerCanvas.LayerKind.FOREGROUND, 40)
	_add_event_hud()
	_add_event_panel()

func _add_world_layer(kind: SpikeLayerCanvas.LayerKind, layer_z: int) -> void:
	var layer := LayerCanvasScript.new() as SpikeLayerCanvas
	layer.layer_kind = kind
	layer.z_index = layer_z
	_full_rect(layer)
	surface_root.add_child(layer)

func _add_pokemon_layer() -> void:
	var pokemon_layer := Control.new()
	pokemon_layer.name = "PokemonLayer"
	pokemon_layer.z_index = 30
	pokemon_layer.mouse_filter = Control.MOUSE_FILTER_IGNORE
	pokemon_layer.position = Vector2.ZERO
	pokemon_layer.size = Vector2(390, 610)
	surface_root.add_child(pokemon_layer)

	if ResourceLoader.exists(LOCAL_BEEDRILL_PATH):
		var texture := load(LOCAL_BEEDRILL_PATH) as Texture2D
		if texture != null:
			var sprite := TextureRect.new()
			sprite.name = "BeedrillP6Sprite"
			sprite.texture = texture
			sprite.texture_filter = CanvasItem.TEXTURE_FILTER_NEAREST
			sprite.expand_mode = TextureRect.EXPAND_IGNORE_SIZE
			sprite.stretch_mode = TextureRect.STRETCH_KEEP_ASPECT_CENTERED
			sprite.position = Vector2(196, 214)
			sprite.size = Vector2(154, 154)
			pokemon_layer.add_child(sprite)
			return

	# Public repository intentionally keeps Pokemon media metadata-only.
	var missing := _make_panel(Rect2(188, 226, 168, 92), Color(0.08, 0.08, 0.06, 0.76), Color("#a48d58"), 2)
	pokemon_layer.add_child(missing)
	var label := Label.new()
	label.text = "P6 독침붕 스프라이트\n로컬 materialize 필요"
	label.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	label.vertical_alignment = VERTICAL_ALIGNMENT_CENTER
	label.position = Vector2(8, 8)
	label.size = Vector2(152, 76)
	label.add_theme_font_size_override("font_size", 12)
	label.add_theme_color_override("font_color", Color("#dbcda4"))
	missing.add_child(label)

func _add_event_hud() -> void:
	var hud := _make_panel(Rect2(12, 12, 366, 58), Color("#20231d"), Color("#b29a62"), 2)
	hud.z_index = 60
	surface_root.add_child(hud)

	var identity := Label.new()
	identity.text = "여행자"
	identity.position = Vector2(12, 8)
	identity.size = Vector2(90, 20)
	identity.add_theme_font_size_override("font_size", 15)
	identity.add_theme_color_override("font_color", Color("#f2e5bd"))
	hud.add_child(identity)

	var survival := Label.new()
	# Values are intentionally not invented in the spike; this is a presentation slot.
	survival.text = "체력 —   피로 —   식량 —"
	survival.position = Vector2(12, 31)
	survival.size = Vector2(260, 18)
	survival.add_theme_font_size_override("font_size", 11)
	survival.add_theme_color_override("font_color", Color("#c6bc9d"))
	hud.add_child(survival)

	var detail := _make_pixel_button("상세")
	detail.position = Vector2(294, 10)
	detail.size = Vector2(60, 38)
	detail.disabled = true
	hud.add_child(detail)

func _add_event_panel() -> void:
	var panel := _make_panel(Rect2(12, 493, 366, 339), Color("#1e1d18"), Color("#b89c61"), 3)
	panel.z_index = 70
	surface_root.add_child(panel)

	var kicker := Label.new()
	kicker.text = "WIND BREAK · 경계 사건"
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
	title.add_theme_color_override("font_color", Color("#f3e8c7"))
	panel.add_child(title)

	var prose := Label.new()
	prose.text = "독침붕이 물러난 뒤에도 과수원지기는 날갯소리가 멀어지는 방향부터 확인한다.\n밖으로 돌면 늦어도 길은 이어진다. 안쪽 지름길은 빠르지만 경고 접근선을 스친다."
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
	result_label.text = "선택 ID와 결과는 기존 TypeScript authority를 그대로 따른다."
	result_label.autowrap_mode = TextServer.AUTOWRAP_WORD_SMART
	result_label.position = Vector2(16, 284)
	result_label.size = Vector2(334, 38)
	result_label.add_theme_font_size_override("font_size", 10)
	result_label.add_theme_color_override("font_color", Color("#aa9f84"))
	panel.add_child(result_label)

func _on_start_pressed() -> void:
	_fade_to(Callable(self, "_show_event_surface"))

func _on_choice_pressed(choice_id: String) -> void:
	var resolution := runtime.resolve_choice(choice_id)
	for button in choice_buttons:
		button.disabled = true
	var relationship: Dictionary = resolution["relationship"]
	if choice_id == "protect_windbreak":
		result_label.text = "결과: %s · 관계: %s · RNG draw 0" % [resolution["outcome_id"], relationship["state_id"]]
	else:
		result_label.text = "결과: %s · 관계: %s · 사회적 비용 +1 · RNG draw 0" % [resolution["outcome_id"], relationship["state_id"]]

func _fade_to(callback: Callable) -> void:
	transition_overlay.mouse_filter = Control.MOUSE_FILTER_STOP
	var tween := create_tween()
	tween.tween_property(transition_overlay, "modulate:a", 1.0, 0.14)
	tween.tween_callback(callback)
	tween.tween_property(transition_overlay, "modulate:a", 0.0, 0.20)
	tween.tween_callback(func() -> void: transition_overlay.mouse_filter = Control.MOUSE_FILTER_IGNORE)

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
	button.focus_mode = Control.FOCUS_ALL
	button.add_theme_font_size_override("font_size", 13)
	button.add_theme_color_override("font_color", Color("#f1e4bf"))
	button.add_theme_color_override("font_hover_color", Color("#fff5d6"))
	button.add_theme_color_override("font_pressed_color", Color("#ffffff"))
	button.add_theme_stylebox_override("normal", _button_style(Color("#383225"), Color("#a68d56"), 2))
	button.add_theme_stylebox_override("hover", _button_style(Color("#49402e"), Color("#c0a666"), 2))
	button.add_theme_stylebox_override("pressed", _button_style(Color("#26231d"), Color("#e0c27a"), 3))
	button.add_theme_stylebox_override("disabled", _button_style(Color("#292720"), Color("#625a45"), 2))
	return button

func _button_style(fill: Color, border: Color, width: int) -> StyleBoxFlat:
	var style := StyleBoxFlat.new()
	style.bg_color = fill
	style.border_color = border
	style.border_width_left = width
	style.border_width_top = width
	style.border_width_right = width
	style.border_width_bottom = width
	style.content_margin_left = 8
	style.content_margin_right = 8
	style.content_margin_top = 6
	style.content_margin_bottom = 6
	return style

func _make_panel(rect: Rect2, fill: Color, border: Color, width: int) -> Panel:
	var panel := Panel.new()
	panel.position = rect.position
	panel.size = rect.size
	var style := StyleBoxFlat.new()
	style.bg_color = fill
	style.border_color = border
	style.border_width_left = width
	style.border_width_top = width
	style.border_width_right = width
	style.border_width_bottom = width
	panel.add_theme_stylebox_override("panel", style)
	return panel
