document.addEventListener("DOMContentLoaded", function () {
let userScore = 0;
let cpuScore = 0;
const cpuOptions = ["rock", "paper", "scissors"];
const options = document.getElementsByClassName("button");
const userChoiceSpan = document.getElementById("user-choice");
const cpuChoiceSpan = document.getElementById("cpu-choice");


for (let i = 0; i < options.length; i++) {
  options[i].addEventListener("click", (event) => {
    const userChoice = event.target.textContent;
    userChoiceSpan.textContent = userChoice;
    const cpuNumber = Math.floor(Math.random() * cpuOptions.length);
    const cpuChoice = cpuOptions[cpuNumber];
    cpuChoiceSpan.textContent = cpuChoice;
  });
}


