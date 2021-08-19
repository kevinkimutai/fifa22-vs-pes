import $ from "jquery";
import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import styles from "../css/style.css";

const header = document.querySelector(".header");
const left = document.querySelector(".split-left");
const right = document.querySelector(".split-right");

left.addEventListener("mouseenter", () => header.classList.add("slide-left"));
left.addEventListener("mouseleave", () =>
  header.classList.remove("slide-left")
);

right.addEventListener("mouseenter", () => header.classList.add("slide-right"));
right.addEventListener("mouseleave", () =>
  header.classList.remove("slide-right")
);

if (module.hot) {
  module.hot.accept(function (err) {
    console.log(err);
  });
}
