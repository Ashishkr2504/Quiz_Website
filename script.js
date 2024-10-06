const quizTemp = [
    {
        question: "What is the default return type of the main() function in C?",
        options: [
            "void",
            "int",
            "char",
            "float",
        ],
        correct: 1,
    },
    {
        question: "Which keyword is used to define a constant in C?",
        options: [
            "final",
            "constant",
            "const",
            "define",
        ],
        correct: 2,
    },
    {
        question: "Which operator is used to access the value of a variable through its pointer?",
        options: [
            "&",
            "*",
            "->",
            "@",
        ],
        correct: 1,
    },
    {
        question: "What is the size of an int data type in a 32-bit system?",
        options: [
            "1 byte",
            "2 bytes",
            "4 bytes",
            "8 bytes",
        ],
        correct: 2,
    },
    {
        question: "Which library function is used to dynamically allocate memory in C?",
        options: [
            "malloc()",
            "calloc()",
            "realloc()",
            "All of the above",
        ],
        correct: 3,
    },
    {
        question: "Which symbol is used to denote a preprocessor directive in C?",
        options: [
            "#",
            "$",
            "@",
            "&",
        ],
        correct: 0,
    },
    {
        question: "What is the result of the expression 10 % 3 in C?",
        options: [
            "1",
            "2",
            "3",
            "0",
        ],
        correct: 0,
    },
    {
        question: "Which data type is used to store a single character in C?",
        options: [
            "int",
            "char",
            "float",
            "double",
        ],
        correct: 1,
    },
    {
        question: "What does the break statement do in a loop?",
        options: [
            "Skips an iteration",
            "Terminates the loop",
            "Continues the loop",
            "Restarts the loop",
        ],
        correct: 1,
    },
    {
        question: "Which of the following is not a valid data type in C?",
        options: [
            "float",
            "char",
            "real",
            "double",
        ],
        correct: 2,
    },
];

const quiz=document.querySelector("#quiz");
const getAnswer = document.querySelectorAll(".answer");
const getQuestion = document.querySelector("#question");

// const[getQuestion,option_1,option_2,option_3,option_4]=
// document.querySelectorAll("#question,#option-1,#option-2,#option-3,#option-4");

const submitBtn = document.querySelector("#submit");

let currQuiz = 0;
let score = 0;


const loadQuiz = () => {
    const { question, options } = quizTemp[currQuiz];
    getQuestion.innerText = `${currQuiz+1}: ${question}`;
    // console.log(options);
    // window[`option_1`].innerText = options[0];
    options.forEach(
        // (curOption,index)=>(window[`option-${index + 1}`].innerText = curOption)
        (curOption, index) => (document.getElementById(`option-${index + 1}`).innerText = curOption)
    );
    // option_1.innerText=options[0];
};
loadQuiz();

const getSelectedOption = () => {
    let ans;
    getAnswer.forEach((curOption, index) => {
        if (curOption.checked)
            ans = index;
    });
    return ans;
};

const deselectOption=()=>
{
    getAnswer.forEach((curOption)=>curOption.checked=false);
};

submitBtn.addEventListener("click", () => {
    // console.log(1);
    const selectedOption = getSelectedOption();

    console.log(selectedOption);

    if(selectedOption == quizTemp[currQuiz].correct)
        score+=1;  

    currQuiz++;

    if(currQuiz<quizTemp.length)
    {
        deselectOption();
        loadQuiz();
    }
    else{
        quiz.innerHTML=`
        <div class="result">
        <h2> 🏆Your Score 🏆: ${score}/${quizTemp.lenght} Correct Answers</h2>
        <p> Congratutaions on completing th quiz! 🎊🎊 </p>
        <button class="reload button" onclick="location.reload()">Play Again 🔁</button>
        </div>
        `;
    }

});
