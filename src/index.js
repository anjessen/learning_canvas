import "./style.css";
import tile from "./images-canvas/tile.png";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(100, 75);
ctx.lineTo(200, 100);
ctx.lineTo(200, 50);
ctx.closePath();
ctx.stroke();


ctx.beginPath();
for (let i = 0; i < 50; i++) {
  if (i % 2 === 0) {
    ctx.moveTo(10 * i, 200);
  } else {
    ctx.lineTo(10 * i, 200);
  }
}
ctx.stroke();