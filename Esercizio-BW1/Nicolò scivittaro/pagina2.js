document.addEventListener("DOMContentLoaded", (event) => {
    console.log("ciao");
    startGame();
    select_button();
    showQuestion();
});
const questionElement = document.getElementById('domanda');
const answersButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('procedi');
const questionCounter = document.getElementById('questionCounter');  // Riferimento all'elemento del numero della domanda
const proseguiButton = document.getElementById('prosegui');

let shuffledQuestions, currentQuestionIndex, correctAnswers, quizCompleted;

function startGame() {
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    correctAnswers = 0;
    quizCompleted = false;
    setNextQuestion();
    nextButton.disabled = true;
}

function setNextQuestion() {
    resetState();
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion(shuffledQuestions[currentQuestionIndex]);
        updateQuestionCounter();  
    } else {
        displayResult();
    }
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    resetState();  
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => {
            selectAnswer(index);
            select_button();  
        });
        answersButtonsElement.appendChild(button);
    });
}

function select_button() {
    var bottoni = document.querySelectorAll('.btn');
    bottoni.forEach(function (bottone) {
        bottone.addEventListener('click', function() {
            bottoni.forEach(function(btn) {
                btn.classList.remove('btn_selected');
            });
            bottone.classList.add('btn_selected');
        });
    });
}

function selectAnswer(selectedOption) {
    const correctIndex = shuffledQuestions[currentQuestionIndex].correctAnswerIndex;

    if (selectedOption === correctIndex) {
        correctAnswers++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < shuffledQuestions.length) {
        setNextQuestion();
    } else {
        quizCompleted = true;
        displayResult();
    }
}

function resetState() {
    while (answersButtonsElement.firstChild) {
        answersButtonsElement.removeChild(answersButtonsElement.firstChild);
    }
}

function displayResult() {
    document.getElementById("result").textContent = `Risultato: ${correctAnswers}/${shuffledQuestions.length}`;
    nextButton.disabled = false;
}

function updateQuestionCounter() {
    questionCounter.innerHTML = `DOMANDA ${currentQuestionIndex + 1}<span>/${shuffledQuestions.length}</span>`;  // Aggiorna il numero della domanda
}

document.addEventListener('DOMContentLoaded', () => {
    startGame();

    nextButton.addEventListener('click', () => {
        if (quizCompleted) {
            sessionStorage.setItem('correctAnswers', correctAnswers);
            window.location.href = './pagina3.html';
        } else {
            setNextQuestion();
        }
    });
});
const questions = [
    {
        question: "Che cosa significa l'acronimo CPU?",
        answers: [
            {text: "Central Processing Unit", correct: true},
            {text: "Central Process Unit", correct: false},
            {text: "Computer Personal Unit", correct: false},
            {text: "Central Processor Unit", correct: false}
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Nel linguaggio Js, quale di queste keywords utilizzeresti in una variabile per assicurarti che non venga modificata?",
        answers: [
            {text: "Static", correct: false},
            {text: "Final", correct: true},
            {text: "Private", correct: false},
            {text: "Public", correct: false}
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Quale linguaggio di programmazione è utilizzato principalmente per il design web?",
        answers: [
            {text: "Python", correct: false},
            {text: "JavaScript", correct: false},
            {text: "HTML/CSS", correct: true},
            {text: "Java", correct: false}
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Chi è considerato il padre del computer?",
        answers: [
            {text: "Alan Turing", correct: false},
            {text: "Charles Babbage", correct: true},
            {text: "Tim Berners-Lee", correct: false},
            {text: "Bill Gates", correct: false}
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Qual è il sistema operativo più utilizzato al mondo per i computer desktop?",
        answers: [
            {text: "Windows", correct: true},
            {text: "Linux", correct: false},
            {text: "macOS", correct: false},
            {text: "Android", correct: false}
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Cosa significa HTML?",
        answers: [
            {text: "HyperText Markup Language", correct: true},
            {text: "High-Level Text Manipulation Language", correct: false},
            {text: "Hyperlink Text Management Language", correct: false},
            {text: "Home Tool Markup Language", correct: false}
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Qual è il simbolo chimico dell'oro?",
        answers: [
            {text: "Ag", correct: false},
            {text: "Au", correct: true},
            {text: "O", correct: false},
            {text: "Cu", correct: false}
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Qual è il pianeta più grande del sistema solare?",
        answers: [
            {text: "Terra", correct: false},
            {text: "Marte", correct: false},
            {text: "Giove", correct: true},
            {text: "Venere", correct: false}
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Chi è l'autore di 'Il nome della rosa'?",
        answers: [
            {text: "Umberto Eco", correct: true},
            {text: "Gabriel García Márquez", correct: false},
            {text: "Haruki Murakami", correct: false},
            {text: "Franz Kafka", correct: false}
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Qual è il fiume più lungo del mondo?",
        answers: [
            {text: "Nilo", correct: true},
            {text: "Amazonas", correct: false},
            {text: "Mississippi", correct: false},
            {text: "Yangtze", correct: false}
        ],
        correctAnswerIndex: 0
    }
];
var FULL_DASH_ARRAY = 283;
var WARNING_THRESHOLD = 10;
var ALERT_THRESHOLD = 5;

var COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};

var TIME_LIMIT = 60; //tempo limite da riprendere dalla variabile della difficoltà (se la vogliamo fare) e riprendere una volta che arriva a 0
var timePassed = 0;
var timeLeft = TIME_LIMIT;
var timerInterval = 0;
var remainingPathColor = COLOR_CODES.info.color;

document.getElementById("timer").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <p class=second_txt>secondi<br>rimanenti</p>
  <span id="base-timer-label" class="base-timer__label">${TIME_LIMIT}</span>
  </div>
`;

startTimer();

function onTimesUp() {
  clearInterval(timerInterval);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = timeLeft
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}
