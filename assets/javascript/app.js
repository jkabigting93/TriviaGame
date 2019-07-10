$(document).ready(function() {

    // On-click listener for Start Button
    $("#startButton").click(function() {
        console.log("start click works");

    // Display Game Body and hide Start Button
        $("#startButton").css("display", "none");
        $("#game").css("display", "block");
    });

    // On-click listener for Submission Button
    $("#submitButton").click(function() {
        console.log("submit click works");
        $("#game").css("display", "none");
        $("#scoreScreen").css("display", "block");

    // Define Submission Function
    
    })
})