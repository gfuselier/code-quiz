var startButton = document.getElementById("start-button")
var startingPage = document.getElementById("starting-page")
var questionPage = document.getElementById("question-page")
var endPage = document.getElementById("end-page")
var highScorePage = document.getElementById("high-score-page")
var currentQuestion = document.getElementById("current-question")
var answerChoices = document.getElementById("answer-choices")

var question1 = {
    questionText: "What color is the sky?",
    choices:["blue","red","green","purple"],
}
var question2 = {
    questionText: "Who is Ernie's best friend?",
    choices:["Big-Bird","Elmo","Bert","Oscar"],
}

//click a button to hide the start screen
function startQuiz() {
    startingPage.style.display = "none";
    questionPage.style.display = "block";
    //select currentQuestion header and update content with current question
    currentQuestion.textContent = question1.questionText;

    //select ul with id of choices
    //create 4 buttons with textcontent and value?? of the answer choices
    for (var i = 0; i < question1.choices.length; i++) {
        var ansButton = document.createElement("button");
        ansButton.textContent = question1.choices[i];
        // ansButton.setAttribute() 
        answerChoices.append(ansButton);
        
    };
    //clear the buttons before the next question??
    
    questionPage.addEventListener("click", function(event) {
        var element = event.target;

        if (element.matches("button")) {
            //get value of the button they clicked
            //if (value === true) { go to next question}
            //else {subtract 10 from the timer, go to next question}
        }
    })
        
    
}

startButton.addEventListener("click", startQuiz)



//What's left? 
//timer function, saving timer to done screen, saving initials from done form, listing stored high scores, links to hs, back, clear buttons