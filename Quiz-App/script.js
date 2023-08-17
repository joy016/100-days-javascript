const startButton = document.querySelector('.btn-start');
const quizContainer = document.querySelector('.quiz-container');
const countdownTimer = document.getElementById('timer');
const question = document.querySelector('.question');
const choices = document.querySelectorAll('.choices');
const buttons = document.querySelectorAll('.btn-style');
const questionCount = document.getElementById('count-of-question');
const quizBoxContainer = document.querySelector('.quiz-box-container');
const scoreContainer = document.querySelector('.score-container');
const score = document.getElementById('score');
let userChoices = [];

const targetTime = new Date().getTime() + 10 * 60 * 1000;
let currentQuestionIndex = 0;

const quizData = [
  {
    question: 'Hyper Text Markup Language Stands For?',
    options: ['JQuery', 'XHTML', 'CSS', 'HTML'],
    answer: 'HTML',
  },
  {
    question: 'Cascading Style sheet Stands For?',
    options: ['JQuery', 'XHTML', 'CSS', 'HTML'],
    answer: 'CSS',
  },
  {
    question: 'Which is a Javascript Framework?',
    options: ['React', 'Laravel', 'Django', 'Sass'],
    answer: 'React',
  },
  {
    question: 'Which is a backend language?',
    options: ['PHP', 'HTML', 'React', 'All'],
    answer: 'PHP',
  },
  {
    question: 'Which is best for Artificial intelligence?',
    options: ['React', 'Laravel', 'Python', 'Sass'],
    answer: 'Python',
  },
];

startButton.addEventListener('click', () => {
  if (quizContainer.style.display === 'block') {
    quizContainer.style.display = 'none';
  } else {
    quizContainer.style.display = 'block';
    startButton.style.display = 'none';
  }
});

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (currentQuestionIndex < quizData.length - 1) {
      currentQuestionIndex++;
      7;
      const selectedOption = choices[index].textContent;
      userChoices[currentQuestionIndex] = selectedOption;

      displayQuestion();
    } else {
      alert('quiz completed');
      calculateScore();
      quizBoxContainer.style.display = 'none';
      scoreContainer.style.display = 'flex';
    }
  });
});

function shuffleArrayOfOptions(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function displayQuestion() {
  let counter = currentQuestionIndex + 1;
  const questionData = quizData[currentQuestionIndex];
  shuffleArrayOfOptions(questionData.options);
  question.innerHTML = questionData.question;
  questionCount.innerHTML = `Question ${counter} of 5`;

  buttons.forEach((button, index) => {
    const choicesElement = button.querySelector('.choices');

    choicesElement.textContent = questionData.options[index];
  });
}

// to be continue

function calculateScore() {
  let score = 0;
  for (let i = 0; i < quizData.length; i++) {
    if (userChoices[i] === quizData[i].answer) {
      score++;
    }
  }
  console.log(score);
}

const interval = setInterval(function () {
  const currentTime = new Date().getTime();
  const distance = targetTime - currentTime;

  if (distance <= 0) {
    clearInterval(interval); // Stop the timer when it reaches zero
    countdownTimer.innerHTML = 'Timedone';
  } else {
    const minutes = Math.floor(distance / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    countdownTimer.innerHTML = `TIME: ${minutes}:${
      seconds < 10 ? '0' : ''
    }${seconds}`;
  }
}, 1000);

function initialSetUp() {
  displayQuestion();
}

initialSetUp();
