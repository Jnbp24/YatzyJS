

function rollDice(){

let numbers = [];

for(let i = 0; i<5; i++){
    let tempNumber = Math.floor(Math.random() * 6) + 1;
    numbers.push(tempNumber);
}

diceRow.innerHTML = '';

numbers.forEach((number, i) => {
        diceImgs[i].src = `assets/dice${number}.png`;
        diceRow.appendChild(diceImgs[i]);
    });
};

function holdDie(){
    
}