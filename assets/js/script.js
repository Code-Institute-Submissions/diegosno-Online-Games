const cpuOptions = ["rock", "paper", "scissors"];
const options = document.getElementsByClassName("button");
const userChoiceSpan = document.getElementById("user-choice");
const cpuChoiceSpan = document.getElementById("cpu-choice");
const resultSpan = document.getElementById("result");

for (let i = 0; i < options.length; i++) {
  options[i].addEventListener("click", (event) => {
    const userChoice = event.target.textContent;
    userChoiceSpan.textContent = userChoice;
    const cpuNumber = Math.floor(Math.random() * cpuOptions.length);
    const cpuChoice = cpuOptions[cpuNumber];
    cpuChoiceSpan.textContent = cpuChoice;
  });
}

const checkResult = (userChoice, cpuChoice);
