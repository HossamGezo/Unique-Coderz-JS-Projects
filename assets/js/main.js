let myBtn = document.querySelector(".myBtn");
let input = document.querySelector(".input");
let messages = document.querySelector(".messages");
let cnt = 1;

input.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    inputAction();
  }
});

myBtn.addEventListener("click", function () {
  inputAction();
});

function inputAction() {
  let value = input.value.trim();
  if (value) {
    messages.innerHTML += `
      <p style="text-transform: capitalize;">${cnt++} : ${value}</p>
    `;
    console.log(Number(value));
    input.value = "";
    input.focus();
  }
}