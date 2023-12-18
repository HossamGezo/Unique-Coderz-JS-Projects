let image = document.querySelector("img");
let cnt = 2;
setInterval(function () {
  image.src = `assets/images/show-${cnt}.png`;
  ++cnt === 8 ? cnt = 1 : cnt; 
}, 2000);