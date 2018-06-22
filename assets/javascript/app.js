$(document).ready(function () {

    var quizArr = [
        {
            question: "Who would win in a 1v1 figh to the death?",
            answers: {
                A: "Superman",
                B: "Goku",
                C: "One-Punch Man",
                D: "Floyd Mayweather"
            },
            correctAnswer: "B"
        },
        {
            question: "What is Bitcoin?",
            answers: {
                A: "Imaginary internet money",
                B: "A pump and dump / ponzi scam",
                C: "Video game coins",
                D: "Decentralized currency used worldwide"
            },
            correctAnswer: "D"
        },
        {
            question: "Where is the 2018 FIFA World Cup being held?",
            answers: {
                A: "Mexico",
                B: "Russia",
                C: "North Korea",
                D: "United States of America"
            },
            correctAnswer: "B"
        },
        {
            question: "What is the capital of California?",
            answers: {
                A: "Phoenix",
                B: "Sacramento",
                C: "Boise",
                D: "San Diego"
            },
            correctAnswer: "B"
        },
        {
            question: "How many inches are in 1 foot?",
            answers: {
                A: "14",
                B: "15",
                C: "12",
                D: "11"
            },
            correctAnswer: "C"
        },
        {
            question: "What color is the sky on a nice clear day?",
            answers: {
                A: "Blue",
                B: "Orange",
                C: "Purple",
                D: "Red"
            },
            correctAnswer: "A"
        },
        {
            question: "If you travel 70 miles at 70 miles per hour, how long did it take you to travel those 70 miles?",
            answers: {
                A: "70 minutes",
                B: "140 minutes",
                C: "60 minutes",
                D: "50 minutes"
            },
            correctAnswer: "C"
        },
        {
            question: "Bernie Sanders is a senator from the state of:",
            answers: {
                A: "New York",
                B: "Vermont",
                C: "Alabama",
                D: "Texas"
            },
            correctAnswer: "B"
        },
        {
            question: "How many FIFA World Cups does Brazil have?",
            answers: {
                A: "3",
                B: "6",
                C: "2",
                D: "5"
            },
            correctAnswer: "D"
        },
        {
            question: "What is 4 times 4?",
            answers: {
                A: "17",
                B: "23",
                C: "16",
                D: "22"
            },
            correctAnswer: "C"
        }
    ];

    // Initialize variables that will be used: timer is an object that has a count function that counts down 180 seconds, and a
    // time converter function that converts time so it can be displayed properly to user
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var timer = {
        timeCount = 180,
        count: function () {
            timeCount--;
            var converted = stopwatch.timeConverter(stopwatch.timeCount);
            $("#time").text(converted);
        },
        timeConverter: function (t) {

            var minutes = Math.floor(t / 60);
            var seconds = t - (minutes * 60);

            if (seconds < 10) {
                seconds = "0" + seconds;
            }

            if (minutes === 0) {
                minutes = "00";
            }
            else if (minutes < 10) {
                minutes = "0" + minutes;
            }

            return minutes + ":" + seconds;
        }
    };

    // Build function that displays quiz

    function displayQuiz() {

        // var answers; use an array to push HTML elements?
        // Remove start button and add 2 minute countdown
        $("#start-quiz").remove();
        $("#quiz-container").append('<h2 id = "time-left">' + "Time left: " + '<span id="time">00:00</span>' + '</h2>');

        // Loop through array, create new question + append to #inner-container 
        for (var i = 0; i < quizArr.length; i++) {
            answers = [];
            $("#quiz-container").append('<p id="questions">' + (i + 1) + ". " + quizArr[i].question + '</p>');

            // For each letter in answer object, create + append new radio button with letter / answer attached
            for (letter in quizArr[i].answers) {
                $("#quiz-container").append('<div id="answer-btn"><label><input type="radio" value="' + letter + '">' + letter + ': ' +
                    quizArr[i].answers[letter] + '<label></div>');
            };

        };

        // Line break & create submit button
        $("#quiz-container").append('<br>' + '<button id="submit-quiz">Submit</button>');

        // Function that calculates results and shows the final display containing results
        function displayResults() {

            // // Calculates all results (correct/incorrect/unanswered)
            // function calculate() {

            // };

            // calculate();

            $("#quiz-container").html('<h2 id = "all-done">All done!</h2>');
            $("#quiz-container").append("Correct answers: " + correct + '<br>' + "Incorrect answers: " + incorrect + '<br>' +
                "Unanswered: " + unanswered);
        };

        // Set countdown 2 mins - display results when time is up, or when user clicks submit button
        setTimeout(displayResults, 180000);
        $("#submit-quiz").on("click", displayResults);
    };

    // When user clicks start button, create & display quiz questions / set timer
    $("#start-quiz").on("click", displayQuiz);

});

// Timer implemented but need to display time left on screen
// Need to correctly implement radio buttons - check only clicked button / uncheck previous when new button is checked
// Check if question was unanswered / unchecked (how?) & update incorrect or correct variables to display
