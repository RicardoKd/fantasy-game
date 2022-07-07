// import manImg1 from "../assets/man-1.png";
// import manImg2 from "../assets/man-2.png";
// import girlImg1 from "../assets/girl-default.png";
// import girlImg2 from "../assets/girl-surprized.png";
// import manReplica from "../assets/Paul.png";
// import girlReplica from "../assets/Lexy.png";
// import backgroundImg from "../assets/bg-main.png";
import TweenManager from "../animations/TweenManager.js";
import AbstractFactory from "../AbstractFactory.js";
import { CANVAS_SIZE, REPLICA_SCALE } from "../constants.js";

export default class Start extends Phaser.Scene {
  constructor() {
    super("Start");
  }

  // preload() {
  //   this.#loadAssets();
  // }

  async create() {
    let abstractFactory = new AbstractFactory();
    this.add.sprite(0, 0, "bg").setOrigin(0, 0);
    const manImg1 = abstractFactory.createImageSprite(this, 0, 0, "man1", 0.5);
    manImg1.setPosition(
      CANVAS_SIZE.WIDTH / 2 - (manImg1.width * manImg1.scale) / 2,
      30
    );

    const manImg2 = abstractFactory.createImageSprite(
      this,
      0,
      0,
      "man2",
      0.5,
      0
    );
    manImg2.setPosition(
      CANVAS_SIZE.WIDTH / 2 - (manImg2.width * manImg2.scale) / 2,
      30
    );

    const manReplica = abstractFactory.createImageSprite(
      this,
      0,
      0,
      "manReplica",
      REPLICA_SCALE,
      0
    );
    manReplica.setPosition(
      CANVAS_SIZE.WIDTH / 2 - (manReplica.width * manReplica.scale) / 2,
      260
    );

    const girlImg1 = abstractFactory.createImageSprite(
      this,
      0,
      0,
      "girl1",
      0.5,
      0
    );
    girlImg1.setPosition(
      CANVAS_SIZE.WIDTH / 2 - (girlImg1.width * girlImg1.scale) / 2,
      30
    );

    const girlImg2 = abstractFactory.createImageSprite(
      this,
      0,
      0,
      "girl2",
      0.5,
      0
    );
    girlImg2.setPosition(
      CANVAS_SIZE.WIDTH / 2 - (girlImg2.width * girlImg2.scale) / 2,
      30
    );

    const girlReplica = abstractFactory.createImageSprite(
      this,
      0,
      0,
      "girlReplica",
      REPLICA_SCALE,
      0
    );
    girlReplica.setPosition(
      CANVAS_SIZE.WIDTH / 2 - (girlReplica.width * girlReplica.scale) / 2,
      260
    );

    this.tweens.add(new TweenManager().showReplica(manReplica));
    await this.#humanTalk(manImg1, manImg2);
    this.tweens.add(new TweenManager().humanLeaveScene(manImg1));
    this.tweens.add(new TweenManager().scaletoZero(manReplica));
    this.tweens.add(new TweenManager().showReplica(girlReplica));
    this.tweens.add(new TweenManager().humanEnterScene(girlImg1));
    this.tweens.add(new TweenManager().humanEnterScene(girlImg2));
    girlImg1.setAlpha(1);
    girlImg2.setAlpha(1);
    await this.#humanTalk(girlImg1, girlImg2);
  }

  update() {}

  #humanTalk(sprite1, sprite2) {
    const talk = setInterval(() => {
      if (sprite1.alpha) {
        sprite1.setAlpha(0);
        sprite2.setAlpha(1);
      } else {
        sprite1.setAlpha(1);
        sprite2.setAlpha(0);
      }
    }, 400);

    return new Promise((resolve) => {
      setTimeout(() => {
        clearInterval(talk);
        resolve();
      }, 3200);
    });
  }

  // #loadAssets() {
  //   this.load.image("man1", manImg1);
  //   this.load.image("man2", manImg2);
  //   this.load.image("girl1", girlImg1);
  //   this.load.image("girl2", girlImg2);
  //   this.load.image("manReplica", manReplica);
  //   this.load.image("girlReplica", girlReplica);
  //   this.load.image("bg", backgroundImg);
  // }
}
