import TweenManager from "./animations/TweenManager.js";
import { CANVAS_SIZE, CARD_SCALE, TOP_TEXTS } from "./constants.js";
import ProgressBar from "./gameObjects/ProgressBar.js";
export default class AbstractFactory {
  createTweenManager() {
    return new TweenManager();
  }

  renderImage(scene, texture, scale = 1, alpha = 1) {
    const image = scene.add.sprite(0, 0, texture);
    image.setOrigin(0, 0);
    image.setAlpha(alpha);
    image.setName(texture);
    image.setScale(scale);

    return image;
  }

  renderImageXCenter(scene, texture, y, scale = 1, alpha = 1) {
    const image = this.renderImage(scene, texture, scale, alpha);
    image.setPosition(this.centerX(image), y);

    return image;
  }

  renderTopText(scene) {
    const textBg = this.renderImage(scene, "textBg", 0.35);
    textBg.setPosition(this.centerX(textBg), -30).setName("textBg");

    const topText = scene.add.text(0, 0, TOP_TEXTS[0]);
    topText
      .setPosition(
        this.centerX(topText),
        textBg.y + (textBg.height * textBg.scale) / 2 - topText.height / 2
      )
      .setName("topText");

    return { textBg, topText };
  }

  renderCards(scene) {
    const card1 = this.renderImage(scene, "dress1", CARD_SCALE, 0);
    card1
      .setPosition(CANVAS_SIZE.WIDTH / 2 - card1.width * card1.scale - 10, 410)
      .setName("card1")
      .setInteractive();

    const card2 = this.renderImage(scene, "dress2", CARD_SCALE, 0);
    card2
      .setPosition(CANVAS_SIZE.WIDTH / 2 + 10, 410)
      .setName("card2")
      .setInteractive();

    return { card1, card2 };
  }

  renderProgressBar(scene, y, length) {
    return new ProgressBar(scene, y, length);
  }

  centerX({ width, scale }) {
    return CANVAS_SIZE.WIDTH / 2 - (width * scale) / 2;
  }
}
