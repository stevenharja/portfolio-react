import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./container/App/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// Front End Code
const logoDrop = document.querySelector(".LogoDrop");
let createSquare = (x = null, y = null) => {
  if (logoDrop) {
    const colors = ["#279D59", "#1E6163", "#FFFFFF", "#D82F35"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const square = document.createElement("span");
    square.classList.add("bg-circle");
    let size = Math.random() * 50;

    square.style.backgroundColor = color;
    square.style.width = 20 + size + "px";
    square.style.height = 20 + size + "px";
    if (x && y) {
      square.style.left = x - logoDrop.getBoundingClientRect().left + "px";
      square.style.top = y - logoDrop.getBoundingClientRect().top + "px";
    } else {
      square.style.left = Math.random() * logoDrop.offsetWidth + "px";
      square.style.top = "-100px";
    }
    logoDrop.appendChild(square);

    setTimeout(() => {
      square.remove();
    }, 10000);
  }
};
setInterval(createSquare, 300);

if (logoDrop) {
  logoDrop.addEventListener("mousedown", (e) => {
    createSquare(e.clientX, e.clientY);
  });
}
