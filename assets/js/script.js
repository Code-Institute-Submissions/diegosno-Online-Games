let userScore = 0;
let cpuScore = 0;

const cpuOptions = ["rock", "paper", "scissors"];
const options = document.getElementsByClassName("button");
for (let i = 0; i < options.length; i++) {
  options[i].addEventListener("click", () => {
    const cpuNumber = Math.floor(Math.random() * cpuOptions.length);
    const cpuChoice = cpuOptions[cpuNumber];
    console.log(cpuChoice);
  });
}
