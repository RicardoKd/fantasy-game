import man from "../assets/man.png";
import manSmile from "../assets/man-smile.png";
import manAngry from "../assets/man-angry.png";
import manSurprized from "../assets/man-suprized.png";
import girl from "../assets/girl-default.png";
import girlShy from "../assets/girl-shy.png";
import girlSurprized from "../assets/girl-surprized.png";
import hintPointer from "../assets/hint-pointer.png";
import textBg from "../assets/top-text-bg.png";

// speeches
import manSpeech1 from "../assets/speeches/man-speech-1.png";
import manSpeech2 from "../assets/speeches/man-speech-2.png";
import manSpeech3 from "../assets/speeches/man-speech-3.png";
import girlSpeech from "../assets/speeches/girl-speech.png";

// cards
import dress1 from "../assets/cards/dress-1.png";
import dress2 from "../assets/cards/dress-2.png";
import bag1 from "../assets/cards/bag-1.png";
import bag2 from "../assets/cards/bag-2.png";
import accessory1 from "../assets/cards/accessory-1.png";
import accessory2 from "../assets/cards/accessory-2.png";
import accessory3 from "../assets/cards/accessory-3.png";
import location1 from "../assets/cards/location-1.png";
import location2 from "../assets/cards/location-2.png";

// costumes
import costume_1 from "../assets/costumes/girl-1.png";
import costume_1_1 from "../assets/costumes/girl-1-1.png";
import costume_1_2 from "../assets/costumes/girl-1-2.png";
import costume_1_1_1 from "../assets/costumes/girl-1-1-1.png";
import costume_1_1_2 from "../assets/costumes/girl-1-1-2.png";
import costume_1_2_1 from "../assets/costumes/girl-1-2-1.png";
import costume_1_2_2 from "../assets/costumes/girl-1-2-2.png";
import costume_2 from "../assets/costumes/girl-2.png";
import costume_2_1 from "../assets/costumes/girl-2-1.png";
import costume_2_2 from "../assets/costumes/girl-2-2.png";
import costume_2_1_1 from "../assets/costumes/girl-2-1-1.png";
import costume_2_1_2 from "../assets/costumes/girl-2-1-2.png";
import costume_2_2_1 from "../assets/costumes/girl-2-2-1.png";
import costume_2_2_2 from "../assets/costumes/girl-2-2-2.png";
import costume_2_1_1_lose from "../assets/costumes/girl-2-1-1-lose.png";
import costume_2_1_2_lose from "../assets/costumes/girl-2-1-2-lose.png";
import costume_2_2_1_lose from "../assets/costumes/girl-2-2-1-lose.png";
import costume_2_2_2_lose from "../assets/costumes/girl-2-2-2-lose.png";

// locations
import bgLocation1 from "../assets/location-1.png";
import bgLocation2 from "../assets/location-2.png";

// buttons
import winButton from "../assets/win-button.png";
import loseButton from "../assets/lose-button.png";

import { BG_POSITION } from "../constants.js";
export default class Preload extends Phaser.Scene {
  constructor() {
    super("Preload");
  }

  preload() {
    this.add.sprite(0, 0, "bg").setPosition(BG_POSITION.X, BG_POSITION.Y);

    this.load.image("man", man);
    this.load.image("manSmile", manSmile);
    this.load.image("manAngry", manAngry);
    this.load.image("manSurprized", manSurprized);
    this.load.image("girl", girl);
    this.load.image("girlShy", girlShy);
    this.load.image("girlSurprized", girlSurprized);
    this.load.image("hintPointer", hintPointer);
    this.load.image("textBg", textBg);

    this.load.image("manSpeech1", manSpeech1);
    this.load.image("manSpeech2", manSpeech2);
    this.load.image("manSpeech3", manSpeech3);
    this.load.image("girlSpeech", girlSpeech);

    this.load.image("dress1", dress1);
    this.load.image("dress2", dress2);
    this.load.image("bag1", bag1);
    this.load.image("bag2", bag2);
    this.load.image("accessory1", accessory1);
    this.load.image("accessory2", accessory2);
    this.load.image("accessory3", accessory3);
    this.load.image("location1", location1);
    this.load.image("location2", location2);

    this.load.image("costume_1", costume_1);
    this.load.image("costume_1_1", costume_1_1);
    this.load.image("costume_1_2", costume_1_2);
    this.load.image("costume_1_1_1", costume_1_1_1);
    this.load.image("costume_1_1_2", costume_1_1_2);
    this.load.image("costume_1_2_1", costume_1_2_1);
    this.load.image("costume_1_2_2", costume_1_2_2);
    this.load.image("costume_2", costume_2);
    this.load.image("costume_2_1", costume_2_1);
    this.load.image("costume_2_2", costume_2_2);
    this.load.image("costume_2_1_1", costume_2_1_1);
    this.load.image("costume_2_1_2", costume_2_1_2);
    this.load.image("costume_2_2_1", costume_2_2_1);
    this.load.image("costume_2_2_2", costume_2_2_2);
    this.load.image("costume_2_1_1_lose", costume_2_1_1_lose);
    this.load.image("costume_2_1_2_lose", costume_2_1_2_lose);
    this.load.image("costume_2_2_1_lose", costume_2_2_1_lose);
    this.load.image("costume_2_2_2_lose", costume_2_2_2_lose);

    this.load.image("bgLocation1", bgLocation1);
    this.load.image("bgLocation2", bgLocation2);

    this.load.image("winButton", winButton);
    this.load.image("loseButton", loseButton);
  }

  create() {
    this.scene.start("Start");
  }
}
