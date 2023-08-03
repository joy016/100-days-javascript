const check = document.querySelector('button');
const enteredValue = document.querySelector('.txt-input');
const result = document.querySelector('.result');

enteredValue.addEventListener('input', (event) => {
  const currentValue = event.target.value;
  event.target.value = currentValue.replace(/\s/g, '');
});

const handleCheckWord = () => {
  const enteredInput = enteredValue.value.toLowerCase().replace(/\s/g, '');
  const reverseInput = enteredInput.split('').reverse().join('');

  if (enteredInput === reverseInput) {
    result.innerHTML = `${enteredInput.toUpperCase()} is a palindrome`;
  } else {
    result.innerHTML = `${enteredInput.toUpperCase()} is NOT palindrome`;
  }
};

check.addEventListener('click', handleCheckWord);
