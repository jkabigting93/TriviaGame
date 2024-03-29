$(document).ready(function() {

// Define Submit Function as Global Variable
    var submit = function() {

    // Submission Function - Define Answers as Array
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

    // Submission Function - Define Input as Array
        var input = new Array(10);
            input[0] = $("input[name='q1']:checked").val();
            input[1] = $("input[name='q2']:checked").val();
            input[2] = $("input[name='q3']:checked").val();
            input[3] = $("input[name='q4']:checked").val();
            input[4] = $("input[name='q5']:checked").val();
            input[5] = $("input[name='q6']:checked").val();
            input[6] = $("input[name='q7']:checked").val();
            input[7] = $("input[name='q8']:checked").val();
            input[8] = $("input[name='q9']:checked").val();
            input[9] = $("input[name='q10']:checked").val();
            console.log(input);

    // Submission Function - Compare Arrays
        var correct = 0;
        var incorrect = 0;

        for (var j = 0; j < answers.length; j++) { 
            if (input[j] === answers[j]) {
                correct++
            } else {
                incorrect++
            };

    // Submission Function - Write Score to Display
            $("#correct").text(correct);
            $("#incorrect").text(incorrect);
        };
    };

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
    
    // Run Submit Function if time runs out
            if (i === 0) {
                $("#game").css("display", "none");
                $("#scoreScreen").css("display", "block");
                submit();
            }
        }, 1000);
    });

    // On-click listener for Submission Button
    $("#submitButton").click(function() {
        console.log("submit click works");

    // Display Score Screen, hide Game Body, run Submit Function
        $("#game").css("display", "none");
        $("#scoreScreen").css("display", "block");
        submit();
    })
})