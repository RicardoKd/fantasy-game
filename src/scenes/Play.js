import TweenManager from "../animations/TweenManager.js";
import AbstractFactory from "../AbstractFactory.js";
import { CANVAS_SIZE, CARD_SCALE, CARDS } from "../constants.js";

export default class Play extends Phaser.Scene {
  constructor() {
    super("Play");
    this.choice1 = 0;
    this.choice2 = 0;
    this.choice3 = 0;
    this.choice4 = 0;
  }

  async create() {
    const abstractFactory = new AbstractFactory();

    this.add.sprite(0, 0, "bg").setOrigin(0, 0);

    const textBg = abstractFactory.renderImageSprite(this, "progressBar", 0.35);
    textBg.setPosition(
      CANVAS_SIZE.WIDTH / 2 - (textBg.width * textBg.scale) / 2,
      -30
    );

    const topText = this.add.text(0, 0, "Choose your dress");
    topText.setPosition(
      CANVAS_SIZE.WIDTH / 2 - (topText.width * topText.scale) / 2,
      textBg.y + (textBg.height * textBg.scale) / 2 - topText.height / 2
    );

    const girlShy = abstractFactory.renderImageSprite(this, "girlShy", 0.5);
    girlShy.setPosition(
      CANVAS_SIZE.WIDTH / 2 - (girlShy.width * girlShy.scale) / 2,
      30
    );

    const cards = abstractFactory.renderCards(this);
    cards.forEach((card) => card.on("pointerup", this.#cardClicked));

    // const card1 = abstractFactory.renderImageSprite(this, "dress1", CARD_SCALE);
    // card1.setPosition(
    //   CANVAS_SIZE.WIDTH / 2 - (card1.width * card1.scale) / 2 + 90,
    //   410
    // );

    // const card2 = abstractFactory.renderImageSprite(this, "dress2", CARD_SCALE);
    // card2.setPosition(
    //   CANVAS_SIZE.WIDTH / 2 - (card2.width * card2.scale) / 2 - 90,
    //   410
    // );

    // const hintPointer = abstractFactory.renderImageSprite(
    //   this,
    //   "hintPointer",
    //   0.5
    // );
    // hintPointer.setPosition(card2.x, card2.y + 200);

    const tweenMngr = new TweenManager();

    this.tweens.add(tweenMngr.showTopText(textBg));
    this.tweens.add(tweenMngr.showTopText(topText));
    this.tweens.add(tweenMngr.zoomIn(girlShy));
    // this.tweens.add(tweenMngr.scaleFromZeroToNormal(card1));
    // this.tweens.add(tweenMngr.scaleFromZeroToNormal(card2));
  }

  #cardClicked() {
    console.log("card clicked");
  }

  update() {}
}
