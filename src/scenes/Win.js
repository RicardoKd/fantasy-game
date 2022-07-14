import AbstractFactory from "../AbstractFactory.js";
import { CANVAS_SIZE, HUMAN_SCALE, SPEECH_SCALE } from "../constants.js";

export default class Win extends Phaser.Scene {
  constructor() {
    super("Win");
  }

  init({ choice }) {
    this.girlTextureName = `costume_${choice[0]}_${choice[1]}_${choice[2]}`;
    this.locationTextureName = `bgLocation${choice[3]}`;
  }

  async create() {
    this.input.on("gameobjectdown", this.#screenClicked, this);

    const abstractFactory = new AbstractFactory();
    const tweenMngr = abstractFactory.createTweenManager();

    this.add.sprite(0, 0, this.locationTextureName).setOrigin(0, 0);

    const man = abstractFactory.renderImageXCenter(
      this,
      "man",
      30,
      HUMAN_SCALE
    );
    man.setPosition(man.x + 60, man.y);

    const manSmile = abstractFactory.renderImageXCenter(
      this,
      "manSmile",
      30,
      HUMAN_SCALE,
      0
    );

    manSmile.setPosition(man.x, man.y);

    const girl = abstractFactory
      .renderImageXCenter(this, this.girlTextureName, 30, HUMAN_SCALE)
      .setName("girl");
    girl.setPosition(girl.x - 60, girl.y);

    const manSpeech = abstractFactory.renderImageXCenter(
      this,
      "manSpeech2",
      260,
      SPEECH_SCALE,
      0
    );

    const winButton = abstractFactory.renderImageXCenter(
      this,
      "winButton",
      350,
      1,
      0
    );

    const darkOverlay = this.add
      .rectangle(0, 0, CANVAS_SIZE.WIDTH, CANVAS_SIZE.HEIGHT, "000000", 0.3)
      .setOrigin(0, 0)
      .setAlpha(0)
      .setInteractive();

    this.tweens.add(tweenMngr.humanEnterScene(girl));
    this.tweens.add(tweenMngr.humanEnterScene(man, "right"));
    this.tweens.add(tweenMngr.humanEnterScene(manSmile, "right"));
    this.tweens.add(tweenMngr.showSpeech(manSpeech));
    await this.#humanTalk(man, manSmile);
    this.tweens.add(tweenMngr.AlphaTo(darkOverlay, 1));
    this.tweens.add(tweenMngr.scaleFromZeroToNormal(winButton));
  }

  #screenClicked() {
    this.scene.start("Start");
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
    }, 250);

    return new Promise((resolve) => {
      setTimeout(() => {
        clearInterval(talk);
        resolve();
      }, 1500);
    });
  }
}
