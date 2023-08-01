let counter = document.querySelector('.count');
const subs = document.querySelector('.subtract');
const buttons = document.querySelector('.buttons');

const generateNumber = () => {
  const randomNumber = Math.floor(Math.random() * 10 + 1);
  counter.innerHTML = randomNumber;
};

buttons.addEventListener('click', generateNumber);

generateNumber();
