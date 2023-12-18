let myBtn = document.querySelector(".myBtn");
let input = document.querySelector(".input");

myBtn.addEventListener("click", function () {
  showPassword();
});

document.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    showPassword();
  }
});

function showPassword() {
  if (input.type === "password") {
    input.type = "text";
    myBtn.innerText = "Hide";
  } else {
    input.type = "password";
    myBtn.innerText = "Show";
  }
}