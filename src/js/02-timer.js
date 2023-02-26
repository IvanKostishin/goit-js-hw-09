import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const dataTime = document.querySelector('input#datetime-picker');
const startButton = document.querySelector('[data-start]');
const daysValue = document.querySelector('span[data-days]');
const hoursValue = document.querySelector('span[data-hours]');
const minutesValue = document.querySelector('span[data-minutes]');
const secondsValue = document.querySelector('span[data-seconds]');

startButton.disabled = true;
startButton.addEventListener('click', countdown);
let selectedDates = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selected) {
    startButton.disabled = false;
    selectedDates = selected;
  },
};

flatpickr(dataTime, options);

function countdown() {
  const dateNow = new Date();
  if (dateNow.getTime() >= selectedDates[0].getTime()) {
    Notiflix.Notify.failure('Please choose a date in the future');
  } else {
    startButton.disabled = true;
    const timer = setInterval(() => {
      const ms = selectedDates[0].getTime() - new Date().getTime();
      const msRound = Math.floor(ms / 1000);
      if (msRound === 0) {
        clearInterval(timer);
      }

      convertMs(ms);
    }, 1000);
  }
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  daysValue.textContent = addLeadingZero(Math.floor(ms / day));
  hoursValue.textContent = addLeadingZero(Math.floor((ms % day) / hour));
  minutesValue.textContent = addLeadingZero(
    Math.floor(((ms % day) % hour) / minute)
  );
  secondsValue.textContent = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}