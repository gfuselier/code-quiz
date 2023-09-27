var startButton = document.getElementById("start-button")
var startingPage = document.getElementById("starting-page")
var questionPage = document.getElementById("question-page")
var endPage = document.getElementById("end-page")
var highScorePage = document.getElementById("high-score-page")
var currentQuestion = document.getElementById("current-question")
var answerChoices = document.getElementById("answer-choices")
var timerElement = document.getElementById("timer-count")
var timerCount = 60
var level = 0
var timer;
var scoresArr = JSON.parse(localStorage.getItem("highScores")) || []
var scoresList = document.getElementById("scores-list")
var submitButton = document.getElementById("submit")
var header = document.getElementById("header")
var backButton = document.getElementById("back-button")
var clearButton = document.getElementById("clear-button")

var allQuestions = [
    {questionText: "What color is the sky?",
        choices: ["blue", "red", "green", "purple"],
        correctChoice: "blue"
    }, 
    {questionText: "Who is Ernie's best friend?",
        choices: ["Big-Bird", "Elmo", "Bert", "Oscar"],
        correctChoice: "Bert"
    }, 
    {questionText: "What is the highest selling Halloween Candy each year?",
        choices: ["Snickers", "Reese's", "Skittles", "Twinkies"],
        correctChoice: "Reese's"
    }, 
    {questionText: "Question 4",
        choices: ["A", "B", "C", "D"],
        correctChoice: "D"
    }, 
    {questionText: "Question 5",
        choices: ["1", "2", "3", "4"],
        correctChoice: "1"
    }
]


//click a button to hide the start screen
function startQuiz() {
    startTimer();
    startingPage.style.display = "none";
    questionPage.style.display = "block";

    moveForward();
}

function moveForward() {

    currentQuestion.textContent = allQuestions[level].questionText;

    answerChoices.innerHTML = ""
    for (var i = 0; i < 4; i++) {
        var ansButton = document.createElement("button");
        ansButton.textContent = allQuestions[level].choices[i];
        ansButton.onclick = checkAns
        answerChoices.append(ansButton);
    };
}

function checkAns(event) {
    var element = event.target;
    
    if (element.matches("button")) {
        console.log(element.textContent);
        if (element.textContent === allQuestions[level].correctChoice) {
            console.log("correct!");
        } else {
            console.log("wrong!");
            timerCount -= 10;
        }
    }

    level++;
    if (level >= allQuestions.length) {
        console.log("Game Over")
        gameOver();
    } else { moveForward() }
}

function gameOver() {
    clearInterval(timer);
    timerElement.textContent = timerCount;
    questionPage.style.display = "none";
    endPage.style.display = "block";
    endPage.children[1].textContent = "Your final score is " + timerCount + "."
}

function startTimer() {
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;

        if (timerCount <= 0) {
            gameOver();
        }
    }, 1000);
}

startButton.addEventListener("click", startQuiz)

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    var playerObj = {
        initials: document.getElementById("initials").value,
        score: timerCount
    }
    scoresArr.push(playerObj);
    localStorage.setItem("highScores", JSON.stringify(scoresArr));

    for (i = 0; i < scoresArr.length; i++) {
        var listElement = document.createElement("li")
        listElement.textContent = scoresArr[i].initials + " - " + scoresArr[i].score;
        scoresList.appendChild(listElement)
    }

    endPage.style.display = "none";
    header.style.display = "none";
    highScorePage.style.display = "block";
})



//What's left? 
// , links to hs, back, clear buttons