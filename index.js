var Word = require("./word.js");
var inquirer = require("inquirer")

var wordArray = ["red", "blue", "yellow", "black", "white", "pink", "orange", "purple", "blellow"];
var randomWord = "";
var displayWerd = "";
var finalWerd;
var leftToGuess;
var lives = 6

function newGame() {
    randomWord = "";
    var r = parseInt(Math.floor(Math.random() * (wordArray.length)))
    randomWord = wordArray[r]
    finalWerd = new Word(randomWord)
    leftToGuess = finalWerd.letterArr.length
}

function gameOver() {
    {
        console.log("You Loser!")
        inquirer.prompt([{
            type: "confirm",
            name: "playAgain",
            message: "Wanna play again?"
        }]).then(function (response) {
            if (response.playAgain) {
                newGame()
                print()
                askToGuess();
            } else {
                console.log("well fine, dont play")
            }
        })
    }
}

function displayWord() {
    displayWerd = finalWerd.createWerdString()
    console.log(displayWerd);
    finalWerd.compare = displayWerd
}


function askToGuess() {
    inquirer.prompt([{
        name: "ask",
        message: "Guess the color by guessing a letter. "
    }]).then(function (response) {
        var input = response.ask
        if (lives > 0) {
            if (input.length === 1) {
                finalWerd.guessCheck(input)
                displayWerd = finalWerd.createWerdString()

                if (finalWerd.compare === displayWerd) {
                    console.log("Sorry, no", input, "in the word")
                    lives--
                    console.log("You have", lives, "letters left.")
                    if (lives === 0) {
                        gameOver()
                    } else {
                        print()
                        askToGuess()
                    }
                   
                } else {
                    console.log("Good choice!")
                    leftToGuess--
                    print();
                    if (leftToGuess === 0) {

                        console.log("Hooray. you did it, lets go again!");
                        newGame()
                        print();
                        askToGuess();
                    } else {
                        askToGuess()
                    }
                }

            } else if (input.length === 0) {
                consoel.log("Please choose a letter.");
                askToGuess()
            } else {
                console.log("You can't do that! Only pick one!")
                askToGuess()
            }


        } else {
            gameOver()
        }
    })
}

function print() {
    console.log("\n")
    console.log("----------------------------------------------")
    displayWord()
    console.log("\n----------------------------------------------")
    console.log("\n")
}
newGame()
print()
askToGuess();