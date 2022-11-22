const refs = {
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
  bodyEl: document.body,
};

let intervalId = null;
refs.btnStop.disabled = true;

refs.btnStart.addEventListener('click', e => {
  refs.btnStop.disabled = false;
  e.target.disabled = true;

  refs.bodyEl.style.backgroundColor = getRandomHexColor();

  intervalId = setInterval(() => {
    refs.bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

refs.btnStop.addEventListener('click', e => {
  e.target.disabled = true;
  refs.btnStart.disabled = false;
  clearInterval(intervalId);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
