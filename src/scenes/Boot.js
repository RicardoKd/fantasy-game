import backgroundImg from "../assets/bg-main.png";

export default class Boot extends Phaser.Scene {
  constructor() {
    super("Boot");
  }

  preload() {
    this.load.image("bg", backgroundImg);
  }

  create() {
    this.scene.start("Preload");
  }
}
