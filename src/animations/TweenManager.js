import { REPLICA_SCALE } from "../constants.js";

export default class TweenManager {
  constructor() {}

  humanEnterScene(gameObject) {
    return {
      targets: [gameObject],
      duration: 400,
      x: {
        getStart: () => gameObject.x - 700,
        getEnd: () => gameObject.x,
      },
      ease: Phaser.Math.Easing.Cubic,
    };
  }

  humanLeaveScene(gameObject) {
    return {
      targets: [gameObject],
      duration: 400,
      x: {
        getStart: () => gameObject.x,
        getEnd: () => gameObject.x + 700,
      },
      ease: Phaser.Math.Easing.Cubic,
    };
  }

  scaleToZero(gameObject) {
    return {
      targets: [gameObject],
      duration: 400,
      scale: {
        getStart: () => gameObject.scale,
        getEnd: () => 0,
      },
      ease: Phaser.Math.Easing.Cubic,
    };
  }

  scaleFromZeroToNormal(gameObject) {
    gameObject.setAlpha(1);
    return {
      targets: [gameObject],
      duration: 400,
      scale: {
        getStart: () => 0,
        getEnd: () => gameObject.scale,
      },
      ease: Phaser.Math.Easing.Cubic,
    };
  }

  showReplica(gameObject) {
    gameObject.setAlpha(1);
    return {
      targets: [gameObject],
      duration: 400,
      scale: {
        getStart: () => 0,
        getEnd: () => REPLICA_SCALE,
      },
      ease: Phaser.Math.Easing.Cubic,
    };
  }

  showTopText(gameObject) {
    return {
      targets: [gameObject],
      duration: 400,
      y: {
        getStart: () => gameObject.y,
        getEnd: () => gameObject.y + 60,
      },
      ease: Phaser.Math.Easing.Cubic,
    };
  }

  zoomIn(gameObject) {
    return {
      targets: [gameObject],
      duration: 400,
      scale: {
        getStart: () => gameObject.scale,
        getEnd: () => gameObject.scale + 0.05,
      },
      x: {
        getStart: () => gameObject.x,
        getEnd: () => gameObject.x - 15,
      },
      y: {
        getStart: () => gameObject.y,
        getEnd: () => gameObject.y + 40,
      },
      ease: Phaser.Math.Easing.Cubic,
    };
  }

  hintPointer(gameObject) {
    return {
      targets: [gameObject],
      duration: 400,
      scale: {
        getStart: () => gameObject.scale,
        getEnd: () => gameObject.scale + 0.05,
      },
      x: {
        getStart: () => gameObject.x,
        getEnd: () => gameObject.x - 15,
      },
      y: {
        getStart: () => gameObject.y,
        getEnd: () => gameObject.y + 40,
      },
      ease: Phaser.Math.Easing.Cubic,
    };
  }
}
