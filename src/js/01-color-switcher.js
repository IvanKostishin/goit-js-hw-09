function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  setTimeout(() => {
    console.log('change color');
  }, delay);
}

const refs = {
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
};

refs.start.addEventListener('click', colorChange);
refs.stop.addEventListener('click', ClearColorChange);
const delay = 1000;
refs.start.disabled = false;

function colorChange() {
  document.body.style.background = getRandomHexColor();
  refs.start.disabled = true;
  refs.stop.disabled = false;
  intervalColor = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, 1000);
}

function ClearColorChange() {
  refs.stop.disabled = true;
  refs.start.disabled = false;
  clearInterval(intervalColor);
}
