let counter = document.querySelector('.count');
const subs = document.querySelector('.subtract');
const buttons = document.querySelector('.buttons');
const whiteValue = getComputedStyle(document.documentElement).getPropertyValue(
  '--white'
);
const redValue = getComputedStyle(document.documentElement).getPropertyValue(
  '--red'
);

const greenValue = getComputedStyle(document.documentElement).getPropertyValue(
  '--green'
);

buttons.addEventListener('click', (e) => {
  if (e.target.classList.contains('add')) {
    counter.innerHTML++;
  } else if (e.target.classList.contains('subtract')) {
    counter.innerHTML--;
  } else {
    counter.innerHTML = 0;
  }

  if (counter.innerHTML == 0) {
    counter.style.color = whiteValue;
  } else if (counter.innerHTML >= 1) {
    counter.style.color = greenValue;
  } else {
    counter.style.color = redValue;
  }
});
