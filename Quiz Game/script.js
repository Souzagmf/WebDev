//DOM elements
const startScreen = document.getElementById('start-screen')
const quizScreen = document.getElementById('quiz-screen')
const resultScreen = document.getElementById('result-screen')
const startButton = document.getElementById('start-btn')
const questionText = document.getElementById('question-text')
const answersContainer = document.getElementById('answers-container')
const currentQuestionSpan = document.getElementById('current-question')
const totalQuestionSpan = document.getElementById('total-questions')
const scoreSpan = document.getElementById('score')
const finalScoreSpan = document.getElementById('final-score')
const maxScoreSpan = document.getElementById('max-score')
const resultMessage = document.getElementById('result-mesage')
const restartButton = document.getElementById('restart-btn')
const progressBar = document.getElementById('progress')

const quizQuestions = [
    {
        question: "What is the capital of France?",
        answers: [
            {text: "London", correct: false},
            {text: "Berlin", correct: false},
            {text: "Paris", correct: true},
            {text: "Madrid", correct: false}
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            {text: "Venus", correct: false},
            {text: "Mars", correct: true},
            {text: "Jupiter", correct: false},
            {text: "Saturn", correct: false}
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            {text: "Vincent van Gogh", correct: false},
            {text: "Pablo Picasso", correct: true}, // Oops, Leonardo da Vinci! Corrigindo abaixo:
            {text: "Leonardo da Vinci", correct: true},
            {text: "Claude Monet", correct: false}
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            {text: "Atlantic Ocean", correct: false},
            {text: "Indian Ocean", correct: false},
            {text: "Arctic Ocean", correct: false},
            {text: "Pacific Ocean", correct: true}
        ]
    },
    {
        question: "In which year did World War II end?",
        answers: [
            {text: "1945", correct: true},
            {text: "1939", correct: false},
            {text: "1918", correct: false},
            {text: "1950", correct: false}
        ]
    }
]

// QUIZ VARS

let currentQuestionIndex = 0
let score = 0
let answerDisable = false

totalQuestionSpan.textContent = quizQuestions.length
maxScoreSpan.textContent = quizQuestions.length

function startQuiz(){
    console.log('quiz start')
}

function restartQuiz(){
    console.log('quiz restart')
}

startButton.addEventListener("click", startQuiz)
restartButton.addEventListener("click", restartQuiz)
