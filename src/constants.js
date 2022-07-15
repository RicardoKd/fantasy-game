const CANVAS_SIZE = {
  WIDTH: window.innerWidth > window.innerHeight ? 1000 : 400,
  HEIGHT: 600,
};

const BG_POSITION = {
  X: CANVAS_SIZE.WIDTH / 2,
  Y: CANVAS_SIZE.HEIGHT / 2,
};

const QUANTITY_OF_LEVELS = 4;

const HUMAN_SCALE = 0.5;
const CARD_SCALE = 0.6;
const SPEECH_SCALE = 0.35;
const HINT_POINTER_SCALE = 0.7;

const ANIMATION_DURATION = 400;

const TOP_TEXTS = [
  "Choose your dress",
  "Choose your bag",
  "Choose your accessory",
  "Choose your place",
];

const TRACK_COLOR = 0xa9a9a9;
const BAR_COLOR = 0xf09080;
const LINE_THICKNESS = 10;

const MAIN_EASE_FUNCTION = Phaser.Math.Easing.Cubic;

export {
  CANVAS_SIZE,
  BG_POSITION,
  QUANTITY_OF_LEVELS,
  HUMAN_SCALE,
  CARD_SCALE,
  SPEECH_SCALE,
  HINT_POINTER_SCALE,
  ANIMATION_DURATION,
  TOP_TEXTS,
  TRACK_COLOR,
  BAR_COLOR,
  LINE_THICKNESS,
  MAIN_EASE_FUNCTION,
};
