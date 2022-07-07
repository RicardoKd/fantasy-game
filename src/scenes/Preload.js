import manImg1 from "../assets/man-1.png";
import manImg2 from "../assets/man-2.png";
import girlImg1 from "../assets/girl-default.png";
import girlImg2 from "../assets/girl-surprized.png";
import manReplica from "../assets/Paul.png";
import girlReplica from "../assets/Lexy.png";
import hintPointer from "../assets/hint-pointer.png";

// accesories
import accessory1 from "../assets/accessory-1.png";
import accessory2 from "../assets/accessory-1.png";
import accessory3 from "../assets/accessory-1.png";
import bag1 from "../assets/bag-1.png";
import bag2 from "../assets/bag-2.png";

// costumes
import costume_1 from "../assets/girl-1.png";
import costume_1_1 from "../assets/girl-1-1.png";
import costume_1_2 from "../assets/girl-1-2.png";
import costume_1_1_1 from "../assets/girl-1-1-1.png";
import costume_1_1_2 from "../assets/girl-1-1-2.png";
import costume_1_2_1 from "../assets/girl-1-2-1.png";
import costume_1_2_2 from "../assets/girl-1-2-2.png";
import costume_2 from "../assets/girl-2.png";
import costume_2_1 from "../assets/girl-2-1.png";
import costume_2_2 from "../assets/girl-2-2.png";
import costume_2_1_1 from "../assets/girl-2-1-1.png";
import costume_2_1_2 from "../assets/girl-2-1-2.png";
import costume_2_2_1 from "../assets/girl-2-2-1.png";
import costume_2_2_2 from "../assets/girl-2-2-2.png";

// locations
import location1 from "../assets/location-1.png";
import location2 from "../assets/location-2.png";

export default class Preload extends Phaser.Scene {
  constructor() {
    super("Preload");
  }

  preload() {
    this.add.sprite(0, 0, "bg").setOrigin(0, 0);

    this.load.image("man1", manImg1);
    this.load.image("man2", manImg2);
    this.load.image("girl1", girlImg1);
    this.load.image("girl2", girlImg2);
    this.load.image("manReplica", manReplica);
    this.load.image("girlReplica", girlReplica);
    this.load.image("hintPointer", hintPointer);

    this.load.image("accesory1", accessory1);
    this.load.image("accesory2", accessory2);
    this.load.image("accesory3", accessory3);
    this.load.image("bag1", bag1);
    this.load.image("bag2", bag2);

    this.load.image("costume_1", costume_1);
    this.load.image("costume_1_1", costume_1_1);
    this.load.image("costume_1_2", costume_1_2);
    this.load.image("costume_1_1_1", costume_1_1_1);
    this.load.image("costume_1_1_2", costume_1_1_2);
    this.load.image("costume_1_2_1", costume_1_2_1);
    this.load.image("costume_1_2_2", costume_1_2_2);
    this.load.image("costume_2", costume_2);
    this.load.image("costume_2_1", costume_2_1);
    this.load.image("costume_2_2", costume_2_2);
    this.load.image("costume_2_1_1", costume_2_1_1);
    this.load.image("costume_2_1_2", costume_2_1_2);
    this.load.image("costume_2_2_1", costume_2_2_1);
    this.load.image("costume_2_2_2", costume_2_2_2);

    this.load.image("location1", location1);
    this.load.image("location2", location2);
  }

  create() {
    this.scene.start("Start");
  }
}
