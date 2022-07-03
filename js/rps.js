//Choose computer's selection randomly
function computerPlay() {
    random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return "rock";
    }
    if (random === 1) {
        return "paper";
    }
    if (random === 2) {
        return "scissors"
    }
    return null;
}

//Capitalize selection for message
function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
}

//Determines win or loss
function playRound(playerSelection, computerSelection) {
    let winMessage = "You Win! " + capitalize(playerSelection) + " beats " + capitalize(computerSelection);
    let loseMessage = "You Lose! " + capitalize(computerSelection) + " beats " + capitalize(playerSelection);
    let tieMessage = "Tied! You both selected " + capitalize(playerSelection);

    if (playerSelection === "rock") {
        if (computerSelection === "paper" || computerSelection == "rock") {
            return 0;
        }
    }

    if (playerSelection === "paper") {
        if (computerSelection === "scissors" || computerSelection == "paper") {
            return 0;
        }
    }

    if (playerSelection === "scissors") {
        if (computerSelection === "rock" || computerSelection == "scissors") {
            return 0;
        }
    }

    return 1;
}

//Prints results of round
function printResults(playerSelection, computerSelection) {
    let winMessage = "You Win! " + capitalize(playerSelection) + " beats " + capitalize(computerSelection);
    let loseMessage = "You Lose! " + capitalize(computerSelection) + " beats " + capitalize(playerSelection);
    let tieMessage = "Tied! You both selected " + capitalize(playerSelection);

    let result = playRound(playerSelection, computerSelection);

    if (result === 0 && playerSelection === computerSelection) {
        console.log(tieMessage);
    } else if (result === 0) {
        console.log(loseMessage);
    }
    
    if (result === 1) {
        console.log(winMessage);
    }
}

//Verifies valid player selection
function verifyPlayerSelection(playerSelection) {
    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
        return true;
    }
    console.log("Please enter a valid selection!");
    return false;
}

//Plays a match of 5 rounds and display results
function game() {
    let playerSelection;
    let computerSelection;
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Game " + (i + 1) + ": Rock, Paper, or Scissors?").toLowerCase();
        while (verifyPlayerSelection(playerSelection) === false) {
            playerSelection = prompt("Game " + (i + 1) + ": Rock, Paper, or Scissors?").toLowerCase();
        }
        computerSelection = computerPlay();
        printResults(playerSelection, computerSelection);
        if (playRound(playerSelection, computerSelection) === 1) {
            playerScore++;
        }
        if (playRound(playerSelection, computerSelection) === 0 && playerSelection != computerSelection) {
            computerScore++;
        }
    }

    if (playerScore > computerScore ) {
        console.log("You Win!!! Score: " + playerScore + " vs " + computerScore);
    } else if (computerScore > playerScore) {
        console.log("You Lose!!! Score: " + playerScore + " vs " + computerScore);
    } else {
        console.log("TIED!!! Score: "  + playerScore + " vs " + computerScore);
    }
}

alert("Press F12 (Chrome) to View Console to Play!");
game();

