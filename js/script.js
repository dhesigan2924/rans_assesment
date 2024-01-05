const startBtn=document.querySelector('.start-btn');
const popupInfo=document.querySelector('.popup-info');
const exitBtn=document.querySelector('.exit-btn');
const main=document.querySelector('.main');
const continueBtn=document.querySelector('.continue-btn');
const quizSection=document.querySelector('.quiz-section');
const quizBox=document.querySelector('.quiz-box');
const preBtn=document.querySelector('.pre-btn');
const resultBox=document.querySelector('.result-box');
const tryAgainBtn=document.querySelector('.tryAgain-btn');
const repBox=document.querySelector('.repBox');
const reporta=document.querySelector('.Rep-btn');
const popupInfo2=document.querySelector('.popup-info2');

let arr =[];
let arr2=[];
let err = 0;
let ANS=0;
let Ansforcr=0;
startBtn.onclick=()=>{
    popupInfo.classList.add('active');
    main.classList.add('active');
}
exitBtn.onclick=()=>{
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}
continueBtn.onclick=()=>{
    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');
    showQuestions(0);
    questionCounter(1);
}
tryAgainBtn.onclick=()=>{
    quizBox.classList.add('active');
    nextBtn.classList.remove('active');
    resultBox.classList.remove('active');

    questionCount=0;
    questionNumb=1;
    showQuestions(1);
    questionCounter(questionNumb);
}
let questionCount=0;
let questionNumb=1;
const nextBtn=document.querySelector('.next-btn');
nextBtn.onclick=()=>
{
    if(questionCount<questions.length-1)
    {
    questionCount++;
    showQuestions(questionCount);
    questionNumb++;
    questionCounter(questionNumb);
    }
    else{
        console.log("Questions Completed");
        showResultBox();
    }
}

const optionList=document.querySelector('.option-list');
function showQuestions(index)
{
    const questionText=document.querySelector('.question-text');
    questionText.textContent=`${questions[index].numb}. ${questions[index].question}`;
    console.log(questions[index])
    let optionTag=`<div class="option"><span>${questions[index].options[0]}</span></div>
    <div class="option"><span>${questions[index].options[1]}</span></div>`;
    optionList.innerHTML=optionTag;
    const option=document.querySelectorAll('.option'); 
        option[1].setAttribute('onclick','optionSelected(this)');
        option[0].setAttribute('onclick','optionSelected(this)');
} 
function optionSelected(answer)
{
    let userAnswer=answer.textContent;
    let correctAnswer=questions[questionCount].answer;
    console.log(correctAnswer);
    if(userAnswer==correctAnswer)
    {
        answer.classList.add('correct');
        Ansforcr=1;
        console.log("true");
    }
    else{
        err = questionNumb;
        answer.classList.add('incorrect');
        ANS++;
        console.log("questionNumb error");
        console.log(err);
        arr.push(err);
    }
    nextBtn.classList.add('active');   
    console.log(arr);
}

preBtn.onclick=()=>
{
    if(questionCount>0)
    {
    questionCount--;
    showQuestions(questionCount);

    questionNumb--;
    questionCounter(questionNumb);
    }
    else{
        console.log("no questions");
    }
}

function showResultBox() {
    quizBox.classList.remove('active');
    resultBox.classList.add('active');

    const textBox = document.createElement('div');
    textBox.classList.add('text-box'); 
    resultBox.appendChild(textBox);
    const circularProgress = document.querySelector('.circular-progress');
    const progressValue = document.querySelector('.progress-value');
    let progressStartValue = -1;
    let progressEndValue = 100 - ((ANS / questions.length) * 100);

    let speed = 20;

    if (Ansforcr === 0) {
        progressEndValue = 0;
    }

    let progress = setInterval(() => {
        progressStartValue++;
        progressValue.textContent = `${progressStartValue}`;
        circularProgress.style.background = `conic-gradient(var(--pageclr) ${progressStartValue * 3.6}deg, rgba(255, 255, 255, .1) 0deg)`;

        if (progressStartValue == progressEndValue) {
            clearInterval(progress);
        }
    }, speed);
}

reporta.onclick=() => {
    popupInfo2.classList.add('active');
    main.classList.add('active');
    let n=0;
    const questionText=document.querySelector('.question-text');
    function calculateReport() {
    for (let i = 1; i <= 5; i++) {
        if(i==arr[n])
        {
            
            questionText.textContent=`${questions[n].sol}. ${questions[n].question}`;
            console.log(questions[n].sol);
            arr2.push(questions[n].numb,questions[i].sol);
            console.log(i + "    is question errored");
            n+=1;
        }
    }
    return (arr2); 
   }
    const reportElement = document.getElementById('result');
    const reportValue = calculateReport();

    reportElement.innerHTML = `Result: ${reportValue}`;
}



