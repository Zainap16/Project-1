// Page 1 (index.html)

// Elements related to the counter functionality
const decreasebtn = document.getElementById('decrease');
const resetbtn = document.getElementById('reset');
const increasebtn = document.getElementById('increase');
const countLabel = document.getElementById('countLbl');

// Check if the elements exist before adding event listeners
if (decreasebtn && resetbtn && increasebtn && countLabel) {
    let count = 0;

    increasebtn.addEventListener('click', function(){
        count++;
        countLabel.textContent = `${count}`;
    });

    resetbtn.addEventListener('click', function(){
        count = 0;
        countLabel.textContent = `${count}`;
    });

    decreasebtn.addEventListener('click', function(){
        count--;
        countLabel.textContent = `${count}`;
    });

    const roll = document.getElementById('roll');
    const rollLbl = document.getElementById('rollLabel');

    if (roll && rollLbl) {
        roll.addEventListener('click', function() {
            const num = Math.floor(Math.random() * 101);
            rollLbl.textContent = `${num}`;
        });
    }
}

// Page 2 (guessNumPage.html)

// Elements related to the "Guess the Number" functionality
const guessInput = document.getElementById("guess");
const btnSubmit = document.getElementById("btnSubmit");
const displaylbl = document.getElementById("displaylbl");

if (guessInput && btnSubmit && displaylbl) {
    const answer = 5;

    btnSubmit.addEventListener('click', function(){
        const userGuess = parseInt(guessInput.value);

        if (userGuess === answer) {
            displaylbl.textContent = `Correct: ${userGuess}`;
            displaylbl.style.color = 'green';
        } else {
            displaylbl.textContent = `Incorrect: ${userGuess}`;
            displaylbl.style.color = 'red';
        }
    });
}
