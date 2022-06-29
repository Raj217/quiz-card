let correctAnswers = 0;
let currentQuestion = -1;
let optionSelected = -1

const question = document.getElementById("question");
const quiz = document.getElementById("quiz");
const options =  document.querySelectorAll(".options ul li input")
const optionsDesc = document.querySelectorAll(".options ul li label");
const submitButton = document.querySelector("button");

function nextQuestion() {
    currentQuestion++;
    question.innerHTML = quizData[currentQuestion].question;
    optionsDesc.forEach((option, i)=>{
        option.innerHTML = quizData[currentQuestion].options[i];
    });
}
options.forEach((option)=> {
    option.checked = false;
})
nextQuestion();


submitButton.addEventListener('click', ()=> {
    for (let i=0; i<options.length; i++) {
        if (options[i].checked === true) {
            optionSelected = i;
            break;
        }
        optionSelected = -1;
    }
    if (optionSelected != -1) {
      if (optionSelected === quizData[currentQuestion].answer) {
        correctAnswers++;
      }
        if (currentQuestion < quizData.length - 1) {
            options[optionSelected].checked = false;
            nextQuestion();
        } else {
            quiz.innerHTML = `<h1 style="padding: 20px">You have answered ${correctAnswers}/${quizData.length}</h1>`;
            submitButton.innerHTML = `<button onclick="location.reload()">Restart</button>`;
        }
    }
      
})