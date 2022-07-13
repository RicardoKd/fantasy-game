import AbstractFactory from "../AbstractFactory.js";
import { HUMAN_SCALE, SPEECH_SCALE } from "../constants.js";

export default class Start extends Phaser.Scene {
  constructor() {
    super("Start");
  }

  async create() {
    const abstractFactory = new AbstractFactory();
    const tweenMngr = abstractFactory.createTweenManager();

    this.add.sprite(0, 0, "bg").setOrigin(0, 0);

    const man = abstractFactory.renderImageXCenter(
      this,
      "man",
      30,
      HUMAN_SCALE
    );

    const manSmile = abstractFactory.renderImageXCenter(
      this,
      "manSmile",
      30,
      HUMAN_SCALE,
      0
    );

    const manSpeech = abstractFactory.renderImageXCenter(
      this,
      "manSpeech1",
      260,
      SPEECH_SCALE,
      0
    );

    const girl = abstractFactory.renderImageXCenter(
      this,
      "girl",
      30,
      HUMAN_SCALE,
      0
    );

    const girlSurprized = abstractFactory.renderImageXCenter(
      this,
      "girlSurprized",
      30,
      HUMAN_SCALE,
      0
    );

    const girlSpeech = abstractFactory.renderImageXCenter(
      this,
      "girlSpeech",
      260,
      SPEECH_SCALE,
      0
    );

    this.tweens.add(tweenMngr.showSpeech(manSpeech));
    await this.#humanTalk(man, manSmile);
    this.tweens.add(tweenMngr.humanLeaveScene(man));
    this.tweens.add(tweenMngr.scaleToZero(manSpeech));
    this.tweens.add(tweenMngr.showSpeech(girlSpeech));
    this.tweens.add(tweenMngr.humanEnterScene(girl));
    this.tweens.add(tweenMngr.humanEnterScene(girlSurprized));
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
    }, 250);

    return new Promise((resolve) => {
      setTimeout(() => {
        clearInterval(talk);
        resolve();
      }, 1500);
    });
  }
}
