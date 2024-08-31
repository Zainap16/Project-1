const decreasebtn = document.getElementById('decrease');
const resetbtn = document.getElementById('reset');
const increasebtn = document.getElementById('increase');
const countLabel = document.getElementById('countLbl');

let count = 0;

increasebtn.onclick =  function(){
    count++;
    countLabel.textContent = `${count}`;
}


resetbtn.onclick = function(){
    count = 0;
    countLabel.textContent = `${count}`;
}

decreasebtn.onclick =  function(){
    count--;
    countLabel.textContent = `${count}`;
}

roll = document.getElementById('roll');
rollLbl = document.getElementById('rollLabel');
roll.addEventListener('click', function() {
    num = Math.floor(Math.random() * 101);
    rollLbl.textContent = `${num}`;
})

// GUESS THE NUMBER
/*
get user input
btn submit
lbl to display if correct or not

harder: allow 3 attepts only
*/

let guessInput = document.getElementById("guess");

let btnSubmit = document.getElementById("btnSubmit");

let displaylbl = document.getElementById("displaylbl");

let answer = 5;

btnSubmit.addEventListener('click', function(){
    let userGuess = parseInt(guessInput.value);
    if ( userGuess === answer) {

        displaylbl.textContent =  `Correct: ${guess}` ;
        displaylbl.style.color = 'green';
        
    } else {
        displaylbl.textContent = `Incorrect: ${guess}`;
        displaylbl.style.color = 'red';
    }
});





















