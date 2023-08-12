const inputCounter = document.getElementById('input-count');
const countValue = document.querySelector('.count');

inputCounter.addEventListener('input', () => {
  const inputText = inputCounter.value;
  const countInputText = inputText.length;
  countValue.innerHTML = countInputText;
});
