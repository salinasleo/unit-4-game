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

    $("#Score").html("<br>" + runningScore);
};

do {
    initialize();
    $("#Wins").html("Wins: " + wins);
    $("#Losses").html("Losses: " + losses);
    $("#Goal").html("Your Goal is: <br><br>" + goalScore);
} while (stillPlaying = 0);
// initialize at start and after each new game
// i couldn't get this mechanism to work as a reset mechanism after button click, 
// had to manually call it after matching or exceeding goal score


function compare(runningScore) {

    $("#Score").html("<br>" + runningScore);

    if (runningScore === goalScore) {
        wins++;
        stillPlaying = 0;
        celebration();
        initialize();
        return;
    };

    if (runningScore > goalScore) {
        losses++;
        stillPlaying = 0;
        lost();
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


function celebratePos1() {
    $("#jelly1").css("background-image", "url('assets/images/jelly2.png'");
    $("#jelly2").css("background-image", "url('assets/images/jelly3.png'");
    $("#jelly3").css("background-image", "url('assets/images/jelly4.png'");
    $("#jelly4").css("background-image", "url('assets/images/jelly1.png'");
    console.log("celebrateposition1");
};
function celebratePos2() {
    $("#jelly1").css("background-image", "url('assets/images/jelly3.png'");
    $("#jelly2").css("background-image", "url('assets/images/jelly4.png'");
    $("#jelly3").css("background-image", "url('assets/images/jelly1.png'");
    $("#jelly4").css("background-image", "url('assets/images/jelly2.png'");
    console.log("celebrateposition2");
};
function celebratePos3() {
    $("#jelly1").css("background-image", "url('assets/images/jelly4.png'");
    $("#jelly2").css("background-image", "url('assets/images/jelly1.png'");
    $("#jelly3").css("background-image", "url('assets/images/jelly2.png'");
    $("#jelly4").css("background-image", "url('assets/images/jelly3.png'");
    console.log("celebrateposition3");
};
function celebratePos4() {
    $("#jelly1").css("background-image", "url('assets/images/jelly1.png'");
    $("#jelly2").css("background-image", "url('assets/images/jelly2.png'");
    $("#jelly3").css("background-image", "url('assets/images/jelly3.png'");
    $("#jelly4").css("background-image", "url('assets/images/jelly4.png'");
    console.log("celebrateposition4");
};
function lossPos1() {
    $("#jelly1").css("background-image", "url('assets/images/jelly5.png'");
    $("#jelly2").css("background-image", "url('assets/images/jelly5.png'");
    $("#jelly3").css("background-image", "url('assets/images/jelly5.png'");
    $("#jelly4").css("background-image", "url('assets/images/jelly5.png'");
    console.log("celebrateposition1");
};

function updateWins() {
    $("#Wins").html("Wins: " + wins);
};

function updateLosses() {
    $("#Losses").html("Losses: " + losses);
};

function updateGoal() {
    $("#Goal").html("Your Goal is: <br><br>" + goalScore);
};


function celebration() {
    setTimeout(celebratePos1, 100 * 2);
    setTimeout(celebratePos2, 100 * 4);
    setTimeout(celebratePos3, 100 * 6);
    setTimeout(celebratePos4, 100 * 8);
    setTimeout(celebratePos1, 100 * 9);
    setTimeout(celebratePos2, 100 * 10);
    setTimeout(celebratePos3, 100 * 11);
    setTimeout(celebratePos4, 100 * 12);
    setTimeout(updateWins, 100 * 12.1);
    setTimeout(updateGoal, 100 * 12.2);
};

function lost() {
    setTimeout(lossPos1, 100 * 2);
    setTimeout(celebratePos4, 100 * 6);
    setTimeout(lossPos1, 100 * 7);
    setTimeout(celebratePos4, 100 * 10);
    setTimeout(lossPos1, 100 * 11);
    setTimeout(celebratePos4, 100 * 12);
    setTimeout(updateLosses, 100 * 12.1);
    setTimeout(updateGoal, 100 * 12.2);
};