var Letter = require("./letter.js")


function Word(werd) {
    this.letterArr = [];
    this.compare = "";
    for (var i = 0; i < werd.length; i++) {
        this.letterArr.push(new Letter(werd[i]))
    }
    this.createWerdString = function () {
        var finalWerdString = "";
        for (var j = 0; j < this.letterArr.length; j++) {
            finalWerdString += this.letterArr[j].returnChar() + " ";
        }
        return finalWerdString
    }
    this.guessCheck = function (userInput) {
        for (var x = 0; x < this.letterArr.length; x++) {
            this.letterArr[x].guessCheck(userInput)
        }
    }

}


module.exports = Word;