import AbstractFactory from "../AbstractFactory.js";
import {
  HUMAN_SCALE,
  HINT_POINTER_SCALE,
  ANIMATION_DURATION,
  TOP_TEXTS,
} from "../constants.js";

export default class Play extends Phaser.Scene {
  constructor() {
    super("Play");
    this.choise = [0, 0, 0, 0];
    this.levelCounter = 0;
  }

  create() {
    this.input.on("gameobjectover", this.#cardHover, this);
    this.input.on("gameobjectdown", this.#cardClicked, this);

    this.abstractFactory = new AbstractFactory();
    this.tweenMngr = this.abstractFactory.createTweenManager();

    this.add.sprite(0, 0, "bg").setOrigin(0, 0);

    const { textBg, topText } = this.abstractFactory.renderTopText(this);

    this.girl = this.abstractFactory
      .renderImageXCenter(this, "girlShy", 30, HUMAN_SCALE)
      .setName("girl");

    const { card1, card2 } = this.abstractFactory.renderCards(this);

    this.hintPointer = this.abstractFactory
      .renderImage(this, "hintPointer", HINT_POINTER_SCALE)
      .setPosition(
        card1.x + (card1.width * card1.scale) / 2 - 45,
        card1.y + 200
      );

    this.progressBar = this.abstractFactory.renderProgressBar(
      this,
      textBg.y + 50,
      textBg.width * textBg.scale
    );

    this.tweens.add(
      this.tweenMngr.revealTopText([textBg, topText, this.progressBar])
    );
    this.tweens.add(this.tweenMngr.zoomInHuman(this.girl));
    this.tweens.add(this.tweenMngr.scaleFromZeroToNormal(card1));
    this.tweens.add(this.tweenMngr.scaleFromZeroToNormal(card2, ANIMATION_DURATION));
    this.tweens.add(this.tweenMngr.hintPointerShow(this.hintPointer));
  }

  /*
    ---- TODO: ----

      3. Decorate progress bar

      4. Animate progress bar

      5. Make background a little darker in the Start scene

      6. Make class for human

      7. Adaptiveness

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

    const card1 = this.children.getByName("card1");
    const card2 = this.children.getByName("card2");
    this.tweens.add(this.tweenMngr.cardChange(card1));
    this.tweens.add(this.tweenMngr.cardChange(card2));

    setTimeout(() => {
      this.progressBar.nextLevel();

      this.choise[this.levelCounter] = this.#getUsersChoice(target.name);
      levelHandler[this.levelCounter].call(this);

      this.levelCounter++;

      this.#showNextText();

      this.#restartHintPointerTween();
    }, ANIMATION_DURATION);
  }

  #firstChoiceDone() {
    this.#showNextCards("bag1", "bag2");
    this.girl.setTexture(`costume_${this.choise[0]}`);
  }

  #secondChoiceDone() {
    if (this.choise[this.levelCounter] === 1) {
      this.#showNextCards("accessory1", "accessory2");
    } else {
      this.#showNextCards("accessory1", "accessory3");
    }

    this.girl.setTexture(`costume_${this.choise[0]}_${this.choise[1]}`);
  }

  #thirdChoiceDone() {
    this.#showNextCards("location1", "location2");
    this.girl.setTexture(
      `costume_${this.choise[0]}_${this.choise[1]}_${this.choise[2]}`
    );
  }

  #fourthChoiceDone() {
    console.log("show win or end screen");

    const textBg = this.children.getByName("textBg");
    const topText = this.children.getByName("topText");
    this.tweens.add(this.tweenMngr.alphaToZero([textBg, topText]));

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
    const hintPointerShowTween = this.tweens.getTweensOf(this.hintPointer)[0];
    // hide hint pointer with a tween
    hintPointerShowTween.restart();
    hintPointerShowTween.pause();
    setTimeout(() => {
      hintPointerShowTween.resume();
      console.log("must be started");
    }, 2000);
  }

  #showNextText() {
    const oldText = this.children.getByName("topText");

    const newText = this.add.text(0, -30, TOP_TEXTS[this.levelCounter]);
    newText.setPosition(this.abstractFactory.centerX(newText), oldText.y);

    oldText.destroy();
    newText.setName("topText");

    this.tweens.add(this.tweenMngr.showTopText(newText));
  }
}
