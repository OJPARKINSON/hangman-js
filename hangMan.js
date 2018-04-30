var guess = {};
let wordSplit = {};
let wordLenth = {};
let display = {};
window.onload = function start() {
	word = prompt("Please enter a word for player two to guess: ");
	display.new = "_".repeat(word.length).split("");
	console.log(display.new);
	document.getElementById("wordDisplay").innerHTML = display.new;
	document.getElementById("inccorectLetters").innerHTML = wordLenth.new;
	wordLenth.new = "";
	wordSplit.new = word.split("");
	console.log(wordSplit.new);
	displayUpdate();
}
function displayUpdate() {
	document.getElementById("wordDisplay").innerHTML = (display.new)
}
function guessing() {
	guess.new = document.getElementById("TbxGuess").value;
	//console.log(wordSplit.new);
}
function check() {
	let count = 0;
	for (count = 0; count <= (display.new.length); count++) {
		console.log(wordSplit.new.slice(count));
		console.log(guess.new);
		if (wordSplit.new.slice(count) == guess.new) {
			console.log(guess.new, " is correct");
			display.new.splice(count, 1, guess.new); // append *****
		//	console.log(wordSplit.new.indexOf(guess.new));
		//	console.log(guess.new);
			displayUpdate();
		} //else if () {
		//	console.log(guess.new, " is correct");
		//	console.log(wordSplit.new.indexOf(guess.new));
		//	display.new.splice(count, 1, guess.new);s
		//	console.log(count);
		//	displayUpdate(); }
	else {
			console.log("Incorrect");
		}
	}
}
