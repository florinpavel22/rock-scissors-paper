// DOM QUERIES
const playerScorePara = document.querySelector(".player-area p");
const cpuScorePara = document.querySelector(".cpu-area p");
const resultDescription = document.querySelector(".result__description p");
const gameChoices = Array.from(document.querySelector(".choices").children);

// Global variables
let playerChoice;
let playerScoreCount = 0;
let cpuScoreCount = 0;

// Event Listener
gameChoices.forEach((arr) => {
  arr.addEventListener("click", function (e) {
    const classEvent = e.target.parentNode.className;
    if (classEvent === "rock") {
      playerChoice = "rock";
      decideWinner();
    } else if (classEvent === "paper") {
      playerChoice = "paper";
      decideWinner();
    } else if (classEvent === "scissors") {
      playerChoice = "scissors";
      decideWinner();
    }
  });
});

// CPU makes a random choice
const cpuMakeAChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  let randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
};

// Text functions
const tiedUp = (playerChoice, computerChoice) => {
  if (playerScoreCount >= 5 || cpuScoreCount >= 5) {
    return `Round ended, refresh for a new round.`;
  } else {
    return `Your ${playerChoice} and CPU's ${computerChoice} are <span class="tied">tied up</span>!`;
  }
};

const playerWinner = (playerChoice, computerChoice) => {
  if (playerScoreCount >= 5 || cpuScoreCount >= 5) {
    return `Round ended, refresh for a new round.`;
  } else {
    playerScoreUp();
    return `You <span class="won">won</span>! Your ${playerChoice} won over CPU's ${computerChoice}.`;
  }
};

const cpuWinner = (playerChoice, computerChoice) => {
  if (playerScoreCount >= 5 || cpuScoreCount >= 5) {
    return `Round ended, refresh for a new round.`;
  } else {
    cpuScoreUp();
    return `You <span class="lost">lost</span>! CPU's ${computerChoice} won over your ${playerChoice}.`;
  }
};

// Increase score
const playerScoreUp = () => {
  playerScoreCount++;
  playerScorePara.textContent = playerScoreCount;
};

const cpuScoreUp = () => {
  cpuScoreCount++;
  cpuScorePara.textContent = cpuScoreCount;
};

// Decide a winner
const decideWinner = () => {
  let player = playerChoice;
  let cpu = cpuMakeAChoice();

  if (player === cpu) {
    resultDescription.innerHTML = tiedUp(player, cpu);
  } else if (player === "rock") {
    if (cpu === "paper") {
      resultDescription.innerHTML = cpuWinner(player, cpu);
    } else {
      resultDescription.innerHTML = playerWinner(player, cpu);
    }
  } else if (player === "paper") {
    if (cpu === "scissors") {
      resultDescription.innerHTML = cpuWinner(player, cpu);
    } else {
      resultDescription.innerHTML = playerWinner(player, cpu);
    }
  } else if (player === "scissors") {
    if (cpu === "rock") {
      resultDescription.innerHTML = cpuWinner(player, cpu);
    } else {
      resultDescription.innerHTML = playerWinner(player, cpu);
    }
  }
};
