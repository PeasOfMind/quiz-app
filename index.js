'use strict';

let count = 0;
let score = 0;

function incrementCount(){
    count++;
}

function incrementScore(){
    score++;
}

function reset(){
    count = 0;
    score = 0;
}

function getProgressString(quizList, currentScore){
    return `<section role="region" class="track-progress">
    <p class="question-number">Question: ${count+1} of ${quizList.length}</p>
    <p class="score">Score: ${currentScore} of ${quizList.length}</p>
</section>`
}

function generateStartPage(){
    //add descriptor and button to start 
    $('#js-input').empty();
    $('#js-input').append(`<h2 class="start-subtitle">There are so many unfamiliar 
    ingredients all over the products we use and consume. Are you an informed 
    consumer?</h2>
    <div class="container">
    <button class="js-next-question">Start Quiz</button></div>`);
}

//Takes the array and shuffles the elements to return in a NEW array;
function shuffle(array){
    let shuffledArray = array.slice();
    for (let i = shuffledArray.length-1; i >=0; i--){
        let randIdx = Math.floor(Math.random()*(i+1));
        let itemAtI = shuffledArray[randIdx];

        shuffledArray[randIdx] = shuffledArray[i];
        shuffledArray[i] = itemAtI; 
    }
    return shuffledArray;
}

//converts the answers array into a string of radio buttons
function getAnswersString(answersArray){
    const shuffledAnswers = shuffle(answersArray);
    const answers = shuffledAnswers.map((option, index) => `<input type="radio" 
    name="answer" value="${option}" class="form-radio" id="option-${index+1}" required>
    <label for="option-${index+1}">${option}</label><br>`);
    return answers.join("");
}

function getQuestionString(quizList){
    //convert the question object into an HTML string
    const questionObj = quizList[count];
    const answersString = getAnswersString(questionObj.answers);
    return `<form id ="js-question-form">
    <fieldset>
        <legend><h3>Question ${count+1}</h3>
        ${questionObj.question}</legend>
        ${answersString}
        <button type="submit" class="submitButton">Submit</button>
    </fieldset>
</form>`
}

function generateQuestionPage(){
    //render the question on the page
    $('#js-input').on('click', '.js-next-question', event => {
        $('#js-input').empty();
        const questionString = getProgressString(KEY, score) + 
        getQuestionString(KEY);
        $('#js-input').append(questionString);
        $('main').removeClass('bumpUp');
        $('h1').removeClass('hidden');
    });
}

function getResponseString(quizList, userAnswer){
    //check user response & update the score
    let responseString = "";
    let answerType;
    if (userAnswer === quizList[count].correct){
        incrementScore();
        responseString += `<h2 class="response">Yes, that's right!</h2>`;
        answerType = 'right';
    } else {
        responseString += `<h2 class="response">Sorry, that's wrong.<br>
        The correct answer is ${quizList[count].correct}.</h2>`;
        answerType = 'wrong';
    }
    // check to see if there's a specific response to right or wrong answer &
    // add that image to the feedback page
    if (quizList[count].response && typeof quizList[count].response === 'object'){
        responseString += `<section role="region" class="img-response">
        ${quizList[count].response[answerType]}</section>`
    } else if (quizList[count].response){
        // check to see if there's a general image response
        responseString += `<section role="region" class="img-response">
        ${quizList[count].response}</section>`
    }
    return responseString;
}

function buttonForNext(quizList){
    //determines whether button click leads to next question or final page
    if(count === quizList.length-1) return `<div class="container">
    <button id="js-final-page">Complete</button><div>`
    else return `<div class="container"><button class="js-next-question">
    Next Question</button></div>`
}

function getFeedbackString(quizList){
    //convert the feedback string into an HTML string
    const buttonString = buttonForNext(quizList);
    return `<section role="region" class="feedback">
    <p>${quizList[count].feedback}</p>
    ${buttonString}</section>`
}

function generateFeedbackPage(){
    //render the feedback page
    $('#js-input').on('submit','#js-question-form', event => {
        event.preventDefault();
        const selectedAnswer = $('input[type=radio][name=answer]:checked').val();
        const responseString = getResponseString(KEY, selectedAnswer);
        const feedbackString = getProgressString(KEY, score) + 
        responseString + getFeedbackString(KEY, selectedAnswer);
        incrementCount();
        $('#js-input').empty();
        $('#js-input').append(feedbackString);
        $('main').addClass('bumpUp');
        $('h1').addClass('hidden');
    });
}

function getScoreResponse(){
    //get a specific response based on the user's score
    const percentRight = score/count;
    if (percentRight > 0.7) return RESPONSES[2];
    else if (percentRight > 0.4) return RESPONSES[1];
    else return RESPONSES[0];
}

function getFinalString(quizList){
    //generates the HTML string for final page
    const scoreResponseString = getScoreResponse();
    return `<h2>You got ${score} out of ${quizList.length} right.</h2>
    <p>${scoreResponseString}</p>
    <div class="container"><button id="reset-page">
    Take the quiz again</button></div>`
}

function generateFinalPage(){
    //render the final page
    $('#js-input').on('click','#js-final-page', event => {
        const finalString = getFinalString(KEY);
        $('#js-input').empty();
        $('#js-input').append(finalString); 
        $('main').removeClass('bumpUp');
        $('h1').removeClass('hidden');
        backToStart();
    });
}

function backToStart(){
    $('#js-input').on('click','#reset-page', event =>{
        // reset count and score to 0
        reset();
        generateStartPage();
    });
}

$(function (){
    generateStartPage();
    generateQuestionPage();
    generateFeedbackPage();
    generateFinalPage();
});