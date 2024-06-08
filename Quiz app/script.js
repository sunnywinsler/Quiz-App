const question=[
  {
    question: "which is largest animal in the world?",
    answers: [
      
       { text: "shark",correct:false},
       { text: "Blue whale",correct:true},
       { text: "Elephant",correct:false},
       { text: "Giraffe",correct:false},
      
    ]

  },

  {
    question: "which is smallest country in the world?",
    answers: [
      
       { text: "Bhutan",correct:false},
       { text: "Vatican city",correct:true},
       { text: "Nepal",correct:false},
       { text: "Sri Lanka ",correct:false},
      
    ]

  },

  {
    question: "which is the largest desert in the world?",
    answers: [
      
       { text: "thar",correct:false},
       { text: "Antarctica",correct:true},
       { text: "sahara",correct:false},
       { text: "Gobi",correct:false},
      
    ]

  },
  {
    question: "which is the smallest continent in the world?",
    answers: [
      
       { text: "Asia",correct:false},
       { text: "Australia",correct:true},
       { text: "Arctic",correct:false},
       { text: "Africa",correct:false},
      
    ]
  },
];

const questionElement=document.getElementById("Question");
const answerButtons=document.getElementById("answer-button");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
  currentQuestionIndex=0;
  score=0;
  nextButton.innerHTML="Next";
  showQuestion();
}

function showQuestion(){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo=currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.
  question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML=answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click",selectAnswer);
  });
}

function resetState(){
  nextButton.style.display = "none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

startQuiz();

