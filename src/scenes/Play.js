import AbstractFactory from "../AbstractFactory.js";
import { HUMAN_SCALE, HINT_POINTER_SCALE, TOP_TEXTS } from "../constants.js";

export default class Play extends Phaser.Scene {
  constructor() {
    super("Play");
    this.choise = [0, 0, 0, 0];
    this.levelCounter = 0;
  }

  create() {
    this.input.on("gameobjectover", this.#cardHover, this);
    this.input.on("gameobjectdown", this.#cardClicked, this);

    const abstractFactory = new AbstractFactory();

    this.add.sprite(0, 0, "bg").setOrigin(0, 0);

    const { textBg, topText } = abstractFactory.renderTopText(this);

    const girl = abstractFactory
      .renderImageXCenter(this, "girlShy", 30, HUMAN_SCALE)
      .setName("girl");

    const { card1, card2 } = abstractFactory.renderCards(this);

    const hintPointer = abstractFactory
      .renderImage(this, "hintPointer", HINT_POINTER_SCALE)
      .setPosition(
        card1.x + (card1.width * card1.scale) / 2 - 45,
        card1.y + 200
      );

    this.progressBar = abstractFactory.renderProgressBar(this, textBg.y + 50, 200);

    const tweenMngr = abstractFactory.createTweenManager();

    this.tweens.add(tweenMngr.revealTopText([textBg, topText]));
    this.tweens.add(tweenMngr.zoomInHuman(girl));
    this.tweens.add(tweenMngr.scaleFromZeroToNormal(card1));
    this.tweens.add(tweenMngr.scaleFromZeroToNormal(card2));
    this.tweens.add(tweenMngr.hintPointerShow(hintPointer));
  }

  /*
    ---- TODO: ----

      1. Show progress

      2. Timeout (2s) of 

      3. Card animation

  */

  #cardHover(pointer, target) {
    console.log(target);
  }

  #cardClicked(pointer, target) {
    const levelHandler = [
      this.#firstChoiceDone,
      this.#secondChoiceDone,
      this.#thirdChoiceDone,
      this.#fourthChoiceDone,
    ];

    this.progressBar.nextLevel();

    this.choise[this.levelCounter] = this.#getUsersChoice(target.name);
    levelHandler[this.levelCounter].call(this);

    this.levelCounter++;

    this.#nextText();

    this.#restartHintPointerTween();
  }

  #firstChoiceDone() {
    this.#showNextCards("bag1", "bag2");

    const girl = this.children.getByName("girl");
    girl.setTexture(`costume_${this.choise[0]}`);
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

    const textBg = this.children.getByName("textBg");
    const topText = this.children.getByName("topText");
    this.tweens.add(
      new AbstractFactory().createTweenManager().alphaToZero([textBg, topText])
    );

    // show win or lose screen
  }

  #showNextCards(texture1, texture2) {
    const card1 = this.children.getByName("card1");
    const card2 = this.children.getByName("card2");
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

  #restartHintPointerTween() {
    const hintPointer = this.children.getByName("hintPointer");
    const hintPointerShowTween = this.tweens.getTweensOf(hintPointer)[0];
    hintPointerShowTween.restart();
  }

  #nextText() {
    const abstractFactory = new AbstractFactory();
    const oldText = this.children.getByName("topText");

    const newText = this.add.text(0, -30, TOP_TEXTS[this.levelCounter]);
    newText.setPosition(abstractFactory.centerX(newText), oldText.y);

    oldText.destroy();
    newText.setName("topText");

    this.tweens.add(abstractFactory.createTweenManager().showTopText(newText));
  }
}
