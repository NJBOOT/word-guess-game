
// Declare global variables
// Generate random word from array of words. 
var animal = ["llama", "alligator", "iguana", "hedgehog", "raccoon", "moose", "rabbit", "walrus", "parakeet", "whale"]
var secretWord = animal[Math.floor(Math.random() * animal.length)];
var answerArray = [];
var userLetterGuessed = [];


// Display empty-string of the secret word

for (var i=0; i < secretWord.length;i++) {
    answerArray[i] = " _";
    console.log(secretWord);
    document.getElementById("word-string").innerHTML = answerArray;
}

// Capture user letter 
// If userLetter is a letter in secretWord, then 1) update answerArray "_" with userLetter and 2) Decrease guesses left by 1

document.onkeyup = function (event){
    var userLetter = event.key;
}

