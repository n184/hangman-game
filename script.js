
var wordSelection = ["goodbye", "rhythm", "necklace", "jacket", "backwards", "chair"];
var wordSelected = " ";
var lettersOfAWord = [];
var lward = 0;
var isMach = false;
var wrongGuess = [];
var elseGuess = [];
var guessLeft = 6;
var gameCount = 0;
var winCount = 0;
var looseCount = 0;


		/*
			var Seeings = ["Welcome! Push any letter", "That's okay", "You still have planty of tries", "Maybe you shoud try...",
			"Be carful now...", "You like to live to the edge", "Oh..."];

    <source id="hand-2" src="assets/images/img-2" type="hand">
    <source id="hand-3" src="assets/images/img-3" type="hand">
    <source id="hand-4" src="assets/images/img-4" type="hand">
    <source id="hand-5" src="assets/images/img-5" type="hand">
    <source id="hand-6" src="assets/images/img-6" type="hand">

		*/


$(document).ready(function() {

      wordSelected = wordSelection[Math.floor(Math.random()*wordSelection.length)];
        console.log(wordSelection);
       lettersOfAWord = wordSelected.split("");
       console.log(lettersOfAWord);
       lWord = lettersOfAWord.length;
        console.log(lWord)



        for (var i = 0; i<lWord; i++) {
        	elseGuess.push("_ ");
        }
        console.log(elseGuess);

        $("#word").html(elseGuess);
        $("#numOfTries").html(guessLeft);


        $("#button-left").on("click", function() {
        alert("I've been clicked!");    
		});

        $("#button-mid").on("click", function() {

    	});

        $("#button-right").on("click", function() {
        alert("The rules of the game are as follow ");
    	});


    function checkIfMach (letter) {
        isMach = false;

        for (var i = 0; i < lWord; i++) {
        	if (wordSelected[i] == letter) {
        		isMach = true;
        		console.log(isMach);
			 }
		console.log(isMach);
		}
     }



	 document.onkeyup = function(event) {
      var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		checkIfMach(userGuess);
		console.log(userGuess);

		if (isMach == false) {
			guessLeft--;
			$("#incor").html(userGuess)
			$("#seeing").html("That's okay");
			$("#numOfTries").html(guessLeft);
			$("#hand-1").attr('src', 'assets/images/hand-2').html("#hand-2");
		}

	}


});


