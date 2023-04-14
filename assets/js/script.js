const buttons = document.getElementsByClassName("button");
button.addEventListener("click", chooseOption);

function chooseOption() {
  const options = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * options.length);
  const chosenOption = options[randomIndex];

  const resultSpan = document.getElementById("result");
  resultSpan.textContent = chosenOption;
}
