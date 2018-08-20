var guess, word,incorrectguesses = 0;
let wordSplit = [];
let LettersGuessed = {};
let display = [];
let incorrectguess = 0;
function start() {
	incorrectguess -= incorrectguess; hangmanDisplay()
	word -= word; //resets the word for multiple goes
	display -= display;
	wordSplit -= wordSplit;
	word = prompt("Please enter a word for player two to guess: ").toLowerCase();
	document.getElementById("TbxGuess", "btnguess").disabled = false; //enables the game again
	setup()
}
function setup() {
	document.getElementById("wordDisplay").innerHTML = (display = "_".repeat(word.length).split(""));
	document.getElementById("incorrectLetters").innerHTML = (LettersGuessed.new = "Letters that have been guessed: ");
	wordSplit = word.split("");
	LettersGuessed.display = " ";
	document.getElementById("interactiveColor").style.background = "#444";
	displayUpdate();
}
function guessing() {
	guess = document.getElementById("TbxGuess").value.toLowerCase();
	document.getElementById("TbxGuess").value = "";
}
function singleGuess() {
	var wrongcount = 0; //sets the cout every guess so that if non of the words match the back turns red
	for (count = 0; count <= display.length; count++){
		if (wordSplit[count] == guess) { 	//checks each letter compared with the letter that was guessed
			display.splice(count, 1, guess); //gets red of the _ in the guessed words places and puts it in
			document.getElementById("interactiveColor").style.background = "green"; //Changes the background colour if correct
		} else if (guess != wordSplit[count] && LettersGuessed.display.indexOf(guess) === -1) {  //sees if guess is already in letters guessed
			LettersGuessed.display += guess;
			LettersGuessed.new += guess + ", ";
		} if (guess != wordSplit[count]) {
			if (guess == " " || guess == "") {end();} //makes sure that if a space is in the word it isn't immediately exited
			wrongcount++;
			if (wrongcount == (display.length + 1)) { //makes sure that the guess is wrong
				document.getElementById("interactiveColor").style.background = "#b14c5a"; //changes the background of the word display
				incorrectguess++;
			}  hangmanDisplay()
		}
	}   displayUpdate()
}

function hangmanDisplay() {
	if (incorrectguess >= 9) {incorrectguess = 9;} //maxes the img as it will go unidifined
	var img = ["hang1.png", "hang2.png", "hang3.png", "hang4.png", "hang5.png", "hang6.png", "hang7.png", "hang8.png", "hang9.png", "hang10.png"]
	document.getElementById('hangman').src = ("Resource/" + img[incorrectguess]); //sets the image so that the user sees the hangman
	document.getElementById('hangman').alt = "display of hangman in different states"; //sets an alt tag when the image is displayed
}

function displayUpdate() {
	document.getElementById("wordDisplay").innerHTML = (display);
	document.getElementById("incorrectLetters").innerHTML = (LettersGuessed.new);
}

var input = document.getElementById("TbxGuess"); //enter key can be used to enter a guess
input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    guessing();
	singleGuess();
  }
});
