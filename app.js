
// function for when rules is clicked
const btns = document.querySelectorAll('#btn')
const step1 = document.querySelector('.step-1');
const step4 = document.querySelector('.step-4');
const UserChoice = document.querySelector('.user-choice');
const computerChoice = document.querySelector('.computer-choice');
const rulesModal = document.querySelector('.rules-modal');
const rulesBtn = document.querySelector('.rules-btn');
const closeBtn = document.querySelector('.close-btn');
let scoreValue = document.querySelector('#score-value');
const resultText = document.querySelector('.result-text');
const youWin = document.querySelector('.you-win');
const userWinGlow = document.querySelector('.win-glow.user');
const houseWinGlow = document.querySelector('.win-glow.house');
rulesBtn.addEventListener('click', function(){
    rulesModal.classList.toggle('hidden');
} )
closeBtn.addEventListener('click', function(){
    rulesModal.classList.add('hidden');

})
// function for when a user picks an option
let userSelection 
let computerSelection 
let Value = 0; 
scoreValue.innerHTML= Value;
let win=[];
btns.forEach(function(btn){
btn.addEventListener('click', userPicked)
})

// function for displaying user choice
function userPicked(){
    userSelection = this.className;
    // console.log(Userselection);
    let userElement =UserChoice.querySelector('#user');
    userElement.setAttribute('class', `${userSelection}`); 
    // console.log(userElement);
    let userElementMain =UserChoice.querySelector('#user-main');
    userElementMain.setAttribute('class', `${userSelection}-circle`); 
    // console.log(userElementMain);
    let userElementImg =UserChoice.querySelector('#user-img');
    userElementImg.setAttribute('src', `./images/icon-${userSelection}.svg`); 
    // yess progress made!!!
    // console.log(userElementImg);
    
    step1.classList.add('hidden')
    step4.classList.remove('hidden')

    // function for delaying computer choice diaplay
    setTimeout(housepicked,700)
    
}


// function for randomly selecting computer choice
let computerElement =computerChoice.querySelector('#computer');
let computerElementMain =computerChoice.querySelector('#computer-main');
let computerElementImg =computerChoice.querySelector('#computer-img');
function housepicked(){
    // random
    const random = Math.floor((Math.random()* 3) );
    // console.log(random)

    computerSelection = btns[random].className;

    // console.log(computerSelection)
    computerElement.classList.remove('hidden');
    computerElement.setAttribute('class', `${computerSelection}`);
    // console.log(computerElement);
    computerElementMain.setAttribute('class', `${computerSelection}-circle`) ;
    // console.log(computerElementMain);
    computerElementImg.setAttribute('src', `./images/icon-${computerSelection}.svg`); 
setTimeout(resultDisplay,500)
}

// function for displaying result and score
function resultDisplay(){
console.log(userSelection)
console.log(computerSelection)

if(computerSelection === userSelection){
    result = 'DRAW';
}
if( userSelection === 'paper' && computerSelection === 'rock'){
    result = 'YOU WIN';
}
if( userSelection === 'rock' && computerSelection === 'scissors'){
    result = 'YOU WIN';
}
if( userSelection === 'scissors' && computerSelection === 'paper'){
    result = 'YOU WIN';
}
if( computerSelection === 'paper' && userSelection === 'rock'){
    result = 'YOU LOSE';
}
if( computerSelection === 'rock' && userSelection === 'scissors'){
    result = 'YOU LOSE';
}
if( computerSelection === 'scissors' && userSelection === 'paper'){
    result = 'YOU LOSE';
}

// console.log(youWin.classList.contains('hidden'))

if(result=== 'YOU WIN'){
    userWinGlow.classList.remove('hidden')
    win.push(userSelection);
}

if(result=== 'YOU LOSE'){
    houseWinGlow.classList.remove('hidden')
    win.pop(userSelection);
}
Value = win.length
// console.log(result)
// console.log(Value)
youWin.classList.remove('hidden')
scoreValue.innerHTML= Value;
resultText.innerHTML= result;
}

// funtion for delaying display of result
// function for when play again is selected
const playAgain = document.querySelector('.play-again-btn');
playAgain.addEventListener('click', refresh);
function refresh(){
    step1.classList.remove('hidden')
    step4.classList.add('hidden')
    youWin.classList.add('hidden')
    userWinGlow.classList.add('hidden')
    houseWinGlow.classList.add('hidden')
    computerElementMain.removeAttribute('class')
    computerElement.removeAttribute('class')
    computerElementImg.removeAttribute('src')
    
}