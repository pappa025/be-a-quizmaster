/*
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById ('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex

const questions = [
    {
        question: 'What is 1+2',
        answers: [
            { text: '4', correct: true},
            { text: '234', correct: false}
            { text: '234', correct: false}
            { text: '234', correct: false}
        ]
    },
    {
        question: 'What is 2+2',
        answers: [
            { text: '4', correct: true},
            { text: '234', correct: false}
            { text: '234', correct: false}
            { text: '234', correct: false}
        ]
    },
    {
        question: 'What is 3+2',
        answers: [
            { text: '4', correct: true},
            { text: '234', correct: false}
            { text: '234', correct: false}
            { text: '234', correct: false}
        ]
    },
    {
        question: 'What is 4+2',
        answers: [
            { text: '4', correct: true},
            { text: '234', correct: false}
            { text: '234', correct: false}
            { text: '234', correct: false}
        ]
    },
    {
        question: 'What is 5+2',
        answers: [
            { text: '4', correct: true},
            { text: '234', correct: false}
            { text: '234', correct: false}
            { text: '234', correct: false}
        ]
    },
]

startButton.addEventListener('click', startGame)


function startGame() {
console.log('Started')
startButton.classList.add('hide')
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
setNextQuestion()
}


function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}
function selectAnswer(e) {

}
*/
const questions = [
    {
            question: "How many players are allowed on a soccer pitch ?",
            option1: "10 players",
            option2: "11 players",
            option3: "9 players",
            option4: "12 players",
            correctOption: "option3"
    },
    {
        question: "How many players are allowed on a soccer pitch ?",
        option1: "10 players",
        option2: "11 players",
        option3: "9 players",
        option4: "12 players",
        correctOption: "option3"
},
{
    question: "How many players are allowed on a soccer pitch ?",
    option1: "10 players",
    option2: "11 players",
    option3: "9 players",
    option4: "12 players",
    correctOption: "option3"
},
{
    question: "How many players are allowed on a soccer pitch ?",
    option1: "10 players",
    option2: "11 players",
    option3: "9 players",
    option4: "12 players",
    correctOption: "option3"
},
]

let questionNumber = 1
let playerScore = 0
let wrongAttempt = 0
let indexNumber = 0

let shuffledQuestion = [] 
function handleQuestion() { 
    while (shuffledQuestions.length <= 5) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


