const check = document.querySelector('button');
const enteredValue = document.querySelector('.txt-input');
const result = document.querySelector('.result');

enteredValue.addEventListener('input', (event) => {
  const currentValue = event.target.value;
});

const handleCheckWord = () => {
  let counter = 0;
  const enteredInput = enteredValue.value.toLowerCase();

  for (let i = 0; i < enteredInput.length; i++) {
    const letter = enteredInput[i];
    const vowel = /[aeiou]/i;

    if (letter.match(vowel)) {
      counter++;
    }
  }

  let vowelLetter = counter > 1 ? 'VOWELS' : 'VOWEL';
  counter = counter || ' NO';

  result.innerHTML = `${enteredInput.toUpperCase()} HAS ${counter} ${vowelLetter}`;
};

check.addEventListener('click', handleCheckWord);
