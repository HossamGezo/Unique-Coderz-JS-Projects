let myBtn = document.querySelector(".myBtn");

myBtn.addEventListener("click", changeBodyColor);
document.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    changeBodyColor();
  }
});

function changeBodyColor() {
  document.querySelector("body").style.cssText = `background-color: #${Math.random().toString(16).slice(2,8)}`;
}