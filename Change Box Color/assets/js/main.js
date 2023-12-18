let myBtn = document.querySelector(".myBtn");
let box = document.querySelector(".box");
let colors = ["#085C94", "#0B9FE5", "#129A67", "#ffd700", "#FF0000", "#D2D2D2", "#F3F3F3", "#000000"];

myBtn.addEventListener("click", function () {
  changeColor();
});

document.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    changeColor();
  }
});

function changeColor() {
  box.style.cssText = `background-color: ${colors[Math.trunc(Math.random() * colors.length)]}`;
}