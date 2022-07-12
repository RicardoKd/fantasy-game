import { SPEECH_SPRITE_SCALE } from "../constants.js";

export default class TweenManager {
  constructor() {}

  humanEnterScene(gameObject) {
    return {
      targets: gameObject,
      duration: 400,
      x: {
        from: gameObject.x - 700,
        to: gameObject.x,
      },
      ease: Phaser.Math.Easing.Cubic,
    };
  }

  humanLeaveScene(gameObject) {
    return {
      targets: gameObject,
      duration: 400,
      x: "+=700",
      ease: Phaser.Math.Easing.Cubic,
    };
  }

  scaleToZero(gameObject) {
    return {
      targets: gameObject,
      duration: 400,
      scale: 0,
      ease: Phaser.Math.Easing.Cubic,
    };
  }

  scaleFromZeroToNormal(gameObject) {
    return {
      targets: gameObject,
      duration: 400,
      scale: {
        from: 0,
        to: gameObject.scale,
      },
      ease: Phaser.Math.Easing.Cubic,
    };
  }

  showSpeech(gameObject) {
    gameObject.setAlpha(1);
    return {
      targets: gameObject,
      duration: 400,
      scale: {
        from: 0,
        to: SPEECH_SPRITE_SCALE,
      },
      ease: Phaser.Math.Easing.Cubic,
    };
  }

  showTopText(gameObject) {
    return {
      targets: gameObject,
      duration: 400,
      y: "+=60",
      ease: Phaser.Math.Easing.Cubic,
    };
  }

  hideTopText(gameObject) {
    return {
      targets: gameObject,
      duration: 400,
      alpha: 0,
      ease: Phaser.Math.Easing.Cubic,
    };
  }

  zoomIn(gameObject) {
    return {
      targets: gameObject,
      duration: 400,
      scale: "+=0.05",
      x: "-=15",
      y: "+=40",
      ease: Phaser.Math.Easing.Cubic,
    };
  }

  hintPointerShow(gameObject) {
    return {
      targets: gameObject,
      ease: Phaser.Math.Easing.Cubic.InOut,
      y: {
        value: "-=150",
        duration: 400,
      },
      x: {
        delay: 400,
        value: "+=180",
        hold: 400,
        yoyo: true,
        repeat: -1,
      },
    };
  }
}
