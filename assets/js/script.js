const cpuSelection = document.getElementById("cpuselection");
const userSelection = document.getElementById("userselection");
const result = document.getElementById("result");
const possibleOptions = document.getElementById("button");

function chooseOption() {
  const options = ["rock", "paper", "scissor"];
}

possibleOptions.forEach((button) => {
  button.addEventListener("click", (event) => {
    userChoice = e.target.id;
  });
});

let user;
let cpu;
let outcome;
