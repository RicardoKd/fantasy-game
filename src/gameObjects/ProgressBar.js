import {
  ANIMATION_DURATION,
  TRACK_COLOR,
  BAR_COLOR,
  LINE_THICKNESS,
  QUANTITY_OF_LEVELS,
  CANVAS_SIZE,
} from "../constants.js";

export default class ProgressBar extends Phaser.GameObjects.Sprite {
  constructor(scene, y, length) {
    super(scene, "sprite");
    this.setName("progressBar");

    this.progressBar = scene.add
      .rexCustomProgress({
        type: "rexCustomProgress",
        create: {
          line: ["trackBlack", "trackYellow", "bar"],
        },
        update: function () {
          const centeredX = CANVAS_SIZE.WIDTH / 2 - length / 2;

          this.getShape("trackYellow")
            .setP0(centeredX - 4, y)
            .setP1(centeredX + length + 4, y)
            .lineStyle(LINE_THICKNESS + 6, 0xee6a2f);

          this.getShape("trackBlack")
            .setP0(centeredX, y)
            .setP1(centeredX + length, y)
            .lineStyle(LINE_THICKNESS, TRACK_COLOR);

          this.getShape("bar")
            .setP0(centeredX, y)
            .setP1(this.value * length + centeredX, y)
            .lineStyle(LINE_THICKNESS, BAR_COLOR);
        },
      })
      .setEaseValueFunction("Cubic")
      .setEaseValueDuration(ANIMATION_DURATION)
      .easeValueTo(0)
      .setAlpha(0.5);
  }

  nextLevel() {
    const costOfOneLevel = 1 / QUANTITY_OF_LEVELS;
    this.progressBar.easeValueTo(this.progressBar.value + costOfOneLevel);
  }
}
