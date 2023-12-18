let myClock = document.querySelector(".clock");

function clock() {
  let time = new Date;
  let hours = time.getHours() > 9 ? time.getHours() : "0" + time.getHours();
  let minutes = time.getMinutes() > 9 ? time.getMinutes() : "0" + time.getSeconds();
  let seconds = time.getSeconds() > 9 ? time.getMinutes() : "0" + time.getSeconds();
  let flag = "AM";

  if (hours === 0) {
    hours = 12;
  } else if (hours > 12) {
    hours -= 12;
    flag = "PM";
  }

  myClock.innerText = `${hours} : ${minutes} : ${seconds} ${flag}`;
}

setInterval(clock, 1000);