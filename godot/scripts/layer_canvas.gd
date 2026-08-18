extends Control
class_name SpikeLayerCanvas

# Visual-only project-owned scaffold. These shapes prove layer ownership and z-order;
# they are not acceptance art and contain no Pokemon likenesses.
enum LayerKind { BACKGROUND, MIDGROUND, HUMAN, FOREGROUND }

@export var layer_kind: LayerKind = LayerKind.BACKGROUND

func _ready() -> void:
	mouse_filter = Control.MOUSE_FILTER_IGNORE
	queue_redraw()

func _draw() -> void:
	match layer_kind:
		LayerKind.BACKGROUND:
			_draw_background()
		LayerKind.MIDGROUND:
			_draw_midground()
		LayerKind.HUMAN:
			_draw_human()
		LayerKind.FOREGROUND:
			_draw_foreground()

func _draw_background() -> void:
	# 390x844 logical canvas; illustration occupies the upper ~600 px.
	draw_rect(Rect2(0, 0, 390, 610), Color("#c7b37b"))
	draw_rect(Rect2(0, 0, 390, 250), Color("#69744e"))
	draw_rect(Rect2(0, 120, 390, 170), Color("#7e8458"))
	# Distant orchard blocks.
	for x in range(-24, 420, 52):
		draw_rect(Rect2(x, 150, 34, 118), Color("#374a35"))
		draw_rect(Rect2(x + 8, 130, 42, 42), Color("#46583b"))
	# Dirt route and stone wall establish the two route bands.
	draw_rect(Rect2(0, 310, 390, 300), Color("#746247"))
	draw_rect(Rect2(236, 260, 154, 350), Color("#4c493d"))
	for y in range(272, 594, 24):
		var offset := 0 if ((y / 24) as int) % 2 == 0 else 12
		for x in range(246 - offset, 406, 32):
			draw_rect(Rect2(x, y, 27, 17), Color("#77705d"))

func _draw_midground() -> void:
	# Windbreak trunks and warning stakes. Kept independent from background for later parallax.
	for x in [18, 72, 128, 184]:
		draw_rect(Rect2(x, 210, 18, 250), Color("#403a2d"))
		draw_rect(Rect2(x - 22, 194, 62, 54), Color("#33442f"))
		draw_rect(Rect2(x - 10, 168, 48, 48), Color("#3d4d35"))
	# Red warning cloth/stake from the authored scene language.
	draw_rect(Rect2(207, 316, 6, 112), Color("#493a2c"))
	draw_rect(Rect2(213, 324, 42, 14), Color("#7f302d"))
	draw_rect(Rect2(213, 338, 26, 8), Color("#662624"))
	# Abandoned fruit crate stays in-world rather than inside UI.
	draw_rect(Rect2(140, 418, 62, 40), Color("#6a4f32"))
	draw_rect(Rect2(146, 424, 50, 7), Color("#96724a"))
	draw_rect(Rect2(146, 443, 50, 7), Color("#96724a"))

func _draw_human() -> void:
	# Generic project-owned adventurer/keeper stand-in. Replace with transparent authored sprite.
	draw_rect(Rect2(270, 356, 30, 58), Color("#5a3f34"))
	draw_rect(Rect2(276, 330, 20, 24), Color("#c0a276"))
	draw_rect(Rect2(266, 410, 12, 44), Color("#382f2a"))
	draw_rect(Rect2(292, 410, 12, 44), Color("#382f2a"))
	draw_rect(Rect2(256, 365, 12, 42), Color("#77583d"))
	# Work staff; intentionally not a weapon silhouette.
	draw_rect(Rect2(314, 338, 4, 118), Color("#4b3828"))

func _draw_foreground() -> void:
	# Foreground foliage owns occlusion independently from Pokemon/human layers.
	for rect in [
		Rect2(0, 500, 96, 110), Rect2(54, 528, 90, 82),
		Rect2(314, 480, 76, 130), Rect2(278, 532, 82, 78)
	]:
		draw_rect(rect, Color("#28382b"))
	for x in range(8, 382, 28):
		draw_rect(Rect2(x, 548 + (x % 3) * 8, 10, 62), Color("#40513a"))
