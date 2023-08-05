const copyText = document.querySelector('input');
const copyBtn = document.querySelector('.button');
const form = document.querySelector('.form');

const handleCopy = (e) => {
  e.preventDefault();
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
};

form.addEventListener('click', handleCopy);
