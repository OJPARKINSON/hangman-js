

var guess, word, guesses = 0,incorrectguesses = 0;
let wordSplit = [];
let LettersGuessed = {};
let display = [];
let wrongg = 0;
let goAgain = document.getElementById("BtnAgain");
document.getElementById("TbxGuess", "btnguess").disabled = true; //disables the buttons before the game has started

function start() {
	wrongg -= wrongg;
	guesses -= guesses;
	word -= word; //resets the word for multiple goes
	display -= display;
	wordSplit -= wordSplit;
	words = prompt("Please enter a word for player two to guess: ");
	document.getElementById("TbxGuess", "btnguess").disabled = false; //enables the game again
	word = words.toLowerCase();
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
	guess = document.getElementById("TbxGuess").value;
	document.getElementById("TbxGuess").value = "";
	guesses = guesses + 1;
}

function singleGuess() {
	if (guess == " ") {
		exit();
	}
	var wrongcount = 0; //sets the cout every guess so that if non of the words match the back turns red
	var valiset = display.length + 1; //makes sure that the wrong and correct letters are split
	for (count = 0; count <= (display.length); count++){
		if (wordSplit[count] == guess) { 	//checks each letter compared with the letter that was guessed
			display.splice(count, 1, guess); //gets red of the _ in the guessed words places and puts it in
			document.getElementById("interactiveColor").style.background = "green"; //Changes the background colour if correct
		} else if (guess != wordSplit[count] && LettersGuessed.display.indexOf(guess) === -1) { //gets one insted of the word length ammount
			LettersGuessed.display += guess;
			LettersGuessed.new += guess + ", ";
		} if (guess != wordSplit[count]) { //gets the wrong guesses
			 wrongcount++;
			if (wrongcount == valiset) { //makes sure that the guess is wrong
				document.getElementById("interactiveColor").style.background = "#b14c5a"; //changes the background of the word display
				wrongg++;
			}
		}
	}
	displayUpdate()
}
function displayUpdate() {
	document.getElementById("wordDisplay").innerHTML = (display);
	document.getElementById("incorrectLetters").innerHTML = (LettersGuessed.new);
	if (wrongg >= 9) {
		wrongg = 9;
	} //maxes the img as it will go unidifined
	var img = ["hang1.png", "hang2.png", "hang3.png", "hang4.png", "hang5.png", "hang6.png", "hang7.png", "hang8.png", "hang9.png", "hang10.png"]
	document.getElementById('hangman').src = img[wrongg];
}
var input = document.getElementById("TbxGuess");
input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    guessing()
	singleGuess()
  }
});
