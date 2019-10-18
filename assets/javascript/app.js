$(document).ready(function () {

    // VARIABLE DECLARATION
    // ==============================================================================================

    var themeSong = new Audio("assets/javascript/seinfeld-theme.mp3"); // NOT WORKING

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
        image: "assets/images/elaine-hates-it.gif"
    }, {
        question: "Who is Jerry's opponent in 'The Big Race'?",
        answers: ["Newman", "Duncan Meyer", "Bob Cobb", "Kenny Bania"],
        correct: "2",
        image: "assets/images/big-race.gif"
    }, {
        question: "Who is the first to drop out of 'The Contest'",
        answers: ["Jerry", "George", "Elaine", "Kramer"],
        correct: "4",
        image: "assets/images/kramers-out.gif"
    }, {
        question: "Which of the following is NOT a Festivus tradition?",
        answers: ["Airing of Grievances", "Big Mac Feast", "Feats of Strength", "The Alumnium Pole"],
        correct: "2",
        image: "assets/images/festivus.gif"
    }, {
        question: "During Kramer's brief stay in Los Angeles, what actor does he attempt to give his script to during a chance encounter?",
        answers: ["Fred Savage", "Macaulay Culkin", "Corey Feldman", "Edward Furlong"],
        correct: "1",
        image: "assets/images/kramer-fred-savage.gif"
    }, {
        question: "Before being fired, Kramer was going to have a speaking role in a movie starring which actor?",
        answers: ["Robert De Niro", "Woody Allen", "Jon Voight", "Dustin Hoffman"],
        correct: "2",
        image: "assets/images/pretzels.gif"
    }, {
        question: "Which of the following is a reason Jerry has broken up with someone?",
        answers: ["Being a 'low-talker'", "Being a 'close-talker'", "Having 'man hands'", "Beating him at chess"],
        correct: "3",
        image: "assets/images/manhands.gif"
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
        themeSong.pause();
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
            $("#time-left").text("Time remaining: " + timeLeft);
            $("#question").text(question);
            for (var i = 0; i < 4; i++) {
                var possibleAnswer = trivia[triviaIndex].answers[i];
                $("#answers").append("<button class='answer-choice' id=" + i + ">" + possibleAnswer + "</button><br>");
            }
            $(".answer-choice").click(function () {
                if (!isAnswered) { // only run if player hasn't answered yet; prevents players from changing answer before setTimeout executes
                    isAnswered = true;
                    var answerId = $(this).attr("id");
                    answerId = parseInt(answerId);
                    var realAnswer = trivia[triviaIndex].answers[trivia[triviaIndex].correct - 1];
                    if (answerId === correctNumber) {
                        $("#question").text("Giddyup! You got it right!");
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
            // answeredWrong++;
            isAnswered = true;
            clearInterval(intervalId); // stops timer
            // holds value of correct answer
            var realAnswer = trivia[triviaIndex].answers[trivia[triviaIndex].correct - 1];
            $("#question").text("You ran out of time! The correct answer was " + realAnswer + ".");
            $("#answers").empty();
            $("#answers").append("<img id='gif' src=" + trivia[triviaIndex].image + " />");
            setTimeout(nextRound, 5000);
        }
        else if (isAnswered) {
            clearInterval(intervalId); // stops timer when user clicks an answer
            $("#answers").empty();
            $("#answers").append("<img id='gif' src=" + trivia[triviaIndex].image + " />");
            setTimeout(nextRound, 5000);
        }
        else {
            timeLeft--;
            $("#time-left").text("Time remaining: " + timeLeft);
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
        $("#question").empty();
        $("#answers").append("<p class='final-score'>Correct: " + answeredRight + "</p>");
        $("#answers").append("<p class='final-score'>Incorrect: " + answeredWrong + "</p>");
        $("#answers").append("<p class='final-score'>Unanswered: " + unanswered + "</p>");
        $("#answers").append("<button id='restart'>Click Here to Play Again!</button><br>");
        $("#answers").append("<img id='gif' src='assets/images/dancing.gif' />");

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

    // AUDIO NOT WORKING
    // $("audio").get(0).play();

    themeSong.play();

    $("#start").click(startGame);

});