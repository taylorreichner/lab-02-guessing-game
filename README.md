# EDIT-THIS-README
# guess a number app

## HTML setup
1) number input
    - so the user can enter guesses
2) button
    - to submit the guess and trigger state changes
3) guess remaining span
    - to display remaining guesses
4) to high/low and you got it span
        -to tell user whats wrong with their span


1) go grab DOM elements with ID
2) initialize state  (our gloabl lets)
    - random number: n
    - guesses remaining to: 5
3) add event listener to button
    - On click
        1) state: decrement remaining guesses by 1 (__)
        2) store user guess in variable (`number(someInput.value)`)
        3) compare user guess with random number
        4) VIEW:
            a) if user guess is greater then random number, inject 'too high' into our results span
            b) if user guess is less then random number, inject 'too low' into our results span
            c) is user is equal to random number, congradualte the user.
                - disable input if theyw win
            5) check if there are any guesses left, if not, disable input and add losing message
            