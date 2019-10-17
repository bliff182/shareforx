$(document).ready(function () {

// VARIABLE DECLARATION
// ==============================================================================================

    var answeredRight = 0;
    var answeredWrong = 0;
    var unanswered = 0;
    var timeLeft = 10;

    var intervalId; // to hold setInterval function

    var isAnswered = false;

    var triviaIndex = 0 // to cycle through the different objects in the array of all questions/answers

    var trivia = [{
        question: "Which of the following organizations did George NOT work for?",
        answers: ["Play Now", "The New York Yankees", "The New York Mets", "Kruger Industrial Smoothing"],
        correct: "3"
        // put image here: 
    }, {
        question: "Which of Kramer's many friends wishes for him to 'drop dead'?",
        answers: ["Lomez", "Bob Sacamano", "Jay Riemenschneider", "Franklin Delano Romanowski"],
        correct: "4"
        // put image here: 
    }, {
        question: "Finish this quote: 'I think I'm pretty much like you...'",
        answers: ['"Only succesful."', '"Just with hair."', '"Except not at all."', '"But people enjoy my company."'],
        correct: "1"
        // put image here:
    }, {
        question: "Which of the main foursome is not in the pilot episode?",
        answers: ["Jerry", "George", "Elaine", "Kramer"],
        correct: "3"
        // put image here: 
    }, {
        question: "Who is Jerry's opponent in 'The Big Race'?",
        answers: ["Newman", "Duncan Meyer", "Bob Cobb", "Kenny Bania"],
        correct: "2"
        // put image here
    }, {
        question: "Who causes Elaine to lose 'The Contest'?",
        answers: ["Jon Voight", "Saddam Hussein", "Keith Hernandez", "John F. Kennedy Jr."],
        correct: "4"
        // put image here
    }, {
        question: "Which of the following is NOT a Festivus tradition?",
        answers: ["Airing of Grievances", "Traditional McDonald's Feast", "Feats of Strength", "The Alumnium Pole"],
        correct: "2"
        // put image here
    }];


// FUNCTIONS
// ==============================================================================================

    function timer() {
        if (timeLeft === 0) {
            unanswered++;
            isAnswered = true;
            clearInterval(intervalId); // stops timer
            // holds value of correct answer
            var realAnswer = trivia[triviaIndex].answers[trivia[triviaIndex].correct - 1];
            $("#question").text("You ran out of time! The correct answer was " + realAnswer + ".");
            setTimeout(nextRound, 5000);
        }
        else if (isAnswered) {
            clearInterval(intervalId); // stops timer when user clicks an answer
            setTimeout(nextRound, 5000);
        }
        else {
            timeLeft--;
            $("#time-left").text(timeLeft);
        }
    };

    function q1() {
        $("#start").remove();
        if (!isAnswered) {
            timer(); // timer starts until player clicks an answer
        }
        answeredRight = 0;
        answeredWrong = 0;
        unanswered = 0;
        timeLeft = 10;
        isAnswered = false;
        var question = trivia[triviaIndex].question;
        var correctNumber = trivia[triviaIndex].correct - 1;
        console.log("correctNumber: " + correctNumber);
        intervalId = setInterval(timer, 1000);
        //html to update
        $("#time-left").text(timeLeft);
        $("#question").text(question);
        // $("#answers").text(trivia[triviaIndex].answers);
        // loop through answers array in corresponding part of trivia object array
        for (var i = 0; i < 4; i++) {
            var possibleAnswer = trivia[triviaIndex].answers[i];
            // append possible answer to #answers div in html with class = .answer-choice and id = i
            // id = i will allow us compare the chosen answer with the correct answer
            $("#answers").append("<button class='answer-choice' id=" + i + ">" + possibleAnswer + "</button><br>");
        }
        // user clicks an answer 
        $(".answer-choice").click(function () {
            isAnswered = true;
            var answerId = $(this).attr("id");
            answerId = parseInt(answerId)
            console.log("answerId: " + answerId);
            var realAnswer = trivia[triviaIndex].answers[trivia[triviaIndex].correct - 1];
            console.log("realAnswer: " + realAnswer);
            if (answerId === correctNumber) {
                $("#question").text("Correct!");
                answeredRight++;
            }
            else {
                $("#question").text("NO SOUP FOR YOU! The answer was " + realAnswer + ".");
                answeredWrong++
            }
        })
    };

    function nextRound() {
        triviaIndex++;
        timeLeft = 10;
        isAnswered = false;
        var question = trivia[triviaIndex].question
        var correctNumber = trivia[triviaIndex].correct - 1;
        intervalId =setInterval(timer, 1000);
        timer();
        $("#time-left").text(timeLeft);
        $("#question").text(question);
        $("#answers").empty();
        for (var i = 0; i < 4; i++) {
            var possibleAnswer = trivia[triviaIndex].answers[i];
            $("#answers").append("<button class='answer-choice' id=" + i + ">" + possibleAnswer + "</button><br>");
        }
        $(".answer-choice").click(function () {
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
        })
        
    };

    /* function loadQuestion() {
        timeLeft = 10;
        isAnswered = false; 
        var question = trivia[triviaIndex].question;
        var correctNumber = trivia[triviaIndex].correct -1;
        intervalId = setInterval(timer, 1000);
        $("#time-left")
    }; */

// GAMEPLAY
// ==============================================================================================

    $("#start").click(q1);

});