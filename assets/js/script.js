let userScore = 0;
let cpuScore = 0;

const cpuOptions = ["rock", "paper", "scissors"];
const options = document.getElementsByClassName("button");
options.forEach((option) => {
  option.addEventListener("click", () => {
    const cpuNumber = Math.floor(Math.random() * cpuOptions.length);
    const cpuChoice = cpuOptions[cpuNumber];
  });
});
