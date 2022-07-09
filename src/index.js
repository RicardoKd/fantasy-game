import Phaser from "phaser";
import Boot from "./scenes/Boot.js";
import Preload from "./scenes/Preload.js";
import Start from "./scenes/Start.js";
import Play from "./scenes/Play.js";
import { CANVAS_SIZE } from "./constants.js";
import css from "./css/main.css";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: CANVAS_SIZE.WIDTH,
  height: CANVAS_SIZE.HEIGHT,
  scene: [Boot, Preload, Start, Play],
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};

new Phaser.Game(config);
