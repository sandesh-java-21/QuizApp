quizData = [

    {
        question:"What Is The Full Form Of HTML?",
        a:"Hyper Text Markup Language",
        b:"Hydra Text Machine Learnign",
        c:"Hydra Testra Molecule Lithium",
        d:"Horizontal Testing Markup Language",
        correct:"a",
    },

    {
        question:"Who Is the President Of US?",
        a:"Sandesh Batra",
        b:"Joe Biden",
        c:"Donald Trump",
        d:"Barak Obama",
        correct:"b",
    },

    {
        question:"The tags in HTML are ?",
        a:"case-sensitive",
        b:"in upper case",
        c:"not case sensitive",
        d:"in lowercase",
        correct:"c",
    },

    {
        question:"HTML uses ?",
        a:"User defined tags",
        b:"Pre-specified tags",
        c:"Fixed tags defined by the language",
        d:"Tags only for linking",
        correct:"c",
    },

    {
        question:"HTML web pages can be read and rendered by ?",
        a:"Compiler",
        b:"Server",
        c:"Web Browser",
        d:"Interpreter",
        correct:"c",
    },
];


const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();


function loadQuiz(){
    deselectAnswers();
    const currectQuestion = quizData[currentQuiz];

    questionEl.innerText = currectQuestion.question;
    a_text.innerHTML = currectQuestion.a;
    b_text.innerHTML = currectQuestion.b;
    c_text.innerHTML = currectQuestion.c;
    d_text.innerHTML = currectQuestion.d;
    
}



function deselectAnswers(){
    answerEls.forEach((answerEl)=>{
        answerEl.checked = false;
    });
}

function getSelectAnswer(){
    let answer = undefined;
    answerEls.forEach((answerEl)=>{
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}


submitBtn.addEventListener("click",()=>{
    const answer = getSelectAnswer();
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz<quizData.length){
            loadQuiz();
        }
        else{
            quiz.innerHTML = `<h2> Your Score Is ${score}/${quizData.length}</h2>
            <button onclick="location.reload()"> Reload</button> `;
        }

    }
});







