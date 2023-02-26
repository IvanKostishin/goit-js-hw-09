function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
};

refs.start.addEventListener('click', colorChange);
refs.stop.addEventListener('click', ClearColorChange);
let nIntervId;
refs.stop.disabled = true;
function colorChange() {
  document.body.style.background = getRandomHexColor();
  refs.start.disabled = true;
  refs.stop.disabled = false;

   if (!nIntervId) {
    nIntervId =  setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, 1000);
  }
}

function ClearColorChange() {
  refs.stop.disabled = true;
  refs.start.disabled = false;

    clearInterval(nIntervId);
  nIntervId = null;
}