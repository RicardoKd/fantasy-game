import Phaser from "phaser";
import Play from "./Play.js";
import Intro from "./Intro.js";
import { CANVAS_SIZE } from "./constants.js";
import css from "./css/main.css";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: CANVAS_SIZE.WIDTH,
  height: CANVAS_SIZE.HEIGHT,
  scene: Intro,
  autoCenter: Phaser.Scale.CENTER_BOTH,
};

new Phaser.Game(config);
