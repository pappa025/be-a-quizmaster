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
}
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

function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber 
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("testQuestion").innerHTML = currentQuestion.question;
    document.getElementById("btn1").innerHTML = currentQuestion.option1;
    document.getElementById("btn2").innerHTML = currentQuestion.option2;
    document.getElementById("btn3").innerHTML = currentQuestion.option3;
    document.getElementById("btn4").innerHTML = currentQuestion.option4;

}

function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}
*/

const questions = [{
        id: 0,
        q: "How many people playing in soccer?",
        a: [{ text: "5", isCorrect: false },
            { text: "8", isCorrect: false },
            { text: "11", isCorrect: true },
            { text: "9", isCorrect: false }
        ]
    }
]

var start = true;

function iterate(id) {
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";

    const question = document.getElementById("question");

    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const btn3 = document.getElementById('btn3');
    const btn4 = document.getElementById('btn4');
  
  
    // Providing option text 
    btn1.innerText = Questions[id].a[1].text;
    btn2.innerText = Questions[id].a[2].text;
    btn3.innerText = Questions[id].a[3].text;
    btn4.innerText = Questions[id].a[4].text;
  
    // Providing the true or false value to the options
    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;
    