let counter = document.querySelector('.count');
const subs = document.querySelector('.subtract');
const buttons = document.querySelector('.buttons');

const generateNumber = () => {
  let color = Math.random().toString(16);
  const test = `#${color.substring(2, 8)}`;
  counter.innerHTML = test;
  counter.style.color = test;
  document.body.style.backgroundColor = test;

  console.log(test);
};

buttons.addEventListener('click', generateNumber);

generateNumber();
