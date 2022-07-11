import TweenManager from "../animations/TweenManager.js";
import AbstractFactory from "../AbstractFactory.js";
import { CANVAS_SIZE, CARD_SCALE } from "../constants.js";

export default class Play extends Phaser.Scene {
  constructor() {
    super("Play");
    this.choise = [0, 0, 0, 0];
    this.levelCounter = 0;
  }

  async create() {
    this.input.on("gameobjectdown", this.#cardClicked, this);

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

    const girl = abstractFactory.renderImageSprite(this, "girlShy", 0.5);
    girl.setPosition(CANVAS_SIZE.WIDTH / 2 - (girl.width * girl.scale) / 2, 30);
    girl.setName("girl");

    const card1 = abstractFactory.renderImageSprite(this, "dress1", CARD_SCALE);
    card1.setPosition(
      CANVAS_SIZE.WIDTH / 2 - card1.width * card1.scale - 10,
      410
    );
    card1.setName("card1");
    card1.setInteractive();

    const card2 = abstractFactory.renderImageSprite(this, "dress2", CARD_SCALE);
    card2.setPosition(CANVAS_SIZE.WIDTH / 2 + 10, 410);
    card2.setName("card2");
    card2.setInteractive();

    const hintPointer = abstractFactory.renderImageSprite(
      this,
      "hintPointer",
      0.7
    );
    hintPointer.setPosition(
      card1.x + (card1.width * card1.scale) / 2 - 45,
      card1.y + 200
    );

    const tweenMngr = new TweenManager();

    this.tweens.add(tweenMngr.showTopText(textBg));
    this.tweens.add(tweenMngr.showTopText(topText));
    this.tweens.add(tweenMngr.zoomIn(girl));
    this.tweens.add(tweenMngr.scaleFromZeroToNormal(card1));
    this.tweens.add(tweenMngr.scaleFromZeroToNormal(card2));
    this.tweens.add(tweenMngr.hintPointerShow(hintPointer));
  }

  #cardClicked(pointer, target) {
    const levelHandler = [
      this.#firstChoiceDone,
      this.#secondChoiceDone,
      this.#thirdChoiceDone,
      this.#fourthChoiceDone,
    ];

    this.choise[this.levelCounter] = this.#getUsersChoice(target.name);
    levelHandler[this.levelCounter].call(this);

    this.levelCounter++;
  }

  #firstChoiceDone() {
    this.#showNextCards("bag1", "bag2");

    const girl = this.children.getByName("girl");
    girl.setTexture(`costume_${this.choise[0]}`);
    /*
    ---- TODO: ----

      1. Stop hintPointerShow() tween

      2. Fix position of hint pointer

      3. Hide hint pointer:

        1) Get x-coordinate of card1
        2) Start hintPointerHide tween whereever the hint pointer is

      4. Change text at Top

      5. Show progress

    */
  }

  #secondChoiceDone() {
    if (this.choise[this.levelCounter] === 1) {
      this.#showNextCards("accessory1", "accessory2");
    } else {
      this.#showNextCards("accessory1", "accessory3");
    }

    const girl = this.children.getByName("girl");
    girl.setTexture(`costume_${this.choise[0]}_${this.choise[1]}`);
  }

  #thirdChoiceDone() {
    this.#showNextCards("location1", "location2");

    const girl = this.children.getByName("girl");
    girl.setTexture(
      `costume_${this.choise[0]}_${this.choise[1]}_${this.choise[2]}`
    );
  }

  #fourthChoiceDone() {
    console.log("show win or end screen");
  }

  #showNextCards(texture1, texture2) {
    let card1 = this.children.getByName("card1");
    let card2 = this.children.getByName("card2");
    card1.setTexture(texture1);
    card2.setTexture(texture2);
  }

  #getUsersChoice(cardName) {
    let usersChoice;

    if (cardName.charAt(cardName.length - 1) == 1) {
      usersChoice = 1;
    } else {
      usersChoice = 2;
    }
    return usersChoice;
  }
}
