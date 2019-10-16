1. Player clicks button to start game
    * Button disappears
2. The following items appear on screen:
    * 20 second timer
        * starts counting down immediately
    * 1 trivia question
    * List of 4 answer choices
3. IF the player choices the correct answer:
    * The page will inform the player that they chose the correct answer
    * An image related to the answer will appear on screen
    * Correct answers will increase by 1
    * The page will automatically display the next question and answer set after 5 seconds and the timer will reset to 20
4. ELSE IF the player chooses an incorrect answer:
    * The page will inform the player that they chose a wrong answer
    * The correct answer will be displayed
    * An image related to the correct answer will appear on screen
    * Incorrect answers will increase by 1
    * The page will automatically display the next question and answer set after 5 seconds and the timer will reset to 20
5. ELSE IF the timer reaches 0 before the player chooses an answer:
    * The page will inform the player that they have run out of time
    * The correct answer will be displayed
    * Unanswered questions will increase by 1
    * The page will automatically display the next question and answer set after 5 seconds and the timer will reset to 20
6. IF there are no more questions to answer:
    * The page will display the number of correct, incorrect, and unanswered questions
    * The player can click a button to play again
    