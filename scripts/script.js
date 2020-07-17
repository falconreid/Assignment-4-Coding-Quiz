// adding variables
// Quiz section
var quizSection = document.querySelector("#quizContent");
var questionSec = document.querySelector("#question");
var ulAnswers = document.querySelector("#ulAnswers");
var timeEl = document.querySelector("#timeLeft");

// Set of questions
var questionList = [
  {
    question: "What is the the definition of a function?",
    choice: [
      "Functions let you group together a series of statements to perform a specific task.",
      "Functions let you combine arrays and objects to create complex data structures.",
      "Functions allow you to compare the results of one or more comparison operators.",
      "Functions are often used to loop through the items in an array.",
    ],
    answer: 0,
  },
  {
    question:
      "If Statements are used to evaluate a condition based on what criteria?",
    choice: [
      "Whether or not the function is named or anonymous.",
      "Whether or not the condition is true or false.",
      "Whether the variable is an array or a string.",
      "Whether or not the data type is Boolean or Undefined.",
    ],
    answer: 1,
  },
  {
    question: "What is the the definition of a function?",
    choice: [
      "offerExpire(), listArray(), checkUserName(), dismissNotation()",
      "charCount(), checkTerms(), removeAttr(), eventType()",
      "backgroundPosition(), wordSpacing(), isNumeric(), newItemButton()",
      "getElementByID(), nextSibling, querySelector(), parentNode",
    ],
    answer: 3,
  },
  {
    question: "How does a FOR Loop start?",
    choice: [
      "for i = 1 to 5",
      "for (i = 0; i <= 5)",
      "for (i = 0; i <= 5; i++)",
      "for (i <= 5; i++)",
    ],
    answer: 2,
  },
];

// timer function
var secondsLeft = 30;

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

// Click Button to activate timer and begin quiz
// function to call questions
var currentQuestion = 0;

document.getElementById("button").addEventListener("click", function () {
  document.getElementById("instructions").textContent = "";
  setTime();
  // call questions from questions file:
  currentQuestion++;
  document.getElementById("question").innerHTML =
    questionList[currentQuestion].question;
  document.getElementById("a1").innerHTML =
    questionList[currentQuestion].choice[0];
  document.getElementById("a2").innerHTML =
    questionList[currentQuestion].choice[1];
  document.getElementById("a3").innerHTML =
    questionList[currentQuestion].choice[2];
  document.getElementById("a4").innerHTML =
    questionList[currentQuestion].choice[3];
});

// Final Section
var finalSection = document.querySelector("#finalScore");
var entryForm = document.querySelector("#initialsForm"); // to create entry form
var ulInitials = document.querySelector("#scoreInitials");
var scoreEntry = document.querySelector("#entry");

function sectionSwitch() {
  quizSection.setAttribute("style", "display: none;");
  finalSection.setAttribute("style", "display: block;");
}

// function to return to quiz after user enters initials
function sectionSwitchBack() {
  quizSection.setAttribute("style", "display: block;");
  finalSection.setAttribute("style", "display: none;");
}
