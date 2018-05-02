let guess = {};
let wordSplit = {};
let LettersGuessed = {};
LettersGuessed.new += "Letters that have been guessed: "
let display = {};


window.onload = function start() {
	word = prompt("Please enter a word for player two to guess: ");

	display.new = "_".repeat(word.length).split("");
	document.getElementById("wordDisplay").innerHTML = display.new;
	document.getElementById("incorrectLetters").innerHTML = LettersGuessed.new;
	wordSplit.new = word.split("");
	console.log(wordSplit.new);
	displayUpdate();
}

function anotherGo() {
	word = "";
	word = prompt("Please enter a word for player two to guess: ");
	display.new = "_".repeat(word.length).split("");
	document.getElementById("wordDisplay").innerHTML = display.new;
	document.getElementById("incorrectLetters").innerHTML = LettersGuessed.new;
	wordSplit.new = word.split("");
	console.log(wordSplit.new);
	displayUpdate();
}

LettersGuessed.display = "";
function displayUpdate() {
	document.getElementById("wordDisplay").innerHTML = (display.new);
	document.getElementById("incorrectLetters").innerHTML = LettersGuessed.new;
}

function guessing() {
	guess.new = document.getElementById("TbxGuess").value;
}

function check() {
	for (count = 0; count <= (display.new.length); count++){

		if (wordSplit.new[count] == guess.new) {
			console.log(guess.new, " is correct");
			display.new.splice(count, 1, guess.new);
		} else {
			console.log("Incorrect");
			if (guess.new != wordSplit.new[count] && LettersGuessed.display.indexOf(guess.new) === -1) {
				LettersGuessed.display += guess.new;
				LettersGuessed.new += guess.new + ", ";
			}
		}
		displayUpdate()
	}
}
