// adding variables

// Quiz section
var quizSection = document.querySelector("#quizContent");
var questionSec = document.querySelector("#boldQuest");
var ulAnswers = document.querySelector("#ulAnswers");
var timeEl = document.querySelector("#timeLeft");

// Final Section
var finalSection = document.querySelector("#finalScore");
var entryForm = document.querySelector("#initialsForm"); // to create entry form
var ulInitials = document.querySelector("#scoreInitials");
var scoreEntry = document.querySelector("#entry");

// timer function
var secondsLeft = 10;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time Remaining: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sectionSwitch();
    }
  }, 1000);
}

function sectionSwitch() {
  quizSection.setAttribute("style", "display: none;");
  finalSection.setAttribute("style", "display: block;");
}

setTime();
// function to return to quiz after user enters initials
function sectionSwitchBack() {
  quizSection.setAttribute("style", "display: block;");
  finalSection.setAttribute("style", "display: none;");
}
