var start = true;

var judgement = document.getElementsByClassName("judgement");
    judgement[0].innerText = "";

const questions = [{
        id: 0,
        q: "How many people playing in soccer?",
        answer: [
                { text: "19", isCorrect: false },
                { text: "14", isCorrect: false },
                { text: "11", isCorrect: true },
                { text: "12", isCorrect: false }
        ]
    },
    {
        id: 1,
        q: "How tall I am?",
        answer: [
                { text: "178", isCorrect: false },
                { text: "174", isCorrect: false },
                { text: "179", isCorrect: true },
                { text: "165", isCorrect: false }
        ]
    },
    {
        id: 2,
        q: "How many pencil on my desk?",
        answer: [
                { text: "1", isCorrect: false },
                { text: "2", isCorrect: false },
                { text: "3", isCorrect: true },
                { text: "4", isCorrect: false }
        ]
    }
]

var start = true;

function iterate(id) {

    const question = document.getElementById("question");

    question.innerText = questions[id].q;

    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const btn3 = document.getElementById('btn3');
    const btn4 = document.getElementById('btn4');

    btn1.innerText = questions[id].answer[0].text;
    btn2.innerText = questions[id].answer[1].text;
    btn3.innerText = questions[id].answer[2].text;
    btn4.innerText = questions[id].answer[3].text;

    btn1.value = questions[id].answer[0].isCorrect;
    btn2.value = questions[id].answer[1].isCorrect;
    btn3.value = questions[id].answer[2].isCorrect;
    btn4.value = questions[id].answer[3].isCorrect;

}
let selected = "";

btn1.addEventListener("click", function() {
    btn1.style.backgroundColor = "yellow";
    selected = btn1.value;
});

btn2.addEventListener("click", function() {
    btn2.style.backgroundColor = "yellow";
    selected = btn2.value;
});

btn3.addEventListener("click", function() {
    btn3.style.backgroundColor = "yellow";
    selected = btn3.value;
});

btn4.addEventListener("click", function() {
    btn4.style.backgroundColor = "yellow";
    selected = btn4.value;
});

/*if selected == true {
    judgement = "True";
    judgement.style.color = "green";
} else {
    judgement = "False";
    judgement.style.color = "red";
};
*/
if (start) {
    iterate("0");
}

/*addEventListerer.btn ("click" ()) {
    if (questions[id].answer.isCorrect === true) {
        body.createElement(div).innerHTML = "<div>True</div>";
    }
}*/

/*addEventListerer.getElementByClass('btn') ("click" ()) {
    if (questions[id].answer.isCorrect === true) {
        body.getElementsByClass(judgement) = "True"
    }*/

/*const judgement = document.getElementsByClassName("judgement");*/

/*btn.addEventListener("click", () => {
    if (question[id].answer.isCorrect == "true") {
        body.innerHTML. = "True";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "False";
        result[0].style.color = "red";
    }
})
}
*/