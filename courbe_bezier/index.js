const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// arc()
ctx.fillStyle = "lightblue";

ctx.beginPath();
ctx.arc(50, 50, 30, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(150, 50, 30, 0, Math.PI);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(250, 50, 30, Math.PI, 2 * Math.PI);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(350, 50, 30, Math.PI / 2, (3 / 2) * Math.PI);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(450, 50, 30, (3 / 2) * Math.PI, Math.PI / 2);
ctx.stroke();
ctx.fill();

// arcTo()
ctx.beginPath();
ctx.moveTo(200, 220);
ctx.lineTo(200, 330);
ctx.lineTo(50, 220);
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "green";
ctx.arc(200, 220, 5, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "blue";
ctx.arc(200, 330, 5, 0, 2 * Math.PI);
ctx.arc(50, 220, 5, 0, 2 * Math.PI);
ctx.fill();

let radius = 50;
function drawArcTo() {
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.moveTo(200, 220);
  ctx.arcTo(200, 330, 50, 220, radius);
  ctx.stroke();
}
drawArcTo();

const slider = document.getElementById("slider");
const value = document.getElementById("value");

slider.oninput = function() {
  radius = this.value;
  value.innerHTML = this.value;
  drawArcTo();
};