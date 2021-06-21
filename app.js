var obj = {
    question1 : {
        question : "Html stands for",
        option1 : "Hyper text Markup Language",
        option2 : "Hyper text Markup Language 1",
        option3 : "Hyper text Markup Language 2",
        option4 : "Hyper text Markup Language 3",
        ans : "Hyper text Markup Language"
    },
    question2 : {
        question : "Html stands for 1",
        option1 : "Hyper text Markup Language",
        option2 : "Hyper text Markup Language 1",
        option3 : "Hyper text Markup Language 2",
        option4 : "Hyper text Markup Language 3",
        ans : "Hyper text Markup Language"
    },
    question3 : {
        question : "Html stands for 2",
        option1 : "Hyper text Markup Language",
        option2 : "Hyper text Markup Language 1",
        option3 : "Hyper text Markup Language 2",
        option4 : "Hyper text Markup Language 3",
        ans : "Hyper text Markup Language"
    },
    question4 : {
        question : "Html stands for 3",
        option1 : "Hyper text Markup Language",
        option2 : "Hyper text Markup Language 1",
        option3 : "Hyper text Markup Language 2",
        option4 : "Hyper text Markup Language 3",
        ans : "Hyper text Markup Language"
    },
    question5 : {
        question : "Html stands for 4",
        option1 : "Hyper text Markup Language",
        option2 : "Hyper text Markup Language 1",
        option3 : "Hyper text Markup Language 2",
        option4 : "Hyper text Markup Language 3",
        ans : "Hyper text Markup Language"
    }
}
var username = document.getElementById('username');
var password = document.getElementById('password');
var question = document.getElementById('ques');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var option4 = document.getElementById('option4');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var next = document.getElementById('next');
// var score = document.getElementById('score');
// function login(){
//     if(username === "smkhizar"){
//         if(password === 123){
//             login.className += "";
//         }
//     }

// }

// var i;
// var score = 0;
function quiz(){
    // i = 1;
    question.innerHTML = obj.question1.question;
    option1.innerHTML = obj.question1.option1;
    option2.innerHTML = obj.question1.option2;
    option3.innerHTML = obj.question1.option3;
    option4.innerHTML = obj.question1.option4;
}
function next(){
    alert("Correct Answer!");

    // if(opt1.checked){
    //     if(option1.innerHTML === obj.question1.ans){
    //         alert("Correct Answer!");
    //     } 
    // }
    // switch(i){
    //     case 1:

    //         question.innerHTML = obj.question2.question;
    //         option1.innerHTML = obj.question2.option1;
    //         option2.innerHTML = obj.question2.option2;
    //         option3.innerHTML = obj.question2.option3;
    //         option4.innerHTML = obj.question2.option4;
    // score.innerHTML = score;
    //         break;
    //     case 2:
    //         question.innerHTML = obj.question3.question;
    //         option1.innerHTML = obj.question3.option1;
    //         option2.innerHTML = obj.question3.option2;
    //         option3.innerHTML = obj.question3.option3;
    //         option4.innerHTML = obj.question3.option4;
    // score.innerHTML = score;
            
    //         break;
    //     case 3:
    //         question.innerHTML = obj.question4.question;
    //         option1.innerHTML = obj.question4.option1;
    //         option2.innerHTML = obj.question4.option2;
    //         option3.innerHTML = obj.question4.option3;
    //         option4.innerHTML = obj.question4.option4;
    // score.innerHTML = score;
            
    //         break;
    //     case 4:
    //         question.innerHTML = obj.question5.question;
    //         option1.innerHTML = obj.question5.option1;
    //         option2.innerHTML = obj.question5.option2;
    //         option3.innerHTML = obj.question5.option3;
    //         option4.innerHTML = obj.question5.option4;
    // score.innerHTML = score;
            
    //         break;
    // }
    // i++;
}
var sec = 00;
var min = 10;
var a = setInterval(() => {
    if(sec === 0){
        min--;
        sec = 60;
    }
    sec--;
}, 1000);
console.log(a);
