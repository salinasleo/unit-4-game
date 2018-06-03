var runningScore;
var sillPlaying;
var goalScore;
var jelly1Pts;
var jelly2Pts;
var jelly3Pts;
var jelly4Pts;
var wins = 0;
var losses = 0;


function initialize() {
    runningScore = 0;
    stillPlaying = 1;
    goalScore = Math.floor(Math.random() * 102) + 19;
    console.log(goalScore);
    // between 19 and 120, and jelly beans between 1 and 12
    jelly1Pts = Math.floor(Math.random() * 12) + 1;
    console.log(jelly1Pts);
    do {
        jelly2Pts = Math.floor(Math.random() * 12) + 1;
        console.log(jelly2Pts);
    }
    while (jelly1Pts === jelly2Pts);
    // having crystals/jellies not ever have same value may actually be less fun, but did it here anyway
    do {
        jelly3Pts = Math.floor(Math.random() * 12) + 1;
        console.log(jelly3Pts);
    }
    while (jelly2Pts === jelly3Pts || jelly1Pts === jelly3Pts);
    do {
        jelly4Pts = Math.floor(Math.random() * 12) + 1;
        console.log(jelly4Pts);
    }
    while (jelly1Pts === jelly4Pts || jelly2Pts === jelly4Pts || jelly3Pts === jelly4Pts);

    $("#Goal").html("Your Goal is: <br><br>" + goalScore);
    $("#Score").html("<br>" + runningScore);
};

do {
    initialize();
    $("#Wins").html("Wins: " + wins); 
    $("#Losses").html("Losses: " + losses); 
} while (stillPlaying = 0);
// initialize at start and after each new game
// i couldn't get this mechanism to work as a reset mechanism after button click, 
// had to manually call it after matching or exceeding goal score


function compare(runningScore) {

    $("#Score").html("<br>" + runningScore);

    if (runningScore === goalScore) {
        wins++;
        $("#Wins").html("Wins: " + wins); 
        stillPlaying = 0;
        initialize();
        return;
    };

    if (runningScore > goalScore) {
        losses++;
        $("#Losses").html("Losses: " + losses); 
        stillPlaying = 0;
        initialize();
    };

};


$("body").on("click", "#jelly1", function () {
    runningScore = runningScore + jelly1Pts;
    compare(runningScore);
});

$("body").on("click", "#jelly2", function () {
    runningScore = runningScore + jelly2Pts;
    compare(runningScore);
});

$("body").on("click", "#jelly3", function () {
    runningScore = runningScore + jelly3Pts;
    compare(runningScore);
});

$("body").on("click", "#jelly4", function () {
    runningScore = runningScore + jelly4Pts;
    compare(runningScore);
});

