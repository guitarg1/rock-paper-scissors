/* I want to make a function that
plays against the computer which
returns rock paper or scissors.

It needs to allow for user input in 
order to work correctly.
*/
  
  

/*

let userWins = 0;
    let computerWins = 0;
    
    function playGame() {
      for (let i = 0; i < 5; i++) {
        const userChoice = prompt("Choose Rock, Paper, or Scissors:").toLowerCase();
        const choices = ["rock", "paper", "scissors"];
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        
        alert("You chose: " + userChoice);
        alert("Computer chose: " + computerChoice);
        
        const result = determineWinner(userChoice, computerChoice);
        alert(result);

        if (result === "You win!") {
          userWins++;
        } else if (result === "Computer wins!") {
          computerWins++;
        }
      }
      
      alert(`Game Over!\nYou won ${userWins} times.\nComputer won ${computerWins} times.`);
      
      if (userWins > computerWins) {
        alert("You are the overall winner!");
      } else if (userWins < computerWins) {
        alert("Computer is the overall winner!");
      } else {
        alert("It's a tie overall!");
      }
    }
    
    function determineWinner(userChoice, computerChoice) {
      userChoice = userChoice.toLowerCase();
      if (userChoice === computerChoice) {
        return "It's a tie!";
      }
      
      if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
      ) {
        return "You win!";
      } else if (
        (userChoice === "scissors" && computerChoice === "rock") ||
        (userChoice === "rock" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "scissors")
      ) {
        return "Computer wins!";
      }
    }
    
    playGame();
*/

// does this work
let playerScore = 0;
        let computerScore = 0;
        const winningScore = 5;
        
        function computerPlay() {
            const choices = ['rock', 'paper', 'scissors'];
            const randomIndex = Math.floor(Math.random() * choices.length);
            return choices[randomIndex];
        }
        
        function playRound(playerSelection, computerSelection) {
            if (playerSelection === computerSelection) {
                return 'It\'s a tie!';
            } else if (
                (playerSelection === 'rock' && computerSelection === 'scissors') ||
                (playerSelection === 'paper' && computerSelection === 'rock') ||
                (playerSelection === 'scissors' && computerSelection === 'paper')
            ) {
                playerScore++;
                return 'You win this round!';
            } else {
                computerScore++;
                return 'Computer wins this round!';
            }
        }
        
        function updateScore() {
            document.getElementById('player-score').textContent = playerScore;
            document.getElementById('computer-score').textContent = computerScore;
        }
        
        function checkWinner() {
            if (playerScore === winningScore) {
                document.getElementById('round-result').textContent = 'Congratulations! You win the game!';
                disableButtons();
            } else if (computerScore === winningScore) {
                document.getElementById('round-result').textContent = 'Computer wins the game!';
                disableButtons();
            }
        }
        
        function disableButtons() {
            document.getElementById('rock').disabled = true;
            document.getElementById('paper').disabled = true;
            document.getElementById('scissors').disabled = true;
            document.getElementById('play-again').style.display = 'block';
        }
        
        function enableButtons() {
            document.getElementById('rock').disabled = false;
            document.getElementById('paper').disabled = false;
            document.getElementById('scissors').disabled = false;
            document.getElementById('play-again').style.display = 'none';
        }
        
        function playGame(playerSelection) {
            const computerSelection = computerPlay();
            const roundResult = playRound(playerSelection, computerSelection);
            document.getElementById('round-result').textContent = roundResult;
            updateScore();
            checkWinner();
        }
        
        document.getElementById('rock').addEventListener('click', () => playGame('rock'));
        document.getElementById('paper').addEventListener('click', () => playGame('paper'));
        document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));
        
        document.getElementById('play-again').addEventListener('click', () => {
            playerScore = 0;
            computerScore = 0;
            updateScore();
            enableButtons();
            document.getElementById('round-result').textContent = 'Choose an option:';
        });