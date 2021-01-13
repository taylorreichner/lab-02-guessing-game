// import functions and grab DOM elements
const numberGuessed = document.getElementById('input-box');
const submitButton = document.getElementById('submit-button');
const secretGuessesLeft = document.getElementById('secret-guesses-left');
const endResult = document.getElementById('end-result');
let randomNumber = Math.ceil(Math.random() * 20);
let guessesLeft = 4;
const resetButton = document.getElementById('reset-button');



submitButton.addEventListener('click', () => {
    const winString = 'You guessed the number!';
    const tooLow = 'Your guess was too low!';
    const tooHigh = 'Your guess was too high!';
    
    guessesLeft--;

    if (numberGuessed.value == randomNumber) {
       endResult.textContent = winString }
       
    if (numberGuessed.value < randomNumber) {
        endResult.textContent = tooLow }
    
    if (numberGuessed.value > randomNumber) {
        endResult.textContent = tooHigh }

        const numberOfGuesses = `You have ${guessesLeft} guesses Left!`;

    if (numberGuessed.value) {
        secretGuessesLeft.textContent = numberOfGuesses }

       const youLose = 'You failed to guess the correct number';
        
    if (guessesLeft == 0) {
            endResult.textContent = youLose } 

    if (guessesLeft == 0, numberGuessed.value == randomNumber) {
        endResult.textContent = winString }
    
});
resetButton.addEventListener('click', () => {
    //reset state
    guessesLeft = 4;
    //reset DOM
    randomNumber = Math.ceil(Math.random() * 20);
    
    
});