var guess, word;
let wordSplit = [];
let LettersGuessed = {};
let display = [];
let correctLetters = [];
let goAgain = document.getElementById("BtnAgain");

function start() {
	word -= word; //resets the word for multiple goes
	display -= display;
	wordSplit -= wordSplit;
	correctLetters -= correctLetters;
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

function displayUpdate() {
	document.getElementById("wordDisplay").innerHTML = (display);
	document.getElementById("incorrectLetters").innerHTML = (LettersGuessed.new);
}

function guessing() {
	guess = document.getElementById("TbxGuess").value;
	document.getElementById("TbxGuess").value = "";
}

function singleGuess() {
	for (count = 0; count <= (display.length); count++){
		if (wordSplit[count] == guess) {
			display.splice(count, 1, guess);
			correctLetters++;
			document.getElementById("interactiveColor").style.background = "green"; //Changes the background colour if correct
		} else if (guess != wordSplit[count] && LettersGuessed.display.indexOf(guess) == -1) {
				LettersGuessed.display += guess;
				LettersGuessed.new += guess + ", ";
				document.getElementById("interactiveColor").style.background = "#b14c5a";
		}else if (correctLetters == 1){
				document.getElementById("interactiveColor").style.background = "green"; //making sure the background on the first correct guess goes green
		}
	}
	displayUpdate()
	displayimg()
	if (correctLetters === word.length) {
		goAgain.disabled = false; //allows the button to be pressed
	}
}
function displayimg() {
	var img = ["hang1.png", "hang2.png", "hang3.png", "hang4.png", "hang5.png", "hang6.png", "hang7.png", "hang8.png", "hang9.png", "hang10.png", "hang11.png"]
	document.getElementById('hangman').src = img[10];
}
