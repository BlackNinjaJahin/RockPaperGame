let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIndx = Math.floor(Math.random() * 3); // Removed unnecessary square brackets
  return options[randIndx];
};

const drawGame = () => {
  msg.innerText = "Draw! Play Again"; // Fixed capitalization for clarity
};

const showWinner = (userWin, userChoice, CompChoice) => {
  if (userWin) {
    userScore++; // Increment user score
    userScorePara.innerText = userScore; // Update the user score on the page
    msg.innerText = `You won! Your ${userChoice} beats Computer's ${CompChoice}`;
    msg.style.backgroundColor = "green"; // Set the background color for a win
  } else {
    compScore++; // Increment computer score
    compScorePara.innerText = compScore; // Update the computer score on the page
    msg.innerText = `You lost! Computer's ${CompChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red"; // Set the background color for a loss
  }
};

const playGame = (userChoice) => {
  let userWin = true; // Default userWin to true
  console.log("userChoice =", userChoice);
  const CompChoice = genCompChoice();
  console.log("CompChoice =", CompChoice);

  if (userChoice === CompChoice) {
    drawGame(); // Call drawGame when there is a tie
  } else {
    if (userChoice === "rock") {
      userWin = CompChoice === "paper" ? false : true; // Determine win or loss
    } else if (userChoice === "paper") {
      userWin = CompChoice === "scissors" ? false : true; // Determine win or loss
    } else {
      userWin = CompChoice === "rock" ? false : true; // Determine win or loss
    }
    showWinner(userWin, userChoice, CompChoice); // Call showWinner with the result
  }
};

choices.forEach(choice => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id"); // Get the ID of the clicked element
    playGame(userChoice); // Start the game with the user's choice
  });
});
