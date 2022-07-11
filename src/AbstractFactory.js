import { CANVAS_SIZE } from "./constants.js";

export default class AbstractFactory {
  constructor() {}

  renderImageSprite(scene, texture, scale = 1, alpha = 1) {
    const sprite = scene.add.sprite(0, 0, texture);
    sprite.setOrigin(0, 0);
    sprite.setAlpha(alpha);
    // sprite.setPosition(x, y);
    sprite.setName(texture);
    sprite.setScale(scale);

    return sprite;
  }

  // TODO: not relasied method
  createTopText(scene, texture, x, y, text) {
    const bg = this.renderImageSprite(scene, texture, 0.35);
    bg.setPosition(CANVAS_SIZE.WIDTH / 2 - (bg.width * bg.scale) / 2, -30);

    const topText = this.add.text(0, 0, text);
    topText.setPosition(
      CANVAS_SIZE.WIDTH / 2 - (topText.width * topText.scale) / 2,
      bg.y + (bg.height * bg.scale) / 2 - topText.height / 2
    );

    return { topText, bg };
  }

  // renderCards(scene) {
  //   const cards = [];

  //   CARDS.forEach((name) => {
  //     const card = this.renderImageSprite(scene, name, CARD_SCALE);
  //     card.setInteractive();
  //     const { x, y } = this.#calculateCardPosition(card);
  //     card.setPosition(x, y);
  //     cards.push(card);
  //   });

  //   return cards;
  // }

  // #calculateCardPosition(card) {
  //   let shift = -90;
  //   const cardName = card.name;

  //   if (cardName.charAt(cardName.length - 1) > 1) {
  //     shift = 90;
  //   }

  //   const x = CANVAS_SIZE.WIDTH / 2 - (card.width * card.scale) / 2 + shift;
  //   const y = CANVAS_SIZE.HEIGHT - card.height * card.scale - 20;

  //   return { x, y };
  // }
}
