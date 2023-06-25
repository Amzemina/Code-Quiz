//Timer var and function
var timerEl = document.getElementById("timer");

function timer() {
    var timeLeft = 60;
  
    var timerInterval = setInterval(function () {
      
      if(timeLeft >= 0) {
        timerEl.textContent = "Timer: " + timeLeft;
        console.log(timeLeft);
        timeLeft--;
      }          
    }, 1000);
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
  var currentQuestion = -1;

  function loadQ() {
    currentQuestion++;
  }
  
//Start Quiz function
  function startQuiz() {
    timer();
    loadQ();
  }
  