/*
Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. 
The items are compared, and whichever player chooses the more powerful item wins.

The possible outcomes are:
- Rock destroys scissors.
- Scissors cut paper.
- Paper covers rock.
- If there’s a tie, then the game ends in a draw.

Our code will break the game into four parts:
- Get the user’s choice.
- Get the computer’s choice.
- Compare the two choices and determine a winner.
- Start the program and display the results.
*/

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors" /* || userInput === "bomb" */) {
      return userInput;
    } else {
      return userInput = "USER ERROR";
    }
  }
  
  const getComputerChoice = () => {
    computerInput = Math.floor(Math.random() * 3);
    if (computerInput === 0) {
      return computerInput = "rock";
    } else if (computerInput === 1) {
      return computerInput = "paper";
    } else if (computerInput === 2) {
      return computerInput = "scissors";
    } else {
      return computerInput = "COMPUTER ERROR";
    }
  }
  
  const determineWinner = function(userChoice, computerChoice) {
    /* if (userChoice === "bomb") {
      return "USER WINS WITH EXPLOSION!"
    } */
  
    if (userChoice === computerChoice) {
      return "Game was a tie."
    }
  
    if (userChoice === "rock" ) {
      if (computerChoice === "paper") {
        return "Computer wins."
      } else {
        return "User wins."
      }
    }
  
    if (userChoice === "paper") {
      if (computerChoice === "scissors") {
        return "Computer wins."
      } else {
        return "User wins."
      }
    }
    
    if (userChoice === "scissors") {
      if (computerChoice === "rock") {
        return "Computer wins."
      } else {
        return "User wins."
      }
    }
  }
  
  function playGame() {
    userChoice = getUserChoice("rock");
    console.log(userChoice);
  
    computerChoice = getComputerChoice();
    console.log(computerChoice);
  
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();