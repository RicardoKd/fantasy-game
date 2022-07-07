import { REPLICA_SCALE } from "../constants.js";

export default class TweenManager {
  cconstructor() {}

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

  scaletoZero(gameObject) {
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
}
