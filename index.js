/* I want to make a function that
plays against the computer which
returns rock paper or scissors.

It needs to allow for user input in 
order to work correctly.
*/
  
  



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







