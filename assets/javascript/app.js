$(document).ready(function() {

    // VARIABLE DECLARATION
    // ==============================================================================================

    var answeredRight = 0;
    var answeredWrong = 0;
    var unanswered = 0;
    var timeLeft = 11;
    var intervalId; // to hold setInterval function
    var isAnswered = false;
    var triviaIndex = 0; // to cycle through the different objects in the array of all questions/answers

    var trivia = [{
        question: "George's longest-tenured job on the show was for what organization?",
        answers: ["Play Now", "Pendant Publishing", "The New York Yankees", "Kruger Industrial Smoothing"],
        correct: "3",
        image: "assets/images/george-yankees.gif"
    }, {
        question: "Which of Kramer's many friends wishes for him to 'drop dead'?",
        answers: ["Lomez", "Bob Sacamano", "Jay Riemenschneider", "Franklin Delano Romanowski"],
        correct: "4",
        image: "assets/images/fdr.gif"
    }, {
        question: "Who was Elaine's longest-running boyfriend on the show?",
        answers: ["David Puddy", "Jerry", "Jake Jarmel", "Tim Whatley"],
        correct: "1",
        image: "assets/images/puddy.gif"
    }, {
        question: "Which of the main foursome is not in the pilot episode?",
        answers: ["Jerry", "George", "Elaine", "Kramer"],
        correct: "3",
        image: "assets/images/elaine-dance.gif"
    }, {
        question: "Who is Jerry's opponent in 'The Big Race'?",
        answers: ["Newman", "Duncan Meyer", "Bob Cobb", "Kenny Bania"],
        correct: "2",
        image: "assets/images/big-race.gif"
    }, {
        question: "Who is the first to drop out of 'The Contest'?",
        answers: ["Jerry", "George", "Elaine", "Kramer"],
        correct: "4",
        image: "assets/images/kramers-out.gif"
    }, {
        question: "Which of the following is NOT a Festivus tradition?",
        answers: ["Airing of Grievances", "Traditional McDonald's Feast", "Feats of Strength", "The Alumnium Pole"],
        correct: "2",
        image: "assets/images/festivus.gif"
    }];


    // FUNCTIONS
    // ==============================================================================================

    function startGame() {
        $("#start").remove();
        answeredRight = 0;
        answeredWrong = 0;
        unanswered = 0;
        triviaIndex = 0;
        loadQuestion();
    };

    function loadQuestion() {
        if (triviaIndex === trivia.length) {
            endGame();
        }
        else {
            timeLeft = 11;
            isAnswered = false;
            intervalId = setInterval(timer, 1000);
            var question = trivia[triviaIndex].question;
            var correctNumber = trivia[triviaIndex].correct - 1;
            timer();
            $("#time-left").text(timeLeft);
            $("#question").text(question);
            for (var i = 0; i < 4; i++) {
                var possibleAnswer = trivia[triviaIndex].answers[i];
                $("#answers").append("<button class='answer-choice' id=" + i + ">" + possibleAnswer + "</button><br>");
            }
            $(".answer-choice").click(function() {
                if (!isAnswered) { // only run if player hasn't answered yet; prevents players from changing answer before setTimeout executes
                    isAnswered = true;
                    var answerId = $(this).attr("id");
                    answerId = parseInt(answerId);
                    var realAnswer = trivia[triviaIndex].answers[trivia[triviaIndex].correct - 1];
                    if (answerId === correctNumber) {
                        $("#question").text("Correct!");
                        answeredRight++;
                    }
                    else {
                        $("#question").text("NO SOUP FOR YOU! The answer was " + realAnswer + ".");
                        answeredWrong++;
                    }
                }
            })
        }
    };

    function timer() {
        if (timeLeft === 0) {
            unanswered++;
            isAnswered = true;
            clearInterval(intervalId); // stops timer
            // holds value of correct answer
            var realAnswer = trivia[triviaIndex].answers[trivia[triviaIndex].correct - 1];
            $("#question").text("You ran out of time! The correct answer was " + realAnswer + ".");
            $("#answers").append("<img src=" + trivia[triviaIndex].image + " />");
            setTimeout(nextRound, 6000);
        }
        else if (isAnswered) {
            clearInterval(intervalId); // stops timer when user clicks an answer
            $("#answers").append("<img src=" + trivia[triviaIndex].image + " />");
            setTimeout(nextRound, 6000);
        }
        else {
            timeLeft--;
            $("#time-left").text(timeLeft);
        }
    };

    function nextRound() {
        triviaIndex++;
        $("#answers").empty();
        loadQuestion();
    };

    function endGame() {
        $("#time-left").empty();
        $("#answers").empty();
        $("#question").text("Game over! Let's see how you did!");
        $("#answers").append("<p>Correct: " + answeredRight + "</p>");
        $("#answers").append("<p>Incorrect: " + answeredWrong + "</p>");
        $("#answers").append("<p>Unanswered: " + unanswered + "</p>");
        $("#answers").append("<button id='restart'>Click Here to Play Again!</button><br>");
        $("#answers").append("<img src='assets/images/seinfeld-yay.gif' />");

        $("#restart").click(restart);
    };

    function restart() {
        answeredRight = 0;
        answeredWrong = 0;
        unanswered = 0;
        triviaIndex = 0;
        $("#question").empty();
        $("#answers").empty();
        loadQuestion();
    };

    // FUNCTION EXECUTION 
    // ==============================================================================================

    $("#start").click(startGame);

});