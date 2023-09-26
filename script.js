var startButton = document.getElementById("start-button")
var startingPage = document.getElementById("starting-page")
var questionPage = document.getElementById("question-page")
var endPage = document.getElementById("end-page")
var highScorePage = document.getElementById("high-score-page")
var currentQuestion = document.getElementById("current-question")
var answerChoices = document.getElementById("answer-choices")
var timerElement = document.getElementById("timer-count")
var timerCount = 100

var question1 = {
    questionText: "What color is the sky?",
    choices:["blue","red","green","purple"],
    correctChoice: "blue"
}
var question2 = {
    questionText: "Who is Ernie's best friend?",
    choices:["Big-Bird","Elmo","Bert","Oscar"],
    correctChoice: "Bert"
}
var question3 = {
    questionText: "What is the highest selling Halloween Candy each year?",
    choices:["Snickers","Reese's","Skittles","Twinkies"],
    correctChoice: "Reese's"
}
var question4 = {
    questionText: "Question 4",
    choices:["A","B","C","D"],
    correctChoice: "D"
}
var question5 = {
    questionText: "Question 5",
    choices:["1","2","3","4"],
    correctChoice: "1"
}
var allQuestions = [
    question1, question2, question3, question4, question5
]


//click a button to hide the start screen
function startQuiz() {
    // startTimer()
    startingPage.style.display = "none";
    questionPage.style.display = "block";

    function moveForward() {
    //select currentQuestion header and update content with current question
    //select ul with id of choices
    //create 4 buttons with textcontent and value?? of the answer choices
    for (var i = 0; i < allQuestions[i].choices.length; i++) {
        currentQuestion.textContent = allQuestions[i].questionText;
        var ansButton = document.createElement("button");
        ansButton.textContent = allQuestions[i].choices[i];
        answerChoices.append(ansButton);
        
    };
    //clear the buttons before the next question??
    
    questionPage.addEventListener("click", function(event) {
        var element = event.target;

        if (element.matches("button")) {
            console.log(element.textContent);
            if (element.textContent === allQuestions[0].correctChoice) {
                console.log("correct!");
            }
            //get value of the button they clicked
            //if (value === true) { go to next question}
            //else {subtract 10 from the timer, go to next question}
        }

    })
     
    }
    
}

// function startTimer() {
//     // Sets timer
//     timer = setInterval(function() {
//       timerCount--;
//       timerElement.textContent = timerCount;
//       if (timerCount >= 0) {
//         // Tests if win condition is met
//         if (isWin && timerCount > 0) {
//           // Clears interval and stops timer
//           clearInterval(timer);
//           winGame();
//         }
//       }
//       // Tests if time has run out
//       if (timerCount === 0) {
//         // Clears interval
//         clearInterval(timer);
//         loseGame();
//       }
//     }, 1000);
//   }
startButton.addEventListener("click", startQuiz)



//What's left? 
//timer function, saving timer to done screen, saving initials from done form, listing stored high scores, links to hs, back, clear buttons