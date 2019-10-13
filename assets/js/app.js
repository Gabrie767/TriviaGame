let userPick = []; 
let correctAnswers = 0;
let wrongAnswers = 0;
let missedAnswers = 0;
let timeDisplay;
let counter = 61;
let intervalID;
let questions = [{
    
    question: "What's your favorite scary movie?",
    choices: ["Nightmare on Elm Street", "Halloween", "Chucky", "Scream"],
    answer: 3
},
{
    question: "Whatever you do, don't fall asleep...",
    choices: ["Candyman", "Nightmare on  Elm Street", "Poltergeist", "IT"],
    answer: 1
},
{
    question: "We all go a little mad sometimes...",
    choices: ["The Haunting", "Saw", "The Ring", "Psycho"],
    answer: 3
},
{
    question: "Sometimes dead is better...",
    choices: ["IT", "Jeepers Creepers", "Pet Cemetary", "Carrie"],
    answer: 2
},
{
    question: "Heeeeere's Johnny!",
    choices: ["The Sixth Sense", "The Fourth Kind", "Alien", "The Shining"],
    answer: 3
},
{
    question: "In space, no one can hear you scream...",
    choices: ["Alien", "Ouija", "The Nun", "The Exorsist"],
    answer: 0
},
{
    question: "We all float down here...",
    choices: ["Saw", "IT", "Dawn of the Dead", "Child's play"],
    answer: 1
},
{
    question: "They're Here!",
    choices: ["Carrie", "The Exorsist", "The Amityville Horror", "Poltergeist"],
    answer: 3
},
{
    question: "When there is no more room in hell the dead will walk the earth...",
    choices: ["Annabelle", "The Conjuring", "Dawn of the Dead", "Drag me to hell"],
    answer: 2
},
{
    question: "You will die in 7 days...",
    choices: ["Sinister", "It Follows", "Insidious", "The Ring"],
    answer: 3
},


];

for (var i = 0; i < questions.length; i++) {
    userPick[i] = null;
}



$(document).ready(function () {

    $("#startGame").click(function () {
        
        
        intervalID = setInterval(decrement, 1000);
        
        writeQuestions();
        $("#startGame").hide();
        writeSubmitButton();

        $(document).on("click", "#submitQuiz", function () {
           showResults();
        });
      
        $("input").click(function () {
            userPick[this.name] = this.value;
        });
    });
});


function writeQuestions() {
    for (var i = 0; i < questions.length; i++) {
        $("#formQuiz").append(questions[i].question + "</br>");
        
        for (var x = 0; x < questions[i].choices.length; x++) {
            $("#formQuiz").append("<label class='radio-inline'><input value='" + x + "' type='radio' name='" + i + "'>" + questions[i].choices[x] + "</label>");
        }
        $("#formQuiz").append("<br/><br/>");
    }
}

function writeSubmitButton() {
    $("#formSubmit").append("<button id='submitQuiz' class='btn btn-primary btn-lg'>Submit</button>");
}


function decrement() {
    counter--;
    $("#timeRemaining").html("<h2><mark>" + counter + " seconds remaining.</mark></h2>");
    if (counter === 0) {
  
        showResults();
    }
}

function showResults() {
    
    $("#formQuiz").hide();
    $("#timeRemaining").hide();
    $("#submitQuiz").hide();
  
    for (i = 0; i < questions.length; i++) {
     
        if (questions[i].answer == userPick[i]) {
            correctAnswers++;
        }
       
        else if (userPick[i] === null) {
            missedAnswers++;
        }
       
        else {
            wrongAnswers++;
        }
    }
   
    let qR = $("#quizResults");
    $(qR).append("<p>ALL DONE!</p>");
    $(qR).append("<p>Correct Answers: " + correctAnswers + "</p>");
    $(qR).append("<p>Incorrect Answers: " + wrongAnswers + "</p>");
    $(qR).append("<p>Unanswered: " + missedAnswers + "</p>");
   
    clearInterval(intervalID);
}
