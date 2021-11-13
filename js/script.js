// Unordered list where the player's guessed letters will appear.
const guessedLetters = document.querySelector(".guessed-letters");

// Button with the text "Guess!" in it.
const guessButton = document.querySelector(".guess");

// Text input where the player will guess a letter.
const letterInput = document.querySelector(".letter");

// Empty paragraph where 'word-in-progress' will appear.
const wordInProgressParagraph = document.querySelector(".word-in-progress");

// Paragraph where remaining guesses will display.
const remainingGuesses = document.querySelector(".remaining");

// Span inside the paragraph where remaining guesses will be displayed.
const updatedRemainingGuesses = document.querySelector("remaining span");

// Empty paragraph where will populate upon a playe guessing a letter.
const guessMessage = document.querySelector(".message");

// Hidden button which appears upon the end of the game; prompitng the player to play again.
const playAgainButton = document.querySelector(".play-again");

// Game's 'default' word used for testing.
const word = "magnolia";

// Function responsible for updating the "words-in-progress" element with 'circle' (●) symbols.
const wordUpdate = function (word) {
    const wordUpdateLetters = [];
    for (const letter of word) {
        console.log(letter);
        wordUpdateLetters.push("●");
    }
    wordInProgressParagraph.innerText = wordUpdateLetters.join("");
};

wordUpdate(word);

// Event listener for 'Guess' Button

guessButton.addEventListener("click", function(e) {
    e.preventDefault();
    const guess = letterInput.value;
    console.log(guess);
    letterInput.value = "";
});

// Input validator
const validateInput = function(input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        // Checks to see if input is empty
        message.innerText = "Please enter a letter.";
    } else if (input.length > 1 ) {
        // Checks to see if more than one letter was typed.
        message.innerText = "Please enter a single letter.";
    } else if (!input.match(acceptedLetter)) {
        // Checks to see if user typed a number, a special character or some alternative non-letter thing.
        message.innerText = "Please enter a letter from A to Z.";
    } else {
        // Should now be receiving a single letter. 
        return input;
    }
};

const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        message.innerText = "You already guessed taht letter, silly.  Try again.";
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
    }
};
