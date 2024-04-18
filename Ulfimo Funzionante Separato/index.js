
document.addEventListener("DOMContentLoaded", (event) => {
    startGame();
    select_button();
    showQuestion();
    startTimer(); 
    startGame();
});

/************************************************* PAGINA 1 ************************************************/

document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.check'); 
    const buttons = document.querySelectorAll('.procedere');
  
    function aggiornaStatoBottone() {
  
        buttons.forEach((button, index) => {
            button.disabled = !checkboxes[index].checked; 
        });
    }
  
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', aggiornaStatoBottone);
    });
  
    aggiornaStatoBottone();
  });
  
  /////// bottone per switchare la lingua
  document.addEventListener('DOMContentLoaded', function() {
    const languageButton = document.querySelector('.language-btn');
    const languageFlag = document.querySelector('.language-flag');
    const italianText = document.querySelector('.italian-text');
    const englishText = document.querySelector('.english-text');
  
    languageButton.addEventListener('click', function() {
        if (italianText.style.display === 'none') {
            italianText.style.display = 'block';
            englishText.style.display = 'none';
            languageFlag.src = "../assets/inglese.png"
            languageFlag.alt = 'Switch to English';
        } else {
            italianText.style.display = 'none';
            englishText.style.display = 'block';
            languageFlag.src = '../assets/bandiera_italiana.jpeg';
            languageFlag.alt = 'Switch to Italian';
        }
    });
  });

  /************************************************* PAGINA 2 ************************************************/

  const questionElement = document.getElementById('domanda');
  const answersButtonsElement = document.getElementById('answer-buttons');
  const nextButton = document.getElementById('procedi');
  const questionCounter = document.getElementById('questionCounter');  // Riferimento all'elemento del numero della domanda
  const proseguiButton = document.getElementById('prosegui');
  let selectedAnswerIndex;
  let shuffledQuestions, currentQuestionIndex, quizCompleted;
  var correctAnswers;
  var contatore = 0;
  const risposteGiuste = [];

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





