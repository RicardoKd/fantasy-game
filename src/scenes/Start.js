import TweenManager from "../animations/TweenManager.js";
import AbstractFactory from "../AbstractFactory.js";
import { CANVAS_SIZE, REPLICA_SCALE } from "../constants.js";

export default class Start extends Phaser.Scene {
  constructor() {
    super("Start");
  }

  async create() {
    const abstractFactory = new AbstractFactory();

    // TODO: make background a little darker
    this.add.sprite(0, 0, "bg").setOrigin(0, 0);

    const manImg1 = abstractFactory.renderImageSprite(this, "man", 0.5);
    manImg1.setPosition(
      CANVAS_SIZE.WIDTH / 2 - (manImg1.width * manImg1.scale) / 2,
      30
    );

    const manSmile = abstractFactory.renderImageSprite(
      this,
      "manSmile",
      0.5,
      0
    );
    manSmile.setPosition(
      CANVAS_SIZE.WIDTH / 2 - (manSmile.width * manSmile.scale) / 2,
      30
    );

    const manReplica = abstractFactory.renderImageSprite(
      this,
      "manReplica",
      REPLICA_SCALE,
      0
    );
    manReplica.setPosition(
      CANVAS_SIZE.WIDTH / 2 - (manReplica.width * manReplica.scale) / 2,
      260
    );

    const girl = abstractFactory.renderImageSprite(this, "girl", 0.5, 0);
    girl.setPosition(CANVAS_SIZE.WIDTH / 2 - (girl.width * girl.scale) / 2, 30);

    const girlSurprized = abstractFactory.renderImageSprite(
      this,
      "girlSurprized",
      0.5,
      0
    );
    girlSurprized.setPosition(
      CANVAS_SIZE.WIDTH / 2 - (girlSurprized.width * girlSurprized.scale) / 2,
      30
    );

    const girlReplica = abstractFactory.renderImageSprite(
      this,
      "girlReplica",
      REPLICA_SCALE,
      0
    );
    girlReplica.setPosition(
      CANVAS_SIZE.WIDTH / 2 - (girlReplica.width * girlReplica.scale) / 2,
      260
    );

    const tweenMngr = new TweenManager();

    this.tweens.add(tweenMngr.showReplica(manReplica));
    await this.#humanTalk(manImg1, manSmile);
    this.tweens.add(tweenMngr.humanLeaveScene(manImg1));
    this.tweens.add(tweenMngr.scaleToZero(manReplica));
    this.tweens.add(tweenMngr.showReplica(girlReplica));
    this.tweens.add(tweenMngr.humanEnterScene(girl));
    this.tweens.add(tweenMngr.humanEnterScene(girlSurprized));
    girl.setAlpha(1);
    girlSurprized.setAlpha(1);
    await this.#humanTalk(girl, girlSurprized);

    this.scene.start("Play");
  }

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
      }, 2400);
    });
  }
}
