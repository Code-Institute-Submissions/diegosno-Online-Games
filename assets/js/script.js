const cpuOptions = ["rock", "paper", "scissors"];
const options = document.getElementsByClassName("button");
const userChoiceSpan = document.getElementById("user-choice");
const cpuChoiceSpan = document.getElementById("cpu-choice");
const resultSpan = document.getElementById("result");
const userScoreSpan = document.getElementById("user-score");
const cpuScoreSpan = document.getElementById("cpu-score");
let userScore = 0;
let cpuScore = 0;

for (let i = 0; i < options.length; i++) {
  options[i].addEventListener("click", (event) => {
    const userChoice = event.target.textContent;
    userChoiceSpan.textContent = userChoice;
    const cpuNumber = Math.floor(Math.random() * cpuOptions.length);
    const cpuChoice = cpuOptions[cpuNumber];
    cpuChoiceSpan.textContent = cpuChoice;
    const result = checkResult();
    resultSpan.textContent = result;
  });
}

function checkResult() {
  const userChoice = userChoiceSpan.textContent.toLowerCase();
  const cpuChoice = cpuChoiceSpan.textContent.toLowerCase();
  if (userChoice === cpuChoice) {
    return "Draw!";
  } else if (cpuChoice === "rock") {
    return userChoice === "paper" ? "YAY! YOU WIN" : "AW! TRY AGAIN";
  } else if (cpuChoice === "paper") {
    return userChoice === "scissors" ? "YAY! YOU WIN" : "AW! TRY AGAIN";
  } else if (cpuChoice === "scissors") {
    return userChoice === "rock" ? "YAY! YOU WIN" : "AW! TRY AGAIN";
  }
}

function addPoints(result) {
  switch (true) {
    case result.startsWith("YAY!"):
      userScore++;
      break;
    case result.startsWith("AW!"):
      cpuScore++;
      break;
    default:
      break;
  }
  userScoreSpan.textContent = userScore;
}
