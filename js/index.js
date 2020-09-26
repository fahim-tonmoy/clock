setInterval(setClock, 1000);

// const hourHand = document.querySelector("[data-hour-hand]");
// const minuteHand = document.querySelector("[data-minute-hand]");
// const secondHand = document.querySelector("[data-second-hand]");

function setClock() {
  const currentDate = new Date();
  // console.log(currentDate);
  const secondRatio = currentDate.getSeconds() / 60;
  // console.log(secondRatio);
  const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
  // console.log(minuteRatio);
  const hourRatio = (minuteRatio + currentDate.getHours()) / 12;
  // console.log(hourRatio);

  setRotation(secondHand, secondRatio);
  setRotation(minuteHand, minuteRatio);
  setRotation(hourHand, hourRatio);
}

const hourHand = document.getElementById("hourHand");
const minuteHand = document.getElementById("minuteHand");
const secondHand = document.getElementById("secondHand");

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotating", rotationRatio * 360);
}

setClock();
