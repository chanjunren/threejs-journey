import Sizes from "./utils/Sizes";

export default class Experience {
  constructor(canvas) {
    this.canvas = canvas;
    this.sizes = new Sizes();
    this.sizes.on("resize", () => {
      console.log("A resize occurred");
    });
  }
}
