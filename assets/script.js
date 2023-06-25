var questions 
var timerEl = document.getElementById("timer");
var input


function timer() {
    var timeLeft = 60;
  
    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timerInterval = setInterval(function () {
      
      if(timeLeft >= 0) {
        timerEl.textContent = "Timer: " + timeLeft;
        console.log(timeLeft);
        timeLeft--;
      }          
    }, 1000);
  }
  