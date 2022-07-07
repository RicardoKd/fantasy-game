export default class AbstractFactory {
  constructor() {}

  createImageSprite(scene, x, y, texture, scale = 1, alpha = 1) {
    const sprite = scene.add.sprite(x, y, texture);
    sprite.setOrigin(0, 0);
    sprite.setAlpha(alpha);
    // sprite.setPosition(x, y);
    // sprite.setName("man1Sprite");
    sprite.setScale(scale);
    return sprite;
  }
}
