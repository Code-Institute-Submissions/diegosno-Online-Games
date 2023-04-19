// WAIT FOR DOM TO LOAD
document.addEventListener("DOMContentLoaded", function () {
  // DEFINE GAME OPTIONS
  const cpuOptions = ["🪨", "🧻", "✂️"];
  // GET ELEMENTS TO SET VARIABLES
  const options = document.getElementsByClassName("button");
  const userChoiceSpan = document.getElementById("user-choice");
  const cpuChoiceSpan = document.getElementById("cpu-choice");
  const resultSpan = document.getElementById("result");
  const userScoreSpan = document.getElementById("user-score");
  const cpuScoreSpan = document.getElementById("cpu-score");
  const popUp = document.getElementById("popup");
  const overlay = document.getElementById("overlay");
  const popupText = document.getElementById("popup-text");
  // SET USER AND CPU SCORES TO 0
  let userScore = 0;
  let cpuScore = 0;

  // LOOP THROUGH OPTIONS AND ADD CLICK EVENT LISTENERS
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

  // CHECK GAME RESULT AND UPDATE MESSAGE
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

  // ADD POINTS TO USER AND CPU DEPENDING ON THE RESULT
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
    // CHECK IF SCORE REACHED 5 AND DISPLAY POPUP
    if (userScore === 5 || cpuScore === 5) {
      popUp.style.display = "block";
      overlay.style.display = "block";
      popupText.textContent =
        userScore === 5 ? "YOU WON!" : "CPU WON, TRY AGAIN!";
    }
  }

  // GET REFERENCE TO RESTART BUTTON AND ADD CLICK EVENT LISTENER
  const restartButton = document.querySelector("#restart");
  if (restartButton) {
    restartButton.addEventListener("click", restart);
  }

  // RESET GAME TO INITIAL STATE
  function restart() {
    userScore = 0;
    cpuScore = 0;
    userScoreSpan.textContent = userScore;
    cpuScoreSpan.textContent = cpuScore;
    resultSpan.textContent = "";
    userChoiceSpan.textContent = "";
    cpuChoiceSpan.textContent = "";
    popUp.style.display = "none";
    overlay.style.display = "none";
  }
});
