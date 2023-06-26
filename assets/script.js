//Timer var and function
var timerEl = document.getElementById("timer");
var timeLeft = 60;
var timerInterval;
var scorePageEl = document.getElementById("scorepage")
var leaderBoardEl = document.getElementById("leaderboard");



function timer() {
     timerInterval = setInterval(function () {
     timerEl.textContent = "Timer: " + timeLeft;
      if(timeLeft > 0) {
        timeLeft--;
      } else {
        endQuiz();
      }         
    }, 1000);
  }

  function deductTime() {
    if (timeLeft -10 <= 0 ) {
        timeLeft = 0
        endQuiz();
    } else {
        timeLeft = timeLeft -10; 
    }
  }


  
//Questions and function
const questions = [
    {
      question: "1. Which tag is used to define an unordered list in HTML?",
      choices: ["<ol>", "<li>", "<ul>", "<dl>"],
      answer: "<ul>"
    },
    {
      question: "2. Which CSS property is used to change the text color of an element?",
      choices: ["color", "text-color", "font-color", "text-style"],
      answer: "color"
    },
    {
      question: "3. Which of the following is not a JavaScript data type?",
      choices: ["Boolean", "String", "Number", "ArrayObject"],
      answer: "ArrayObject"
    },
    {
      question: "4. Which HTML tag is used to link an external JavaScript file?",
      choices: ["<script>", "<link>", "<meta>", "<style>"],
      answer: "<script>"
    },
    {
      question: "5. What does CSS stand for?",
      choices: ["Cascading Style Sheet", "Computer Style Sheet", "Colorful Style Sheet", "Creative Style Sheet"],
      answer: "Cascading Style Sheet"
    },
    {
      question: "6. Which operator is used for strict equality comparison in JavaScript?",
      choices: ["==", "===", "<=", "!=="],
      answer: "==="
    },
    {
      question: "7. Which attribute is used to specify the source URL of an image in HTML?",
      choices: ["src", "href", "link", "url"],
      answer: "src"
    },
    {
      question: "8. What is the correct syntax for a JavaScript comment?",
      choices: ["// This is a comment", "<!-- This is a comment -->", "/* This is a comment */", "# This is a comment"],
      answer: "// This is a comment"
    },
    {
      question: "9. Which CSS property is used to control the spacing between lines of text?",
      choices: ["text-spacing", "line-height", "text-line-spacing", "letter-spacing"],
      answer: "line-height"
    },
    {
      question: "10. Which JavaScript method is used to remove the last element from an array?",
      choices: [".pop()", ".push()", ".remove()", ".last()"],
      answer: ".pop()"
    }
  ];

  var questionEL = document.getElementById("questions");
  var choiceAEL = document.getElementById("choiceA");
  var choiceBEL = document.getElementById("choiceB");
  var choiceCEL = document.getElementById("choiceC");
  var choiceDEL = document.getElementById("choiceD");
  var currentQuestion = -1;

  function loadQ() {
    currentQuestion++;
    if (isCurrentQuestionValid()){
        questionEL.textContent = questions[currentQuestion].question;
        choiceAEL.textContent = questions[currentQuestion].choices[0];
        choiceBEL.textContent = questions[currentQuestion].choices[1];
        choiceCEL.textContent = questions[currentQuestion].choices[2];
        choiceDEL.textContent = questions[currentQuestion].choices[3];

        choiceAEL.value = questions[currentQuestion].choices[0];
        choiceBEL.value = questions[currentQuestion].choices[1];
        choiceCEL.value = questions[currentQuestion].choices[2];
        choiceDEL.value = questions[currentQuestion].choices[3];
    } else {
        endQuiz();
    }

  }

  function isCurrentQuestionValid() {
    if (currentQuestion >= questions.length) {
        return false;
    } else {
        return true;
    }
  }

  function checkAns(chosenAns) {
    if (chosenAns == questions[currentQuestion].answer) {
        console.log("correct")
    } else {
        deductTime();
        console.log("incorrect")
    };
    loadQ();
  }

function endQuiz() {
    clearInterval(timerInterval);
    console.log("quiz ended");
    scorePageEl.classList.remove("hidden");
    introDivEl.classList.add("hidden");
    quizDivEl.classList.add("hidden");
}
  
//Start Quiz function
var introDivEl = document.getElementById("intro");
var quizDivEl = document.getElementById("quiz");

  function startQuiz() {
    introDivEl.classList.add("hidden");
    quizDivEl.classList.remove("hidden");
    loadQ();
    timer();
}

// Score leaderboard

function showLeaderboard() {
    leaderBoardEl.classList.remove("hidden");
    scorePageEl.classList.add("hidden");
    introDivEl.classList.add("hidden");
    quizDivEl.classList.add("hidden");
    refreshScores() 
}

function saveScores(allScores) {
    allScores.sort((a,b)=>{
        return b.score-a.score
    });
    localStorage.setItem("allScores", JSON.stringify(allScores));

}

var initialsEl = document.getElementById("initials");
function inputScore() {
    var allScores = getScores();
    allScores.push( {initials: initialsEl.value, score: timeLeft});
    saveScores(allScores);
    showLeaderboard()
}

function getScores() {
  return JSON.parse(localStorage.getItem("allScores")) ||[];
}

var scoreListEl = document.getElementById("scorelist");
function refreshScores() {
    var refAllScores = getScores()
    refAllScores.forEach(scoreEntry=>{
      var entryContainerEl = document.createElement("div")
      entryContainerEl.textContent = scoreEntry.initials + " " + scoreEntry.score;
      scoreListEl.appendChild(entryContainerEl);
    })
}


console.log(getScores());