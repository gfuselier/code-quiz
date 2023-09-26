var startButton = document.getElementById("start-button")
var startingPage = document.getElementById("starting-page")
var questionPage = document.getElementById("question-page")
var endPage = document.getElementById("end-page")
var highScorePage = document.getElementById("high-score-page")
var currentQuestion = document.getElementById("current-question")

var question1 = {
    questionText: "What color is the sky?",
    choice1: "blue",
    choice2: "red",
    choice3: "green",
    choice4: "purple"
}


//click a button to hide the start screen
function startQuiz() {
    startingPage.style.display = "none";
    questionPage.style.display = "block";
    //select currentQuestion header and update content with current question
    currentQuestion.textContent = question1.questionText;
}
startButton.addEventListener("click", startQuiz)

//select ul with id of choices
//create 4 buttons with textcontent and value of the answer choices

// var choices = ["apple", "kiwi", "banana", "peach"]
// for (let i = 0; i < choices.length; index++) {
    //create a button for the choice
    //add content
    //append to the button container

    //then clear the buttons before the next question
// }

//big hint = custom data attributes activity(#19) for adding the event listener to the container
//and then only care if element.matches("button")