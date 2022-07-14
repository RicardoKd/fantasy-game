import AbstractFactory from "../AbstractFactory.js";
import {} from "../constants.js";

export default class Lose extends Phaser.Scene {
  constructor() {
    super("Lose");
  }

  init({ choice }) {
    this.girlTextureName = `costume_${choice[0]}_${choice[1]}_${choice[2]}`;
    this.locationTextureName = `bgLocation${choice[3]}`;
  }

  create() {}
}
