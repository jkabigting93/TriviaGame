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

    // Call Submission Function

    })

    // Define Submission Function
    // function submit() {
    //     if
    // }
})