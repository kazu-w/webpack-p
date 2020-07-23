import Swiper from "swiper";
import "swiper/swiper-bundle.css";
export class Slider {
  readonly selector: string;
  public options: {};
  init: void;
  constructor(selector: string, options: {}) {
    this.selector = selector;
    this.options = options;
    this.init = window.addEventListener(
      "DOMContentLoaded",
      this._init.bind(this)
    );
  }

  _init() {
    if (this.selector) {
      new Swiper(this.selector, this.options);
      console.log("swiper!!!!");
    }
  }
}
