
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





$(document).ready(function() {

      wordSelected = wordSelection[Math.floor(Math.random()*wordSelection.length)];
        console.log(wordSelection);
       lettersOfAWord = wordSelected.split("");
       console.log(lettersOfAWord);
       lWord = lettersOfAWord.length;
        console.log(lWord);



        for (var i = 0; i<lWord; i++) {
        	elseGuess.push("_ ");
        }
        console.log(elseGuess);

        $("#word").html(elseGuess);
        $("#numOfTries").html(guessLeft);



    function checkIfMatch (letter) {
        isMatch = false;

        for (var i = 0; i < lWord; i++) {
        	if (wordSelected[i] == letter) {
        		isMatch = true;
        		correctLetter = letter
        		console.log(isMatch);
			 }
		console.log(isMatch);
		}
     }


	 document.onkeyup = function(event) {

      var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		checkIfMatch(userGuess);
		console.log(userGuess);

		if(isMatch == true){

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
			if (true == isDone){
				winCount++;
				$("#word").html(elseGuess);

				console.log(winCount)
				
				alert("You guessed correctly the word " + wordSelected + "!");
			
			$("#seeing").html("Welcome! Push any letter");
			$("#hand-1").attr('src', 'assets/images/img-1.jpg');
			}

		}


		if ((isMatch == false) && (guessLeft == 5)) {
			guessLeft--;
			$("#incor").html(userGuess);
			$("#seeing").html("That's okay");
			$("#numOfTries").html(guessLeft);
			$("#hand-1").attr('src', 'assets/images/img-2.jpg');
		
		} else if((isMatch == false) && (guessLeft == 4)) {
			guessLeft--;
			$("#incor").append(", " + userGuess);
			$("#seeing").html("You still have planty of tries");
			$("#numOfTries").html(guessLeft);
			$("#hand-1").attr('src', 'assets/images/img-3.jpg');	
		
		} else if((isMatch == false) && (guessLeft == 3)) {
			guessLeft--;
			$("#incor").append(", " + userGuess);
			$("#seeing").html("Maybe you shoud try...");
			$("#numOfTries").html(guessLeft);
			$("#hand-1").attr('src', 'assets/images/img-4.jpg');

		} else if((isMatch == false) && (guessLeft == 2)) {
			guessLeft--;
			$("#incor").append(", " + userGuess);
			$("#seeing").html("Be carful now...");
			$("#numOfTries").html(guessLeft);
			$("#hand-1").attr('src', 'assets/images/img-5.jpg');

		} else if((isMatch == false) && (guessLeft == 1)) {
			guessLeft--;
			$("#incor").append(", " + userGuess);
			$("#seeing").html("Oh...");
			$("#numOfTries").html(guessLeft);
			$("#hand-1").attr('src', 'assets/images/img-6.jpg');
			looseCount++;

		} else if((isMatch == false) && (guessLeft == 0)) {
			$("#incor").empty();
			$("#seeing").html("Oh...");
			$("#numOfTries").empty();
			$("#hand-1").attr('src', 'assets/images/img-6.jpg');
			looseCount++;
			$("#word").empty();
		}

		 $("#button-left").on("click", function() {
        alert("You Won: " + winCount + " and you lost: " + looseCount);    
		});

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
		        wordSelected = wordSelection[Math.floor(Math.random()*wordSelection.length)];
		        console.log(wordSelection);
		       lettersOfAWord = wordSelected.split("");
		       console.log(lettersOfAWord);
		       lWord = lettersOfAWord.length;
		        console.log(lWord);  


		        for (var i = 0; i<lWord; i++) {
		        	elseGuess.push("_ ");
		        }
		        console.log(elseGuess);

		        $("#word").html(elseGuess);
		        $("#numOfTries").html(guessLeft);

    	});

        $("#button-right").on("click", function() {
        alert(wordSelected);
    	});

	}

});


