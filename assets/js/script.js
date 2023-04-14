const buttons = document.querySelectorAll(".button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", chooseOption);
}

function playRound(event) 

function chooseOption() {
  const options = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * options.length);
  const chosenOption = options[randomIndex];

  const cpuOptionSpan = document.getElementById("cpuoption");
  cpuOptionSpan.textContent = chosenOption;
}

