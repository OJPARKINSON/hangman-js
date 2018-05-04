let guess = "";
let wordSplit = [];
let LettersGuessed = {};
let display = [];
let correctLetters = [];
let word = "";

window.onload = function start() {
	word = prompt("Please enter a word for player two to guess: ");
	display = "_".repeat(word.length).split("");
	document.getElementById("wordDisplay").innerHTML = display;
	document.getElementById("incorrectLetters").innerHTML = LettersGuessed.new;
	wordSplit = word.split("");
	displayUpdate();
}

function anotherGo() {
	word = ""; //resets the word for multiple goes
	word = prompt("Please enter a word for player two to guess: ");
	display = "_".repeat(word).split("");
	document.getElementById("wordDisplay").innerHTML = display;
	document.getElementById("incorrectLetters").innerHTML = LettersGuessed.new;
	wordSplit = word.split("");
	displayUpdate();
}
LettersGuessed.new = "Letters that have been guessed: "
LettersGuessed.display = " ";
function displayUpdate() {
	document.getElementById("wordDisplay").innerHTML = (display);
	document.getElementById("incorrectLetters").innerHTML = (LettersGuessed.new);
}

function guessing() {
	guess = document.getElementById("TbxGuess").value;
}

function singleGuess() {
	for (count = 0; count <= (display.length); count++){
		if (wordSplit[count] == guess) {
			display.splice(count, 1, guess);
			correctLetters++;
		} else {
			if (guess != wordSplit[count] && LettersGuessed.display.indexOf(guess) === -1) {
				LettersGuessed.display += guess;
				LettersGuessed.new += guess + ", ";
			}
		}
	}displayUpdate()
	 check()
}

function check() {
	if (correctLetters === word.length) {
		console.log("well done");
	}
}
