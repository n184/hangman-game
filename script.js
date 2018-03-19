var wordSelection = ["goodbye", "rhythm", "necklace", "jacket", "backwards", "chair"];
var wordSelected = " ";
var lettersOfAWord = [];
var lword = 0;
var isMatch = false;
var correctLetter = "";
var wrongGuess = [];
var elseGuess = [];
var guessLeft = 5;
var winCount = 0;
var looseCount = 0;
var isDone = false;
var seeing = ["Welcome! Push any letter", "That's okay", "You still have planty of tries", "Maybe you shoud try...", "Be carful now...", "Oh..."];
var changeImg = ["assets/images/img-1.jpg", "assets/images/img-2.jpg", "assets/images/img-3.jpg", "assets/images/img-4.jpg", "assets/images/img-5.jpg", "assets/images/img-6.jpg"];
var x = 1;



$(document).ready(function() {

    wordSelected = wordSelection[Math.floor(Math.random() * wordSelection.length)];
    console.log(wordSelection);
    lettersOfAWord = wordSelected.split("");
    console.log(lettersOfAWord);
    lWord = lettersOfAWord.length;
    console.log(lWord);



    for (var i = 0; i < lWord; i++) {
        elseGuess.push("_ ");
    }
    console.log(elseGuess);

    $("#word").html(elseGuess);
    $("#numOfTries").html(guessLeft);



    function checkIfMatch(letter) {
        isMatch = false;

        for (var i = 0; i < lWord; i++) {
            if (wordSelected[i] == letter) {
                isMatch = true;
                correctLetter = letter

            }
        }
    }


    document.onkeyup = function(event) {

        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        checkIfMatch(userGuess);
        console.log(userGuess);

        if (isMatch == true) {

            for (var i = 0; i < lWord; i++) {
                if (lettersOfAWord[i] === correctLetter) {
                    elseGuess[i] = correctLetter
                }
                console.log(correctLetter);
                $("#word").html(elseGuess);
            }

            isDone = true;
            for (var i = 0; i < lWord; i++) {
                if (elseGuess[i] === "_ ") {
                    isDone = false;
                }
            }
            if (true == isDone) {
                winCount++;
                $("#word").html(elseGuess);
                alert("You guessed correctly the word " + wordSelected + "!");
                $("#seeing").html(seeing[0]);
                $("#hand-1").attr(changeImg[0]);
            }
        }

        if ((isMatch == false) && (guessLeft > 0)) {
            guessLeft--;
            $("#numOfTries").html(guessLeft);
            $("#incor").append(" " + userGuess + " ");
            $("#seeing").html(seeing[x]);
            $("#hand-1").attr('src', changeImg[x]);
            x++;
        }

        else if ((isMatch == false) && (guessLeft == 0)) {
            $("#incor").empty();
            $("#numOfTries").empty();
            looseCount++;
            $("#word").empty();
        }

        $("#button-mid").on("click", function(reset) {
            $("#incor").empty();
            wordSelected = " ";
            lettersOfAWord = [];
            lword = 0;
            isMatch = false;
            correctLetter = "";
            wrongGuess = [];
            elseGuess = [];
            guessLeft = 5;
            isDone = false;
            $("#seeing").html("Welcome! Push any letter");
            $("#hand-1").attr('src', 'assets/images/img-1.jpg');
            x = 1;
            wordSelected = wordSelection[Math.floor(Math.random() * wordSelection.length)];
            console.log(wordSelection);
            lettersOfAWord = wordSelected.split("");
            console.log(lettersOfAWord);
            lWord = lettersOfAWord.length;
            console.log(lWord);


            for (var i = 0; i < lWord; i++) {
                elseGuess.push("_ ");
            }
            console.log(elseGuess);

            $("#word").html(elseGuess);
            $("#numOfTries").html(guessLeft);

        });

    }
    
        $("#button-left").on("click", function() {
            alert("You Won: " + winCount + " and you lost: " + looseCount);
        });

        $("#button-right").on("click", function() {
            alert(wordSelected);
        });
});