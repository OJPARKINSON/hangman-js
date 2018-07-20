var guess, word, guesses = 0,incorrectguesses = 0;
let wordSplit = [];
let LettersGuessed = {};
let display = [];
let goAgain = document.getElementById("BtnAgain");

function start() {
	guesses -= guesses;
	word -= word; //resets the word for multiple goes
	display -= display;
	wordSplit -= wordSplit;
	words = prompt("Please enter a word for player two to guess: ");
	word = words.toLowerCase();
	setup()
}

function setup() {
	document.getElementById("wordDisplay").innerHTML = (display = "_".repeat(word.length).split(""));
	document.getElementById("incorrectLetters").innerHTML = (LettersGuessed.new = "Letters that have been guessed: ");
	wordSplit = word.split("");
	LettersGuessed.display = " ";
	displayUpdate();
}

function guessing() {
	guess = document.getElementById("TbxGuess").value;
	document.getElementById("TbxGuess").value = "";
	guesses = guesses + 1;
}

function singleGuess() {
	var wrongcount = 0; //sets the cout every guess so that if non of the words match the back turns red
	var valiset = display.length + 1
	for (count = 0; count <= (display.length); count++){
		if (wordSplit[count] == guess) {
			display.splice(count, 1, guess);
			document.getElementById("interactiveColor").style.background = "green"; //Changes the background colour if correct
		} else if (guess != wordSplit[count] && LettersGuessed.display.indexOf(guess) === -1) {
			LettersGuessed.display += guess;
			LettersGuessed.new += guess + ", ";
		} if (guess != wordSplit[count]) {
			 wrongcount++;
			if (wrongcount == valiset) {
				document.getElementById("interactiveColor").style.background = "#b14c5a";
			}
		}
	}
	displayUpdate()
	displayimg()

}

function displayUpdate() {
	document.getElementById("wordDisplay").innerHTML = (display);
	document.getElementById("incorrectLetters").innerHTML = (LettersGuessed.new);
}

function displayimg() {
	var img = ["hang1.png", "hang2.png", "hang3.png", "hang4.png", "hang5.png", "hang6.png", "hang7.png", "hang8.png", "hang9.png", "hang10.png", "hang11.png"]
	document.getElementById('hangman').src = img[0];
}
