const header = document.createElement('h1');
header.textContent = 'Yatzy';
document.body.append(header);

let turnCounter  = document.createElement('label');
let turnCounterValue = 0;
turnCounter.textContent = `Turn: ${turnCounterValue}`;
document.body.append(turnCounter);


const rollButton = document.createElement('button');
rollButton.textContent = 'Roll';
document.body.append(rollButton)

rollButton.addEventListener('click',turnCounterIncrement);

function turnCounterIncrement(){
    turnCounterValue++;
    turnCounter.textContent = `Turn: ${turnCounterValue}`;
}