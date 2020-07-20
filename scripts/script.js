// adding variables
// Quiz section
var quizSection = document.querySelector("#quizContent");
var questionSec = document.querySelector("#question");
var ulAnswers = document.querySelector("#ulAnswers");
var timeEl = document.querySelector("#timeLeft");
var scoreCurrent = document.querySelector("#currentScore");
var liEl = document.getElementsByClassName("answers");
var finalScore = document.getElementById("entry");
var score = "0";
var initsButton = document.querySelector(".initials");

// Set of questions
var questionList = [
  {
    question: "What is the the definition of a function?",
    choice: [
      "Functions are often used to loop through the items in an array.",
      "Functions let you combine arrays and objects to create complex data structures.",
      "Functions allow you to compare the results of one or more comparison operators.",
      "Functions let you group together a series of statements to perform a specific task.",
    ],
    answer:
      "Functions let you group together a series of statements to perform a specific task.",
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
    answer: "Whether or not the condition is true or false.",
  },
  {
    question:
      "Which of the following are all used to access and update the DOM tree?",
    choice: [
      "offerExpire(), listArray(), checkUserName(), dismissNotation()",
      "charCount(), checkTerms(), removeAttr(), eventType()",
      "backgroundPosition(), wordSpacing(), isNumeric(), newItemButton()",
      "getElementByID(), nextSibling, querySelector(), parentNode",
    ],
    answer: "getElementByID(), nextSibling, querySelector(), parentNode",
  },
  {
    question: "How does a FOR Loop start?",
    choice: [
      "for i = 1 to 5",
      "for (i = 0; i <= 5)",
      "for (i = 0; i <= 5; i++)",
      "for (i <= 5; i++)",
    ],
    answer: "for (i = 0; i <= 5; i++)",
  },
  {
    question: "",
    choice: [""],
    answer: "",
  },
];

// timer function
var secondsLeft = 40;

function setTime() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time Remaining: " + secondsLeft;

    scoreCurrent.textContent = "Current Score: " + score + "/" + "4";

    if (secondsLeft === 0) {
      timeEl.textContent = "Time Is Up!";
      clearInterval(timerInterval);
      sectionSwitch();
    }
  }, 1000);
}

// function to get questions
function getQuestion() {
  currentQuestion;
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
}
// Click Button to activate timer and begin quiz
// function to call questions
var currentQuestion = 0;

document.getElementById("button").addEventListener("click", function () {
  event.preventDefault();
  document.getElementById("instructions").textContent = "";
  getQuestion();
  setTime();
  document.getElementById("button").setAttribute("style", "display:none;");
});

// get next question
for (var i = 0; i < liEl.length; i++) {
  liEl[i].addEventListener("click", function (e) {
    if (e.target.textContent === questionList[currentQuestion].answer) {
      console.log("correct");
      score.textContent = score++;
    } else {
      console.log("WRONG!");
      secondsLeft = secondsLeft - 10;
    }
    currentQuestion++;
    getQuestion();
    console.log(currentQuestion);

    if (currentQuestion === 4) {
      sectionSwitch();
      clearInterval(timerInterval);
    } else {
    }
  });
}

// Final Section
var finalSection = document.querySelector("#finalScore");
var entryForm = document.querySelector("#initialsForm"); // to create entry form
var ulInitials = document.querySelector("#scoreInitials");
var scoreEntry = document.querySelector("#entry");

function sectionSwitch() {
  quizSection.setAttribute("style", "display: none;");
  finalSection.setAttribute("style", "display: block;");
  finalScore.textContent = score + "/" + "4";
  localStorage.setItem("Score", JSON.stringify(score));
  addInput();
}

// function to create input form
function addInput(divName) {
  var newdiv = document.createElement("div");
  newdiv.innerHTML =
    " <br><input type='text' name='myInputs[]' id='inputInit'><br>";
  document.getElementById("scoreFinal").appendChild(newdiv);
  inputInit = document.querySelector("#inputInit");
  console.log(inputInit);
}

// function to collect intials and send to storage and new list items
initsButton.addEventListener("click" || "mousedown", function (event) {
  event.preventDefault();

  var input = {
    //score + initials
    initials: inputInit.value.trim(),
    score: score,
  };
  localStorage.setItem("Initials", JSON.stringify(input));
  console.log(JSON.stringify(input));
  var highScoreSec = document.getElementById("highScores");
  var ulTag = document.createElement("ul");
  var liTag = document.createElement("li");
  highScoreSec.appendChild(ulTag);
  ulTag.appendChild(liTag);
  hiScore = window.localStorage.getItem("Initials");
  liTag.textContent = "Score: " + input.initials + " : " + input.score;
});
