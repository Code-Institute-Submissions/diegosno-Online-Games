function chooseOption() {
  const options = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * options.length);
  const chosenOption = options[randomIndex];
}
const button = document.getElementById("button");
