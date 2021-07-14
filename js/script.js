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
