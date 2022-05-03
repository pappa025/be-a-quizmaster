/* Global variables */

var ul = document.getElementById('ul')
var nextButton = document.getElementById('btnNext');
var quizbox = document.getElementById('questionBox')
var opt1 = document.getElementById('opt1')
var opt2 = document.getElementById('opt2')
var opt3 = document.getElementById('opt3')
var opt4 = document.getElementById('opt4')

/* Questions & the main js script*/

var app={
        questions:[
            {
                q:'When did Orville and Wilbur Wright make the first successful flight in the world?',
                options: ['1903', '1887', '1907', '1914'],
                answer:1
            },

            {
                q:'In an emergency when the aeroplane experiences a sudden loss in cabin pressure, for how many minutes can an oxygen mask provide us with oxygen?',
                options: ['5 minutes', '10 minutes', '15 minutesona', '20 minutes'],
                answer:2
            },
            {
                q:'What is the name of the white lines that an aeroplane leaves in the sky?',
                options: ['Skotrails', 'Montrails', 'Contrails', 'Dontrails'],
                answer:3
            },
            {
                q:'What is generally considered to be the oldest airline, which was established in 1919?',
                options: ['Quantas', 'Delta', 'Wizz', 'KLM'],
                answer:4
            },
            {
                q:'What is the name of the parts that spin around on top of a helicopter?',
                options: ['Motor blades', 'Rotor blades', 'Spinning blades', 'Hoovering blades'],
                answer:2
            },{
                q:'In 1927, Charles Lindbergh became the first person to cross which watermass on a solo, non-stop flight with his aeroplane “the Spirit of St. Louis”?',
                options: ['The Atlantic Ocean', 'The Pacific Ocean', 'The Indian Ocean', 'Mediterrian Sea'],
                answer:1
            },{
                q:'Despite its name, what is the actual colour of the black box in an aeroplane, which is also known as the Flight Data Recorder?',
                options: ['Green', 'Orange', 'Blue', 'Yellow'],
                answer:2
            },{
                q:'Which of the following terms refers to the fear of flying?',
                options: ['Planophobia', 'Aviophobia', 'Fliophobia', 'Arachnophobia'],
                answer:2
            },{
                q:'Which of the following is the most common cause of non-fatal injuries associated with aeroplanes?',
                options: ['Aeroplane crashes', 'Slips', 'Turbulence', 'Food poisoning'],
                answer:3
            },{
                q:'Which type of aeroplane was the Antonov AN-225?',
                options: ['A fighter aeroplane', 'A passenger aeroplane', 'A bomber aeroplane', 'A cargo aeroplane'],
                answer:4
            },{
                q:'Which of the following is not one of the 4 main forces that act on an aeroplane and help it fly?',
                options: ['Drag', 'Thrust', 'Weight', 'Yaw'],
                answer:4
            },{
                q:'Which of the following is supersonic aircraft?',
                options: ['Cessna 172', 'Boeing-747', 'Concorde', 'Learjet'],
                answer:3
            },{
                q:'In 2015, how many days did the Solar Impulse 2 aeroplane travel crossing continents nonstop using only solar power?',
                options: ['Almost 2 days', 'Almost 5 days', 'Almost 8 days', 'Almost 10 days'],
                answer:2
            },{
                q:'Which aircraft is the longest continuously produced military model for over 6 decades due to its solid design?',
                options: ['Skyhawk', 'Beluga', 'Hercules', 'Raptor'],
                answer:3
            },{
                q:'Which type of aircraft has wings, but has no motor?',
                options: ['Blimp', 'Glider', 'Dirigible', 'Airship'],
                answer:2
            },           
        ],

        index:0,
        
            load: function (){
            if(this.index<=this.questions.length-1){
                quizbox.innerHTML=this.index+1 + ". " +this.questions[this.index].q;
                opt1.innerHTML=this.questions[this.index].options[0];
                opt2.innerHTML=this.questions[this.index].options[1];
                opt3.innerHTML=this.questions[this.index].options[2];
                opt4.innerHTML=this.questions[this.index].options[3];
            }
            else {
                quizbox.innerHTML="Quiz Completed!";
                ul.style.display="none";
                nextButton.style.display="none";
            }
        },
        next: function(){
            this.index++;
            this.load();
        },
        check: function(ele){
            var id=ele.id.split('');
            if(id[id.length-1]==this.questions[this.index].answer){
                this.score++;
                ele.className="correct";
                this.scoreCard();
            }
            else{
                ele.className="wrong";
            }
        },
        preventClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="none";
            }
        },
        allowClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="auto";
                ul.children[i].className=''
            }
        },
        score:0,
        scoreCard:function(){
            scoreCard.innerHTML=this.questions.length + "/" + this.score;
        }
}

window.load=app.load();

function button(ele){
    app.check(ele);
    app.preventClick();
}

function next(){
    app.next();
    app.allowClick();
}

