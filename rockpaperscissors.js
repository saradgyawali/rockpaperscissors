////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////
var winner = "";
var playerMove = "";
var computerMove = "";

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    function getWinner (playerMove,computerMove) {
        var winner;
        if (playerMove === "rock") {
            if (computerMove === "rock") {
                winner = "tie";
            }
            else if (computerMove === "paper") {
                winner = "computer";
            }
            else {
                winner = "player";
            }
        }

        else if (playerMove === "scissors") {
            if (computerMove === "scissors") {
                winner = "tie";
            }
            else if (computerMove === "rock") {
                winner = "computer";
            }
            else {
                winner = "player";
            }
        }
        else if ( computerMove === "paper") {
            winner = "tie";
        }
        else if (computerMove === "scissors") {
            winner = "computer";
        }
        else {
            winner = "player";
        }
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < 5 && computerWins < 5) {
        playerMove = getPlayerMove();
        computerMove = getComputerMove();
        winner = getWinner(playerMove,computerMove);

        if (winner === "player") {
            console.log ("Player chose" + playerMove + "and computer chose" + computerMove + "Player wins this round");
            playerWins++;
        }
        else if (winner === "computer") {
            console.log("Player chose" +playerMove + "and computer chose" + computerMove +"Computer wins this round");
            computerWins++
        }
        else if (winner === "tie") {
            console.log("This round is a tie");
        }

        

    return [playerWins, computerWins];
}

