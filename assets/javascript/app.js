$(document).ready(function() {

// On-click listener for Start Button
    $("#startButton").click(function() {
        console.log("start click works");

     // Display Game Body and hide Start Button
        $("#startButton").css("display", "none");
        $("#game").css("display", "block");

    // Timer Function
        var i = 120;
        setInterval(function () {
            $("#timeLeft").html(i);
            i--;
        }, 1000);
    });

// On-click listener for Submission Button
    $("#submitButton").click(function() {
        console.log("submit click works");

    // Display Score Screen and hide Game Body
        $("#game").css("display", "none");
        $("#scoreScreen").css("display", "block");

    // Submission Function - Define Answers as Array
        var numQuestions = 10;
        var numChoices = 4;
        var answers = new Array(10);

        answers[0] = "Toronto";
        answers[1] = "OVO";
        answers[2] = "bling";
        answers[3] = "Whiskey";
        answers[4] = "Pusha T";
        answers[5] = "Degrassi";
        answers[6] = "God's Plan";
        answers[7] = "blem";
        answers[8] = "Fred Van Vleet";
        answers[9] = "Anchorman 2";

    });
});