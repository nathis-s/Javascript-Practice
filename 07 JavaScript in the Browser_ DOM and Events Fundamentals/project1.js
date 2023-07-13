// document.querySelector('.input_value').value=43;
// document.querySelector('.quotes').textContent='Correct guessing';
// document.querySelector('.current_score').textContent=20;
// document.querySelector('.high_score').textContent=50;

let randomNumber=Math.trunc(Math.random()*20)+1;
document.querySelector('.random_no').textContent=randomNumber;

var currentScore=20;

var highScore=Number(document.querySelector('.high_score').textContent);
console.log(highScore);

var displayMessage = function (message){
    document.querySelector('.quotes').textContent=message;
}

document.querySelector('.check_btn').addEventListener('click',function(){
    const val=Number(document.querySelector('.input_value').value);
    if(currentScore==0 && val!=randomNumber){
        displayMessage('You loose the game');
    }
    else if(val!=randomNumber){
        displayMessage(val>randomNumber ? 'Too high' : 'Too low');
        currentScore--;
        document.querySelector('.current_score').textContent=currentScore;
    }
    else if(!val){
        displayMessage('Please enter a number');
    }
    else{
        displayMessage('Correct number');
        document.querySelector('body').style.backgroundColor='green';
        if(currentScore>highScore){
            highScore=currentScore;
            document.querySelector('.high_score').textContent=highScore;
        }
    }
})

document.querySelector('.again_btn').addEventListener('click',function(){
    randomNumber=Math.trunc(Math.random()*20)+1;
    document.querySelector('.random_no').textContent=randomNumber;
    currentScore=20;
    document.querySelector('.current_score').textContent=currentScore;
    document.querySelector('body').style.backgroundColor='black';
    document.querySelector('.input_value').value='';
    displayMessage('Start Guessing ..');
})

