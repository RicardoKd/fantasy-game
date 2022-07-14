import {
  SPEECH_SCALE,
  ANIMATION_DURATION,
  CANVAS_SIZE,
  MAIN_EASE_FUNCTION,
} from "../constants.js";

export default class TweenManager {
  humanEnterScene(gameObject, directionOfComing = "left") {
    let a = -700;
    if (directionOfComing === "right") {
      a = 700;
    }

    return {
      targets: gameObject,
      duration: ANIMATION_DURATION,
      x: {
        from: gameObject.x + a,
        to: gameObject.x,
      },
      alpha: {
        duration: 1,
        value: 1,
      },
      ease: MAIN_EASE_FUNCTION,
    };
  }

  humanLeaveScene(gameObject) {
    return {
      targets: gameObject,
      duration: ANIMATION_DURATION,
      x: "+=700",
      ease: MAIN_EASE_FUNCTION,
    };
  }

  scaleToZero(gameObject) {
    return {
      targets: gameObject,
      duration: ANIMATION_DURATION,
      scale: 0,
      ease: MAIN_EASE_FUNCTION,
    };
  }

  alphaToZero(gameObject) {
    return {
      targets: gameObject,
      duration: ANIMATION_DURATION,
      alpha: 0,
      ease: MAIN_EASE_FUNCTION,
    };
  }

  AlphaTo(gameObject, alpha) {
    return {
      targets: gameObject,
      duration: ANIMATION_DURATION,
      alpha: alpha,
      ease: MAIN_EASE_FUNCTION,
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
      ease: MAIN_EASE_FUNCTION,
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
      ease: MAIN_EASE_FUNCTION,
    };
  }

  revealTopText(gameObject) {
    return {
      targets: gameObject,
      duration: ANIMATION_DURATION,
      y: "+=60",
      ease: MAIN_EASE_FUNCTION,
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
      ease: MAIN_EASE_FUNCTION,
    };
  }

  zoomInHuman(gameObject) {
    return {
      targets: gameObject,
      duration: ANIMATION_DURATION,
      scale: "+=0.05",
      x: "-=15",
      y: "+=40",
      ease: MAIN_EASE_FUNCTION,
    };
  }

  changeCard(gameObject) {
    const { x, y } = this.#getGameObjectCenter(gameObject);

    return {
      targets: gameObject,
      ease: MAIN_EASE_FUNCTION.InOut,
      yoyo: true,
      duration: ANIMATION_DURATION,
      scale: 0,
      x: x,
      y: y,
    };
  }

  showHintPointer(gameObject) {
    return {
      targets: gameObject,
      ease: MAIN_EASE_FUNCTION.InOut,
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

  hideHintPointer(gameObject, x, y) {
    return {
      targets: gameObject,
      ease: MAIN_EASE_FUNCTION,
      duration: ANIMATION_DURATION,
      x: x,
      y: y,
    };
  }

  #getGameObjectCenter(gameObject) {
    return {
      x: gameObject.x + (gameObject.width * gameObject.scale) / 2,
      y: gameObject.y + (gameObject.height * gameObject.scale) / 2,
    };
  }
}
