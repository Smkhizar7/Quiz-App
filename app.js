var questions = [
    {
        question: "Html stands for",
        option1: "Hyper Text Markup Language",
        option2: "High Text Markup Language",
        option3: "High Text Machine Language",
        option4: "Hyper Text Machine Language",
        ans: "ans1"
    },
    {
        question: "HTML is what type of language ?",
        option1: "Scripting Language",
        option2: "Markup Language",
        option3: "Programming Language",
        option4: "Network Protocol",
        ans: "ans2"
    },
    {
        question: "The year in which HTML was first proposed _______.",
        option1: "1990",
        option2: "1980",
        option3: "2000",
        option4: "1995",
        ans: "ans1"
    },
    {
        question: "Fundamental HTML Block is known as ___________.",
        option1: "HTML Body",
        option2: "HTML Tag",
        option3: "HTML Attribute",
        option4: "HTML Element",
        ans: "ans2"
    },
    {
        question: "Apart from &LeftAngleBracket;b&RightAngleBracket; tag, what other tag makes text bold ?",
        option1: "&LeftAngleBracket;fat&RightAngleBracket;",
        option2: "&LeftAngleBracket;strong&RightAngleBracket;",
        option3: "&LeftAngleBracket;black&RightAngleBracket;",
        option4: "&LeftAngleBracket;emp&RightAngleBracket;",
        ans: "ans2"
    }
]
var body = document.getElementById('body');
var username = document.getElementById('name');
username.innerHTML = localStorage.getItem("Logined User Email");
var question = document.getElementById('ques');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var option4 = document.getElementById('option4');
var nextBtn = document.getElementById('nextBtn');
var questionNo = document.getElementById('currentNo');
var totalquestions = document.getElementById('totalNo');
var minutes = document.getElementById('min');
var seconds = document.getElementById('sec');
var quizbox = document.getElementById('quiz');
var mainbox = document.getElementById('main');
var fire = firebase.database().ref('users');
totalquestions.innerHTML = questions.length;
var questionCount = 0;
var marks = 0;
function check() {
    var opt1 = document.getElementById('ans1');
    var opt2 = document.getElementById('ans2');
    var opt3 = document.getElementById('ans3');
    var opt4 = document.getElementById('ans4');
    switch (questions[questionCount].ans) {
        case "ans1":
            if (opt1.checked) {
                marks++;
            }
            break;
        case "ans2":
            if (opt2.checked) {
                marks++;
            }
            break;
        case "ans3":
            if (opt3.checked) {
                marks++;
            }
            break;
        case "ans4":
            if (opt4.checked) {
                marks++;
            }
            break;
    }
}
function timer() {
    var sec = 00;
    var min = 10;
    var a = setInterval(function () {
        if (sec === 0) {
            --min;
            sec = 60;
        }
        --sec;
        if (min === 00 && sec === 00) {
            clearInterval(a);
            submit();
        }
        minutes.innerHTML = min;
        seconds.innerHTML = sec;
    }, 1000);
}
function quiz() {
    var questionList = questions[questionCount];
    question.innerHTML = questionList.question;
    option1.innerHTML = questionList.option1;
    option2.innerHTML = questionList.option2;
    option3.innerHTML = questionList.option3;
    option4.innerHTML = questionList.option4;
    timer();
    questionNo.innerHTML = (questionCount + 1);
}
function submit() {
    check();
    quizbox.setAttribute('class', 'resultBox');
    var greeting;
    var uName = localStorage.getItem("Logined User Email");
    localStorage.setItem("Score",marks);
    if (marks >= 3) {
        greeting = "Congratulations ";
    }
    else {
        greeting = "Sorry ";
    }
    quizbox.innerHTML = '<div class="header"><div><h1>Result</h1></div></div><div class="result">' + greeting + ' Mr ' + uName + '</br>Your score is ' + marks + '</div>';
    var obj = {
        Email:uName,
        Score:marks
    }
    var key = fire.push().key;
    fire.child(key).set(obj);
}
function nextQuestion() {
    check();
    if (questionCount < questions.length) {
        questionCount++;
        var questionList = questions[questionCount];
        question.innerHTML = questionList.question;
        option1.innerHTML = questionList.option1;
        option2.innerHTML = questionList.option2;
        option3.innerHTML = questionList.option3;
        option4.innerHTML = questionList.option4;
        questionNo.innerHTML = (questionCount + 1);
        if (questionCount === questions.length - 1) {
            nextBtn.innerHTML = "Submit";
            nextBtn.setAttribute('onclick', 'submit()');
        }
    }
}
quiz();