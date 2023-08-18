const startButton = document.querySelector('.btn-start');
const quizContainer = document.querySelector('.quiz-container');
const countdownTimer = document.getElementById('timer');
const question = document.querySelector('.question');
const choices = document.querySelectorAll('.choices');
const buttons = document.querySelectorAll('.btn-style');
const questionCount = document.getElementById('count-of-question');
const quizBoxContainer = document.querySelector('.quiz-box-container');
const scoreContainer = document.querySelector('.score-container');
const congratsContainer = document.querySelector('.congrats-container');
const retakeButton = document.getElementById('btn-retake');
const score = document.getElementById('score');
let userChoices = [null];
let scores = 0;
let counter = 0;

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
    const selectedOption = choices[index].textContent;
    userChoices[currentQuestionIndex] = selectedOption;
    if (currentQuestionIndex < quizData.length - 1) {
      currentQuestionIndex++;
      displayQuestion();
    } else {
      calculateScore();
      quizBoxContainer.style.display = 'none';
      score.innerHTML = `Your score is ${scores} out of 5`;
      if (scores < 4) {
        scoreContainer.style.display = 'flex';
      } else {
        congratsContainer.style.display = 'block';
        const duration = 15 * 1000,
          animationEnd = Date.now() + duration,
          defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        function randomInRange(min, max) {
          return Math.random() * (max - min) + min;
        }

        const interval = setInterval(function () {
          const timeLeft = animationEnd - Date.now();

          if (timeLeft <= 0) {
            return clearInterval(interval);
          }

          const particleCount = 50 * (timeLeft / duration);

          // since particles fall down, start a bit higher than random
          confetti(
            Object.assign({}, defaults, {
              particleCount,
              origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            })
          );
          confetti(
            Object.assign({}, defaults, {
              particleCount,
              origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            })
          );
        }, 250);
      }
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
  counter = currentQuestionIndex + 1;
  const questionData = quizData[currentQuestionIndex];
  shuffleArrayOfOptions(questionData.options);
  question.innerHTML = questionData.question;
  questionCount.innerHTML = `Question ${counter} of 5`;

  buttons.forEach((button, index) => {
    const choicesElement = button.querySelector('.choices');

    choicesElement.textContent = questionData.options[index];
  });
}

function calculateScore() {
  for (let i = 0; i < quizData.length; i++) {
    if (userChoices.includes(quizData[i].answer)) {
      scores++;
    }
  }
  console.log(scores);
}

retakeButton.addEventListener('click', () => {
  userChoices = [null];
  scores = 0;
  currentQuestionIndex = 0;
  counter = 0;
  scoreContainer.style.display = 'none';
  quizBoxContainer.style.display = 'block';
  displayQuestion();
});

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
