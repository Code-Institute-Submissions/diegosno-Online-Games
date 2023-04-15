const cpuOptions = ["rock", "paper", "scissors"];
const options = document.getElementsByClassName("button");
const userChoiceSpan = document.getElementById("user-choice");
const cpuChoiceSpan = document.getElementById("cpu-choice");
const resultSpan = document.getElementById("result");
const userScoreSpan = document.getElementById("user-score");
const cpuScoreSpan = document.getElementById("cpu-score");
let userScore = 0;
let cpuScore = 0;
const popup = document.getElementById("popup");
const popupText = document.getElementById("popup-text");

for (let i = 0; i < options.length; i++) {
  options[i].addEventListener("click", (event) => {
    const userChoice = event.target.textContent;
    userChoiceSpan.textContent = userChoice;
    const cpuNumber = Math.floor(Math.random() * cpuOptions.length);
    const cpuChoice = cpuOptions[cpuNumber];
    cpuChoiceSpan.textContent = cpuChoice;
    const result = checkResult();
    resultSpan.textContent = result;
    addPoints(result);
  });
}

function checkResult() {
  const userChoice = userChoiceSpan.textContent.toLowerCase();
  const cpuChoice = cpuChoiceSpan.textContent.toLowerCase();
  if (userChoice === cpuChoice) {
    return "DRAW!";
  } else if (cpuChoice === "rock") {
    return userChoice === "paper" ? "YAY!" : "NAW!";
  } else if (cpuChoice === "paper") {
    return userChoice === "scissors" ? "YAY!" : "NAW!";
  } else if (cpuChoice === "scissors") {
    return userChoice === "rock" ? "YAY!" : "NAW!";
  }
}

function addPoints(result) {
  switch (true) {
    case result.startsWith("YAY!"):
      userScore++;
      break;
    case result.startsWith("NAW!"):
      cpuScore++;
      break;
    default:
      break;
  }
  userScoreSpan.textContent = userScore;
  cpuScoreSpan.textContent = cpuScore;

  if (userScore === 5 || cpuScore === 5) {
    popupText.textContent =
      userScore === 5 ? "You won the game!" : "CPU won the game!";
    popup.style.display = "block";
  }
}

function restart() {
  userScore = 0;
  cpuScore = 0;
  userScoreSpan.textContent = userScore;
  cpuScoreSpan.textContent = cpuScore;
  resultSpan.textContent = "";
  userChoiceSpan.textContent = "";
  cpuChoiceSpan.textContent = "";
}
