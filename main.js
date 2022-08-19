// Start Events

// The OF The Year Date To Countdown To
// 1000 milliseconds = 1 Second

let countDownDate = new Date("Dec 31, 2022, 23:59:59").getTime();

console.log(countDownDate);

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Defference Between Now And Countdown Date
  let dateDeff = countDownDate - dateNow;

  // Get Time Units
  // let days = Math.floor(dateDeff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDeff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDeff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDeff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDeff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDeff < 0) {
    clearInterval(counter);
  }
}, 1000);

// End Events

// Animate width on scrolling

let progressSpans = document.querySelectorAll(".the-progress span");
let section = document.querySelector(".our-skills");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 200) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};
