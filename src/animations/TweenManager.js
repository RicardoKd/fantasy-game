import { SPEECH_SCALE, ANIMATION_DURATION, CANVAS_SIZE } from "../constants.js";

export default class TweenManager {
  humanEnterScene(gameObject) {
    return {
      targets: gameObject,
      duration: ANIMATION_DURATION,
      x: {
        from: gameObject.x - 700,
        to: gameObject.x,
      },
      alpha: {
        duration: 1,
        value: 1,
      },
      ease: Phaser.Math.Easing.Cubic,
    };
  }

  humanLeaveScene(gameObject) {
    return {
      targets: gameObject,
      duration: ANIMATION_DURATION,
      x: "+=700",
      ease: Phaser.Math.Easing.Cubic,
    };
  }

  scaleToZero(gameObject) {
    return {
      targets: gameObject,
      duration: ANIMATION_DURATION,
      scale: 0,
      ease: Phaser.Math.Easing.Cubic,
    };
  }

  alphaToZero(gameObject) {
    return {
      targets: gameObject,
      duration: ANIMATION_DURATION,
      alpha: 0,
      ease: Phaser.Math.Easing.Cubic,
    };
  }

  scaleFromZeroToNormal(gameObject, delay = 0) {
    const { x, y } = this.#getGameObjectCenter(gameObject);

    return {
      targets: gameObject,
      duration: ANIMATION_DURATION,
      delay: delay,
      scale: {
        from: 0,
        to: gameObject.scale,
      },
      x: {
        from: x,
        to: gameObject.x,
      },
      y: {
        from: y,
        to: gameObject.y,
      },
      alpha: {
        duration: 1,
        value: 1,
      },
      ease: Phaser.Math.Easing.Cubic,
    };
  }

  showSpeech(gameObject) {
    gameObject.setAlpha(1);
    return {
      targets: gameObject,
      duration: ANIMATION_DURATION,
      scale: {
        from: 0,
        to: SPEECH_SCALE,
      },
      ease: Phaser.Math.Easing.Cubic,
    };
  }

  revealTopText(gameObject) {
    return {
      targets: gameObject,
      duration: ANIMATION_DURATION,
      y: "+=60",
      ease: Phaser.Math.Easing.Cubic,
    };
  }

  showTopText(gameObject) {
    return {
      targets: gameObject,
      duration: 300,
      scale: {
        from: 0,
        to: gameObject.scale,
      },
      x: {
        from: CANVAS_SIZE.WIDTH / 2,
        to: CANVAS_SIZE.WIDTH / 2 - gameObject.width / 2,
      },
      ease: Phaser.Math.Easing.Cubic,
    };
  }

  zoomInHuman(gameObject) {
    return {
      targets: gameObject,
      duration: ANIMATION_DURATION,
      scale: "+=0.05",
      x: "-=15",
      y: "+=40",
      ease: Phaser.Math.Easing.Cubic,
    };
  }

  cardChange(gameObject) {
    const { x, y } = this.#getGameObjectCenter(gameObject);

    return {
      targets: gameObject,
      ease: Phaser.Math.Easing.Cubic.InOut,
      yoyo: true,
      duration: ANIMATION_DURATION,
      scale: 0,
      x: x,
      y: y,
    };
  }

  hintPointerShow(gameObject) {
    return {
      targets: gameObject,
      ease: Phaser.Math.Easing.Cubic.InOut,
      y: {
        value: "-=150",
        duration: ANIMATION_DURATION,
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

  #getGameObjectCenter(gameObject) {
    return {
      x: gameObject.x + (gameObject.width * gameObject.scale) / 2,
      y: gameObject.y + (gameObject.height * gameObject.scale) / 2,
    };
  }
}
