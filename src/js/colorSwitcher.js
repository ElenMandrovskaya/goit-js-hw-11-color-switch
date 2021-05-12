import dataColors from './dataColors.js';
// console.log(dataColors)

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
let intervalId = null;
const PROMPT_DELAY = 1000;

function onStartBtn() {
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = dataColors[randomIntegerFromInterval(0, dataColors.length - 1)]
  }, PROMPT_DELAY);
  startBtn.disabled = true;
  startBtn.style.opacity = 0.6;
};

function onStopBtn() {
  clearInterval(intervalId);
  startBtn.disabled = false;
  startBtn.style.opacity = 1;
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

startBtn.addEventListener('click', onStartBtn);
stopBtn.addEventListener('click', onStopBtn);