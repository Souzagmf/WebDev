//DOM elements
const startScreen = document.getElementById('start-screen')
const quizScreen = document.getElementById('quiz-screen')
const resultScreen = document.getElementById('result-screen')
const startButton = document.getElementById('start-btn')
const questionText = document.getElementById('questions-text')
const answersContainer = document.getElementById('answers-container')
const currentQuestionSpan = document.getElementById('current-question')
const totalQuestionSpan = document.getElementById('total-questions')
const scoreSpan = document.getElementById('score')
const finalScoreSpan = document.getElementById('final-score')
const maxScoreSpan = document.getElementById('max-score')
const resultMessage = document.getElementById('result-message')
const restartButton = document.getElementById('restart-btn')
const progressBar = document.getElementById('progress')

const quizQuestions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "London", correct: false },
            { text: "Berlin", correct: false },
            { text: "Paris", correct: true },
            { text: "Madrid", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Venus", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Vincent van Gogh", correct: false },
            { text: "Pablo Picasso", correct: false },
            { text: "Leonardo da Vinci", correct: true },
            { text: "Claude Monet", correct: false }
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true }
        ]
    },
    {
        question: "In which year did World War II end?",
        answers: [
            { text: "1945", correct: true },
            { text: "1939", correct: false },
            { text: "1918", correct: false },
            { text: "1950", correct: false }
        ]
    }
]

// QUIZ VARS

let currentQuestionIndex = 0
let score = 0
let answerDisable = false

totalQuestionSpan.textContent = quizQuestions.length
maxScoreSpan.textContent = quizQuestions.length


//FUNCTIONS

function showResults() {
    resultScreen.classList.add("active")
    quizScreen.classList.remove("active")

    finalScoreSpan.textContent = score

    const percentage = (score / quizQuestions.length) * 100

    if (percentage === 100) {
        resultMessage.textContent = "Perfect! You're a genius!"
    } else if (percentage === 80) {
        resultMessage.textContent = "Great job! You know your stuff!"
    } else if (percentage === 60) {
        resultMessage.textContent = "Good effort! keep learning!"
    } else if (percentage === 40) {
        resultMessage.textContent = "Not bad! try again to improve!"
    } else {
        resultMessage.textContent = "Keep studying! you'll get better!"
    }
}

function selectAnswer(event) {
    if (answerDisable) return

    answerDisable = true
    const selectButton = event.target
    const isCorrect = selectButton.dataset.correct === "true"

    Array.from(answersContainer.children).forEach(button => {
        button.dataset.correct === "true" ? button.classList.add("correct") : button.classList.add("incorrect")
    })

    if (isCorrect) {
        score++
        scoreSpan.textContent = score
    }

    setTimeout(() => {
        currentQuestionIndex++


        //Check if has more questions
        currentQuestionIndex < quizQuestions.length ? showQustions() : showResults()
    }, 1000)
}

function showQustions() {
    //Reset state
    answerDisable = false
    const currentQuestion = quizQuestions[currentQuestionIndex]

    currentQuestionSpan.textContent = currentQuestionIndex + 1

    const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100
    progressBar.style.width = progressPercent + "%"

    questionText.textContent = currentQuestion.question

    //todo: make the questions dont show togheter
    answersContainer.innerHTML = ``

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.textContent = answer.text
        button.classList.add("answer-btn")

        button.dataset.correct = answer.correct

        button.addEventListener("click", selectAnswer)

        answersContainer.appendChild(button)
    })

}

function startQuiz() {
    currentQuestionIndex = 0
    score = 0
    scoreSpan.textContent = 0

    startScreen.classList.remove("active")
    quizScreen.classList.add("active")
    showQustions()
}

function restartQuiz() {
    resultScreen.classList.remove("active")
    startScreen.classList.add("active")
}


//EVENTS LISTENERS
startButton.addEventListener("click", startQuiz)
restartButton.addEventListener("click", restartQuiz)
