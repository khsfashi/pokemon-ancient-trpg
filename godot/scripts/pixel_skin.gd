extends RefCounted

# Reusable project-owned P8.3 UI skin. Player-facing text stays in Controls; this file
# owns only palette/border/focus treatment so screens do not accumulate one-off styles.

const INK := Color("#141612")
const PANEL := Color("#24231d")
const PANEL_ALT := Color("#302c22")
const BORDER := Color("#aa8d55")
const BORDER_DARK := Color("#57462f")
const BORDER_FOCUS := Color("#e0c27a")
const TEXT := Color("#f3e8c7")
const TEXT_MUTED := Color("#b9ad8d")
const ACCENT := Color("#7e302c")
const CHOICE_NORMAL := "res://assets/golden_screen/runtime/choice_normal.png"
const CHOICE_FOCUSED := "res://assets/golden_screen/runtime/choice_focused.png"
const CHOICE_PRESSED := "res://assets/golden_screen/runtime/choice_pressed.png"

static func panel_style(fill: Color = PANEL, border: Color = BORDER, width: int = 2) -> StyleBoxFlat:
	var style := StyleBoxFlat.new()
	style.bg_color = fill
	style.border_color = border
	style.border_width_left = width
	style.border_width_top = width
	style.border_width_right = width
	style.border_width_bottom = width
	style.corner_radius_top_left = 0
	style.corner_radius_top_right = 0
	style.corner_radius_bottom_left = 0
	style.corner_radius_bottom_right = 0
	style.content_margin_left = 8
	style.content_margin_right = 8
	style.content_margin_top = 6
	style.content_margin_bottom = 6
	return style

static func button_style(fill: Color, border: Color, width: int) -> StyleBoxFlat:
	var style := panel_style(fill, border, width)
	style.content_margin_left = 14
	style.content_margin_right = 14
	style.content_margin_top = 8
	style.content_margin_bottom = 8
	return style

static func apply_button(button: Button) -> void:
	button.focus_mode = Control.FOCUS_ALL
	button.add_theme_font_size_override("font_size", 13)
	button.add_theme_color_override("font_color", TEXT)
	button.add_theme_color_override("font_hover_color", Color("#fff4d2"))
	button.add_theme_color_override("font_pressed_color", Color.WHITE)
	button.add_theme_color_override("font_focus_color", Color("#fff4d2"))
	button.add_theme_stylebox_override("normal", button_style(Color("#332e24"), BORDER_DARK, 2))
	button.add_theme_stylebox_override("hover", button_style(Color("#443b2b"), BORDER, 2))
	button.add_theme_stylebox_override("pressed", button_style(Color("#211f1a"), BORDER_FOCUS, 3))
	button.add_theme_stylebox_override("focus", button_style(Color("#393326"), BORDER_FOCUS, 3))
	button.add_theme_stylebox_override("disabled", button_style(Color("#292720"), Color("#625a45"), 2))

static func apply_choice_button(button: Button) -> void:
	button.focus_mode = Control.FOCUS_ALL
	button.add_theme_font_size_override("font_size", 13)
	button.add_theme_color_override("font_color", TEXT)
	button.add_theme_color_override("font_hover_color", Color("#fff4d2"))
	button.add_theme_color_override("font_pressed_color", Color.WHITE)
	button.add_theme_color_override("font_focus_color", Color("#fff4d2"))
	button.add_theme_stylebox_override("normal", _choice_style(CHOICE_NORMAL))
	button.add_theme_stylebox_override("hover", _choice_style(CHOICE_FOCUSED))
	button.add_theme_stylebox_override("pressed", _choice_style(CHOICE_PRESSED))
	button.add_theme_stylebox_override("focus", _choice_style(CHOICE_FOCUSED))
	button.add_theme_stylebox_override("disabled", _choice_style(CHOICE_NORMAL))

static func _choice_style(path: String) -> StyleBoxTexture:
	var style := StyleBoxTexture.new()
	style.texture = load(path) as Texture2D
	style.texture_margin_left = 22
	style.texture_margin_top = 10
	style.texture_margin_right = 22
	style.texture_margin_bottom = 10
	style.content_margin_left = 20
	style.content_margin_right = 14
	style.content_margin_top = 8
	style.content_margin_bottom = 8
	return style
