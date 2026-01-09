
const quiz =[
    {
        q:"Which keyword is used to declare a constant variable in JavaScript? ",
        o:["var", 
            " let",
             " const",
             " static"
        ],
        a:2,
    },
    {
        q:" Which of the following is NOT a JavaScript data type? ",
        o:[" Symbol","Character" ,"Undefined" , "Boolean"],
        a:1,
    },
    {
         q:" What is JavaScript?",
        o:["JavaScript is a scripting language used to make the website interactive"," JavaScript is an assembly language used to make the website interactive",".JavaScript is a compiled language used to make the website interactive","All of the mentioned",],
        a:0,
    },
    {
        q:"Which of the following is correct about JavaScript?",
        o:[".JavaScript is an Object-Based language","JavaScript is Assembly-language","JavaScript is an Object-Oriented language"," JavaScript is a High-level language",],
        a:0,

    },
    {
         q:" Which of the following bootstrap styles can be used to create a default progress bar?",
        o:[".nav-progress"," .link-progress-bar",".progress, .progress-bar","All of the mentioned",],
        a:2,
    },
    {
        q:"The Bootstrap grid system is based on how many columns?",
        o:["4","6","12","8"],
        a:2,

    },
    {
        q:" Which of the following class is used to create a responsive navigation bar in Bootstrap?",
        o:["navbar-fixed","navbar-expand","navbar-light","navbar-collapse",],
        a:1,
    },
    {
        q:"Which plugin is used to cycle through elements, like a slideshow?",
        o:["Carousel Plugin","Modal Plugin","Tooltip Plugin","None of the mentioned",],
        a:0,
    },
    {
        q:"Which class in Bootstrap applies a hover effect to a specific table row or cell?",
        o:["Active","Hoverable","Highlight"," Danger"],
        a:0,

    },
    {
         q:" Which Bootstrap class is used to create a green background in a table row?",
        o:["table-success","table-primary","table-warning","table-info"],
        a:0,

    },
]
let index = 0;
let question = document.querySelector('#questions')
let options = document.getElementsByName('option')
let prev = document.getElementById('prev')
let next = document.getElementById('next')
let submit = document.getElementById('output')
let answer = Array(quiz.length).fill(null);

options.forEach((opt) => {
    opt.addEventListener('change', function () {
        answer[index] = Number(this.value);
    });
});


function showQuestion()
{
    question.innerHTML = quiz[index].q
    const arr = quiz[index].o
    document.getElementById('option1').innerHTML = arr[0]
    document.getElementById('option2').innerHTML = arr[1]
    document.getElementById('option3').innerHTML = arr[2]
    document.getElementById('option4').innerHTML = arr[3]

    prev.disabled = index == 0
    console.log(index, quiz.length - 1)

    if(index == quiz.length-1)
    {
        next.style.display = "none"
        submit.style.display = "block"
    }
    else
    {
        submit.style.display = "none"
        next.style.display = "block"  
    }

    options.forEach((ele)=>
    {
        console.log(ele.value)
        ele.checked = false
    }) 
    
    options.forEach((opt)=>
    {
        opt.checked = Number(opt.value)=== answer[index]
    });
    prev.disabled = index == 0

}


function nextQuestion() {
    if (index < quiz.length - 1) {
        index++
        showQuestion()
    }
}

function prevQuestion()
{
    index--;
    showQuestion()
}
showQuestion()

function output()
{
    let score = 0;
    quiz.forEach((q,index)=>{
        if(q.a == answer[index])
        {
            score++
        }
    })
    let result =`<h1>${score}/ ${quiz.length} </h1>`
    document.body.innerHTML = result
}
