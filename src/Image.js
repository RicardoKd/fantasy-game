import { CANVAS_SIZE } from "./constants.js";

export default class Image extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, key) {
    super(scene, x, y);
    this.scene = scene;
    // scene.add.sprite(0, 0, "man1");
    this.setScale(0.5);
    this.setOrigin(0, 0);
    this.setPosition(CANVAS_SIZE.WIDTH / 2 - 190, 30);
    this.setName("man1Sprite");
    // this.setAlpha();

    // this.scene.add.existing(this);
  }
}
