let guess = {};
let wordSplit = {};
let incorrectLetters = {};
let display = {};
window.onload = function start() {
	word = prompt("Please enter a word for player two to guess: ");
	display.new = "_".repeat(word.length).split("");
	document.getElementById("wordDisplay").innerHTML = display.new;
	document.getElementById("incorrectLetters").innerHTML = incorrectLetters.new;
	wordSplit.new = word.split("");
	console.log(wordSplit.new);
	displayUpdate();
}
function displayUpdate() {
	document.getElementById("wordDisplay").innerHTML = (display.new);
		document.getElementById("incorrectLetters").innerHTML = incorrectLetters.new;
}
function guessing() {
	guess.new = document.getElementById("TbxGuess").value;}
function check() {
	for (count = 0; count <= (display.new.length); count++){
		if (wordSplit.new[count] == guess.new) {
			console.log(guess.new, " is correct");
			display.new.splice(count, 1, guess.new);
			displayUpdate();
		} else {
			console.log("Incorrect");
			incorrectLetters.new += guess.new;
			displayUpdate();
		}
	}
}
