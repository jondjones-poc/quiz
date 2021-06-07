const quizData = [{
        question: "Pick a Letter",
        a: "a",
        b: "b",
        c: "c",
        d: "d",
        correct:  "b",
    },{
        question: "Pick a Number",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        correct:  "1",
    }
]

const quiz = document.getElementById('quiz');
const question = document.getElementById('question');
const aText = document.getElementById('a_text');
const bText = document.getElementById('b_text');
const cText = document.getElementById('c_text');
const dText = document.getElementById('d_text');
const submit = document.getElementById('submit');
const answerElements = document.querySelectorAll('.answer');

let currentQuiz = 0;
let score = 0;

const deselectAnswers= () => {
    answerElements.forEach((answer) => answer.checked = false);
}

const getSelected = () => {
    let correct;

    answerElements.forEach((answer) => {
        if (answer.checked) {
            correct = answer.id;
        }
    });

    return correct;
}

const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    question.innerText = currentQuizData.question;
    aText.innerText = currentQuizData.a;
    bText.innerText = currentQuizData.b;
    cText.innerText = currentQuizData.c;
    dText.innerText = currentQuizData.d;
} 

submit.addEventListener('click', () => {
    const result = getSelected();
    console.log(result)

    if (result === quizData[currentQuiz].correct) {
        score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
        loadQuiz()
    } else {
        quiz.innerHTML = `<h2>You answered ${score} out of ${quizData.length} correctly</h2>
        
        <button onclick="location.reload()">Start Again</button`;
    }
})

loadQuiz();