// VARIABLE DECLARATION
// ===========================================================

var answeredRight = 0;
var answeredWrong = 0;
var unanswered = 0;
var timeLeft = 20;

var intervalId; // to hold setInterval function

var isAnswered = false;

var correctAnswer; // to hold the correct answer for each individual question

var triviaIndex = 0 // to cycle through the different questions in the object of all questions/answers

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
    answers: ["Only succesful.", "Just with hair.", "Except not at all.", "But people enjoy my company."],
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
    question: "Which of the following is NOT a Festivus tradition?"
    answers: ["Airing of Grievances", "Traditional McDonald's Feast", "Feats of Strength", "The Alumnium Pole"],
    correct: "2"
    // put image here
}];


// FUNCTIONS
// ===========================================================

function startGame() {
    $("#start").remove();
    answeredRight = 0;
    answeredWrong = 0;
    unanswered = 0;
    loadQuestions();
}

function loadQuestions() {
    isAnswered = false;
    timeLeft = 20;
    intervalId
}