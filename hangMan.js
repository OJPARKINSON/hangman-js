var guess, word;
let wordSplit = [];
let LettersGuessed = {};
let display = [];
let correctLetters = [];
let goAgain = document.getElementById("BtnAgain");

window.onload = function start() {
	word = prompt("Please enter a word for player two to guess: ");
	setup()
}

function setup() {
	document.getElementById("wordDisplay").innerHTML = (display = "_".repeat(word.length).split(""));
	document.getElementById("incorrectLetters").innerHTML = (LettersGuessed.new = "Letters that have been guessed: ");
	wordSplit = word.split("");
	LettersGuessed.display = " ";
	goAgain.disabled = true;
	displayUpdate();
}

function anotherGo() {
	word -= word; //resets the word for multiple goes
	display -= display;
	wordSplit -= wordSplit;
	correctLetters -= correctLetters;
	LettersGuessed.display = " ";
	word = prompt("Please enter a word for player two to guess: ");
	document.getElementById("wordDisplay").innerHTML = (display = "_".repeat(word.length).split(""));
	document.getElementById("incorrectLetters").innerHTML = LettersGuessed.new;
	wordSplit = word.split("");
	goAgain.disabled = true;
	document.getElementById("interactiveColor").style.background = "#d12141";
	displayUpdate();
}

function displayUpdate() {
	document.getElementById("wordDisplay").innerHTML = (display);
	document.getElementById("incorrectLetters").innerHTML = (LettersGuessed.new);
}

function guessing() {
	guess = document.getElementById("TbxGuess").value;
	document.getElementById("TbxGuess").value = "";
}

function singleGuess() {
	console.log(LettersGuessed.display.indexOf(guess));
	for (count = 0; count <= (display.length); count++){
		if (wordSplit[count] == guess) {
			display.splice(count, 1, guess);
			document.getElementById("interactiveColor").style.background = "green"; //Changes the background colour if correct
			correctLetters++;
		} else {
			if (guess != wordSplit[count] && LettersGuessed.display.indexOf(guess) === -1) {
				document.getElementById("interactiveColor").style.background = "red"; 
				LettersGuessed.display += guess;
				LettersGuessed.new += guess + ", ";
			}
		}
	}
	displayUpdate()
	if (correctLetters === word.length) {
		goAgain.disabled = false; //allows the button to be pressed
	}
}
