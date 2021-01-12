// import functions and grab DOM elements
const numberGuessed = document.getElementById('input-box');
const submitButton = document.getElementById('submit-button');
const secretGuessesLeft = document.getElementById('secret-guesses-left');
const wrongAnswer = document.getElementById('wrong-answer');
const endResult = document.getElementById('end-result');
const randomNumber = Math.ceil(Math.random() * 20);
let guessesLeft = 4;
submitButton.addEventListener('click', () => {
    const winString = 'You guessed the number!';
    const tooLow = 'Your guess was too low!';
    const tooHigh = 'Your guess was too high!';
    
    
    guessesLeft--;


     if (numberGuessed.value == randomNumber) {
       endResult.textContent = winString; }
       
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

         
    
   

});
