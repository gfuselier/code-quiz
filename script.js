var startButton = document.getElementById("start-button")
var startingPage = document.getElementById("starting-page")
var questionPage = document.getElementById("question-page")
var endPage = document.getElementById("end-page")
var highScorePage = document.getElementById("high-score-page")
var currentQuestion = document.getElementById("current-question")
var answerChoices = document.getElementById("answer-choices")
var timerElement = document.getElementById("timer-count")
var timerCount = 100
var level = 0
var timer; 
var scoresArr = JSON.parse(localStorage.getItem("highScores")) || []



var allQuestions = [
    {
        questionText: "What color is the sky?",
        choices: ["blue", "red", "green", "purple"],
        correctChoice: "blue"
    }, {
        questionText: "Who is Ernie's best friend?",
        choices: ["Big-Bird", "Elmo", "Bert", "Oscar"],
        correctChoice: "Bert"
    }, {
        questionText: "What is the highest selling Halloween Candy each year?",
        choices: ["Snickers", "Reese's", "Skittles", "Twinkies"],
        correctChoice: "Reese's"
    }, {
        questionText: "Question 4",
        choices: ["A", "B", "C", "D"],
        correctChoice: "D"
    }, {
        questionText: "Question 5",
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
    //select currentQuestion header and update content with current question
    //select ul with id of choices
    //create 4 buttons with textcontent and value?? of the answer choices
    currentQuestion.textContent = allQuestions[level].questionText;
    // currentQuestion.textContent = allQuestions[i + 1].questionText;
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
    console.log(element);
    console.log(this);
    if (element.matches("button")) {
        console.log(element.textContent);
        if (element.textContent === allQuestions[level].correctChoice) {
            console.log("correct!");
            
        } else {
            console.log("wrong!");
            timerCount -= 10;
            
        }

    }
 level++
 if (level >= allQuestions.length) {
    console.log("Game Over")
    gameOver();
 } else {moveForward()}
}

function gameOver() {
    clearInterval(timer);
    timerElement.textContent = timerCount;
    questionPage.style.display = "none";
    endPage.style.display = "block";
    
}

function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      // Tests if time has run out
      if (timerCount <= 0) {
        gameOver();
      }
    }, 1000);
  }
startButton.addEventListener("click", startQuiz)
document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault();
    var playerObj = {
        initials: document.getElementById("initials").value,
        score: timerCount
    }
    scoresArr.push(playerObj);
    localStorage.setItem("highScores",JSON.stringify(scoresArr));
})


//What's left? 
//timer function, saving timer to done screen, saving initials from done form, listing stored high scores, links to hs, back, clear buttons