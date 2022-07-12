import { CANVAS_SIZE, CARD_SCALE, TOP_TEXTS } from "./constants.js";

export default class AbstractFactory {
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
    const card1 = this.renderImage(scene, "dress1", CARD_SCALE);
    card1
      .setPosition(CANVAS_SIZE.WIDTH / 2 - card1.width * card1.scale - 10, 410)
      .setName("card1")
      .setInteractive();

    const card2 = this.renderImage(scene, "dress2", CARD_SCALE);
    card2
      .setPosition(CANVAS_SIZE.WIDTH / 2 + 10, 410)
      .setName("card2")
      .setInteractive();

    return { card1, card2 };
  }

  centerX(gameObject) {
    return CANVAS_SIZE.WIDTH / 2 - (gameObject.width * gameObject.scale) / 2;
  }
}