for (let i = 0; i < 10; i++) {risposteGiuste[i] = false};  
  function calcolaRisposteEsatte() {
    contatore = 0;
    for (let n = 0; n < 10; n++) {
        if (risposteGiuste[n]) {contatore = contatore + 1;}}
    return contatore;
}
  

  function startGame() {
      shuffledQuestions = questions.sort(() => Math.random() - 0.5);
      currentQuestionIndex = 0;function setNextQuestion() {
          resetState();
          if (currentQuestionIndex < shuffledQuestions.length) {
              showQuestion(shuffledQuestions[currentQuestionIndex]);
              updateQuestionCounter();
          } else {
              displayResult();
          }
      }
      correctAnswers = 0;
      quizCompleted = false;
      setNextQuestion();
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
      updateTimerDisplay(); // Aggiorna la visualizzazione del timer
      question.answers.forEach((answer, index) => {
          const button = document.createElement('button');
          button.innerText = answer.text;
          button.classList.add('btn');
  
          button.addEventListener('click', () => {
              selectAnswer(index);
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

  nextButton.addEventListener('click', () => {
      if (quizCompleted || currentQuestionIndex === shuffledQuestions.length - 1) { // Se il quiz è completato o è l'ultima domanda
        //window.location.href = './pagina3.html';
      } else {
          currentQuestionIndex++;  // Avanza alla prossima domanda
          setNextQuestion();
          resetState();  // Resetta lo stato per rimuovere la selezione dell'utente
          nextButton.disabled = true;  
      }
  });

  function selectAnswer(selectedOption) {
      selectedAnswerIndex = selectedOption;  // Salva l'opzione di risposta selezionata dall'utente
      const correctIndex = shuffledQuestions[currentQuestionIndex].correctAnswerIndex;
  
      const isCorrect = selectedOption === correctIndex;
  
      // Rimuove la classe btn_selected da tutti i bottoni
      const buttons = document.querySelectorAll('.btn');
      buttons.forEach(button => {
          button.classList.remove('btn_selected');
      });
  
      // Aggiunge la classe btn_selected al bottone selezionato dall'utente
      const selectedButton = buttons[selectedOption];
      selectedButton.classList.add('btn_selected');
  
      if (isCorrect) {
          risposteGiuste[currentQuestionIndex] = true;
          console.log(calcolaRisposteEsatte());

          correctAnswers++;
      }
      else {risposteGiuste[currentQuestionIndex] = false;}
  
      const isLastQuestion = currentQuestionIndex === shuffledQuestions.length - 1;
  
      if (currentQuestionIndex < shuffledQuestions.length - 1) { // Verifica se non è l'ultima domanda
          nextButton.disabled = false;  // Abilita il pulsante "Procedi" per permettere di cambiare risposta
      } else {
          quizCompleted = true;
          nextButton.disabled = false;
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
              calcolaRisposteEsatte();
              alert(`Hai completato il quiz con ${correctAnswers} risposte corrette! ${contatore}`);
              window.location.href = './pagina3.html';
          } else {
              setNextQuestion();
              resetTimer();
          }
      });
  });
  
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
  var TIME_LIMIT = 10; //tempo limite
  var timePassed = 0;
  var timeLeft = TIME_LIMIT;
  var timerInterval = 0; 
  var remainingPathColor = COLOR_CODES.info.color;
  
  
  document.getElementById("timer").innerHTML = `
      <div class="base-timer">
          <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <g class="base-timer__circle">
                  <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
                  <path id="base-timer-path-remaining" stroke-dasharray="283" class="base-timer__path-remaining ${remainingPathColor}"
                      d="M 50, 50 m -45, 0 a 45,45 0 1,0 90,0 a 45,45 0 1,0 -90,0"></path>
              </g>
          </svg>
          <p class=second_txt>secondi<br>rimanenti</p>
          <span id="base-timer-label" class="base-timer__label">${TIME_LIMIT}</span>
      </div>
  `;
  
  
  startTimer();
  
  
  
  function startTimer() {
      timerInterval = setInterval(() => {
          timePassed += 1; 
          timeLeft = TIME_LIMIT - timePassed;
          updateTimerDisplay(); 
          
          setCircleDasharray();
          setRemainingPathColor(timeLeft);
          
          if (timeLeft <= 0) { 
              onTimesUp();  // Chiamiamo onTimesUp() quando il timer arriva a 0
          }
      }, 1000);
  }
  function onTimesUp() {
      clearInterval(timerInterval);
      setNextQuestion();  // Mostra la domanda successiva
  }
  function setRemainingPathColor(timeLeft) {
      const { alert, warning, info } = COLOR_CODES;
      if (timeLeft <= alert.threshold) {
          document.getElementById("base-timer-path-remaining").classList.remove(warning.color);
          document.getElementById("base-timer-path-remaining").classList.add(alert.color);
      } else if (timeLeft <= warning.threshold) {
          document.getElementById("base-timer-path-remaining").classList.remove(info.color);
          document.getElementById("base-timer-path-remaining").classList.add(warning.color);
      }
  }
  
  function updateTimerDisplay() {
      const timerElement = document.getElementById("base-timer-label");
      if (timerElement) {
          timerElement.innerHTML = timeLeft;
      }
  }
  function resetTimer() {
      let nextButton = document.getElementById('procedi')
      nextButton.addEventListener('click', ()=> {
          onTimesUp();
          timePassed = 0;
          timeLeft = TIME_LIMIT;
          startTimer();
          })
  }





/**************************************************** PAGINA 3 ********************************************/



window.onload = function() {
    var pathname = window.location.pathname;
    if (pathname === "/pagina3.html") {  
var risposteEsatte = contatore;
function generaRisultati(risposte) {

   let risposteSbagliate = 10 - risposte;
   let percentGiuste = (risposte / 10) * 100;
   let percentSbagliate = (risposteSbagliate / 10) * 100;
   document.getElementById("perc1").innerText = percentGiuste;
   document.getElementById("perc2").innerText = percentSbagliate;
   document.getElementById("numGiuste").innerText = risposteEsatte;
   document.getElementById("numSbagliate").innerText = risposteSbagliate;
   let rootElement = document.documentElement;
   let nuovaPercentuale = (440 -(440 * percentGiuste) / 100);
   rootElement.style.setProperty('--percentuale', nuovaPercentuale);
}

const myButton = document.getElementById('btn');
myButton.addEventListener('mouseenter', function() {
  myButton.classList.add('custom-cursor');
});
myButton.addEventListener('mouseleave', function() {
  myButton.classList.remove('custom-cursor');
});
generaRisultati(risposteEsatte);
console.log(risposteEsatte); 
const messaggio = function (){
  const messaggio1 = `
  <h4>Congratulazioni!</h4>
  <h5>Hai passato l'esame</h5>
  <p>Ti invieremo il certificato</p>
  <p>in pochi minuti</p>
  <p>Controlla la tua mail</p>
  <p>incluse spam e promozioni</p>  
  `;
  const messaggio2 = `<h6>Test Fallito!</h6>`;
  if (risposteEsatte <= 5) {return messaggio2;}
  else {return messaggio1;}
}

document.getElementById('messaggio').innerHTML = messaggio();
btn.addEventListener('click',() => {
      window.location.href = './pagina4.html';
  });

}}



/********************************** PAGINA 4 ****************************************************/

window.onload = function() {
    var pathname = window.location.pathname;
    if (pathname === "/pagina4.html") { 


let stelle = document.getElementsByClassName('stella');

function cambiaStella(event) {
  let stellaCliccata = event.target;
  let indiceStellaCliccata = Array.from(stelle).indexOf(stellaCliccata);

  for (let i = indiceStellaCliccata; i >= 0; i--) {
    if (stelle[i].src.includes('star-off.svg')) {
      stelle[i].src = './star.svg';
      stelle[i].classList.remove('stella');
      stelle[i].classList.add('star');
    } else {
      stelle[i].src = 'star-off.svg';
      stelle[i].classList.remove('star');
      stelle[i].classList.add('stella');
    }
  }
}


for (let i = 0; i <= stelle.length ; i++) {
  stelle[i].addEventListener('click', cambiaStella);
}

console.log("test")

}}