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
