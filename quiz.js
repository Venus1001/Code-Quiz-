

// Global variable:
var objNumber = 0;
var correctAnswer;
var score = 0;
var correctAnswer;
var secondLeft = 90;

//Question object array:

var questionsArr =
    [
        {
            question: "Inside which HTML element do we put the JavaScript?",
            chioceA: "<js>",
            chioceB: "<scripting>",
            chioceC: "<javascript>",
            chioceD: "<script>",
            answer: "<script>"
        },

        {
            question: "How do you write 'Hello World' in an alert box?",
            chioceA: "<alert('Hello World')>",
            chioceB: "<msgBox('Hello World)>",
            chioceC: "<alertBox('Hello World)>",
            chioceD: "<msg('Hello World')>",
            answer: "<alert('Hello World')>"
        },

        {
            question: "How to write an IF statement in JavaScript?",
            chioceA: "<if(i == 5)>",
            chioceB: "<if i = 5>",
            chioceC: "<if i == 5 then>",
            chioceD: "<if i = 5 then>",
            answer: "<if(i == 5)>"
        },

        {
            question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
            chioceA: "<if i <> 5>",
            chioceB: "<if i =! 5 then>",
            chioceC: "<if(i<>5)>",
            chioceD: "<if(i !=5 )>",
            answer: "<if(i !=5 )>"
        },
        {
            question: "How does a FOR loop start?",
            chioceA: "<for(i = 0; i<=5)>",
            chioceB: "<for(i <= 5;i++)>",
            chioceC: "<for i = 1 to 5>",
            chioceD: "<for(i = 0; i<=5; i++)>",
            answer: "<for(i = 0; i<=5; i++)"
        }
    ]

// Start the quiz once the user click on start button:
function renderQuestion() {

    var questionObj = questionsArr[objNumber];
    if (questionObj == null) {
        localStorage.setItem("score", score);
        location.href = 'score.html';
    }
    correctAnswer = questionObj.answer;
    var string = questionObj.chioceA.toString;
    document.getElementById("question").innerHTML = questionObj.question;

    document.getElementById("answer1").textContent = questionObj.chioceA;
    document.getElementById("answer1").setAttribute("value", questionObj.chioceA);
    document.getElementById("answer2").textContent = questionObj.chioceB;
    document.getElementById("answer2").setAttribute("value", questionObj.chioceB);
    document.getElementById("answer3").textContent = questionObj.chioceC;
    document.getElementById("answer3").setAttribute("value", questionObj.chioceC);
    document.getElementById("answer4").textContent = questionObj.chioceD;
    document.getElementById("answer4").setAttribute("value", questionObj.chioceD);
    correctAnswer = questionObj.answer;
    objNumber++;
}

function startQuiz() {
    document.getElementById("quizDiv").style.visibility = "visible";
    document.getElementById("startQuiz").style.visibility = "hidden";
    document.getElementById("nextQuestion").style.visibility = "visible";
    renderQuestion();
    setTimer();
}

// Verify the user answers:
function checkAnswer(object) {
    console.log(object.value);
    console.log(correctAnswer);

    if (correctAnswer == object.value) {
        score++;
    } else {
        secondLeft -= 10;
    }

    console.log(score);
    renderQuestion();
    document.getElementById("currentScore").textContent = score.toString();
}

// Once the user complete the quiz, will take the user to the HighScore page and display the quiz score:
function displayScores() {
    document.getElementById("highscore").textContent = localStorage.getItem("score");
    console.log(localStorage.getItem("score"));
    console.log("something ");
}

// Take the user back to the quiz page and retake the quiz:
function returnToHome() {
    location.href = "index.html";
}

// Timer setup once the user click on start button and start the quiz:
function setTimer() {
    var timerInterval = setInterval(function () {
        secondLeft--;
        document.getElementById("timer").textContent = secondLeft;

    }, 1000);
}
