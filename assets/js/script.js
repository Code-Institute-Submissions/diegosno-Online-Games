document.addEventListener("DOMContentLoaded", () => {
  const cpuOptions = ["🪨", "🧻", "✂️"];
  const options = document.getElementsByClassName("button");
  const userChoiceSpan = document.getElementById("user-choice");
  const cpuChoiceSpan = document.getElementById("cpu-choice");
  const resultSpan = document.getElementById("result");
  const userScoreSpan = document.getElementById("user-score");
  const cpuScoreSpan = document.getElementById("cpu-score");
  const popupTwo = document.getElementById("popup-two");
  const overlay = document.getElementById("overlay");
  const popupText = document.getElementById("popup-text");
  let userScore = 0;
  let cpuScore = 0;

  const start = document.getElementById("start");
  const popUp = document.getElementById("popup");
  console.log(start);

  function showPopUp() {
    popUp.style.display = "block";
  }
  start.addEventListener("click", showPopUp);

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
    } else if (cpuChoice === "🪨") {
      return userChoice === "🧻" ? "YAY!" : "NAW!";
    } else if (cpuChoice === "🧻") {
      return userChoice === "✂️" ? "YAY!" : "NAW!";
    } else if (cpuChoice === "✂️") {
      return userChoice === "🪨" ? "YAY!" : "NAW!";
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
      popupTwo.style.display = "block";
      overlay.style.display = "block";
      popupText.textContent =
        userScore === 5 ? "YOU WON!" : "CPU WON, TRY AGAIN!";
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
    popupTwo.style.display = "none";
    overlay.style.display = "none";
  }

  const restartButton = document.getElementById("restart");
  restartButton.addEventListener("click", restart);
});
