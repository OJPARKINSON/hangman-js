let guess = "";
let wordSplit = [];
let LettersGuessed = {};
let display = [];
let correctLetters = [];
let word = "";
let goAgain = document.getElementById("BtnAgain");

window.onload = function start() {
	word = prompt("Please enter a word for player two to guess: ");
	display = "_".repeat(word.length).split("");
	document.getElementById("wordDisplay").innerHTML = display;
	document.getElementById("incorrectLetters").innerHTML = LettersGuessed.new;
	wordSplit = word.split("");
	goAgain.disabled = true;
	displayUpdate();
}

function anotherGo() {
	word -= word; //resets the word for multiple goes
	display -= display;
	wordSplit -= wordSplit;
	correctLetters -= correctLetters;
	LettersGuessed.new = "Letters that have been guessed: ";
	LettersGuessed.display = " ";
	word = prompt("Please enter a word for player two to guess: ");
	display = "_".repeat(word.length).split("");
	document.getElementById("wordDisplay").innerHTML = display;
	document.getElementById("incorrectLetters").innerHTML = LettersGuessed.new;
	wordSplit = word.split("");
	goAgain.disabled = true;
	document.getElementById("interactiveColor").style.background = "#d12141"
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
	}
	displayUpdate()
	check()
}

function check() {
	if (correctLetters === word.length) {
		console.log("well done");
		goAgain.disabled = false;
		document.getElementById("interactiveColor").style.background = "green";
	} else {
		console.log("keep going");
	}
}
