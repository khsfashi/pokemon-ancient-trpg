extends RefCounted

# Reusable project-owned P8.3 UI skin. Player-facing text stays in Controls; this file
# owns only palette/border/focus treatment so screens do not accumulate one-off styles.

const INK := Color("#171813")
const PANEL := Color("#24231d")
const PANEL_ALT := Color("#302c22")
const BORDER := Color("#b89c61")
const BORDER_FOCUS := Color("#e0c27a")
const TEXT := Color("#f3e8c7")
const TEXT_MUTED := Color("#b9ad8d")
const ACCENT := Color("#7e302c")

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
	style.content_margin_left = 12
	style.content_margin_right = 12
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
	button.add_theme_stylebox_override("normal", button_style(Color("#393326"), Color("#9c8552"), 2))
	button.add_theme_stylebox_override("hover", button_style(Color("#493f2d"), Color("#c4a86a"), 2))
	button.add_theme_stylebox_override("pressed", button_style(Color("#26231d"), BORDER_FOCUS, 3))
	button.add_theme_stylebox_override("focus", button_style(Color("#393326"), BORDER_FOCUS, 3))
	button.add_theme_stylebox_override("disabled", button_style(Color("#292720"), Color("#625a45"), 2))
