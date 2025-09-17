// Create main vertical container
const mainContainer = document.createElement('div');
mainContainer.className = 'main-container';
document.body.append(mainContainer);

// Top box for dice, turn counter, roll button
const topBox = document.createElement('div');
topBox.className = 'top-box';
mainContainer.append(topBox);

// Dice images row
const diceRow = document.createElement('div');
diceRow.className = 'dice-row';
topBox.append(diceRow);

const diceImgs = [];

for (let i = 0; i < 5; i++) {
    const img = document.createElement('img');
    img.src = `assets/dice${i+1}.png`;
    img.alt = `Dice ${i+1}`;
    img.className = 'dice-img';
    img.id = `die${i+1}`
    diceImgs.push(img);
}

// Controls row (turn counter and roll button)
const controlsRow = document.createElement('div');
controlsRow.className = 'controls-row';
topBox.append(controlsRow);

const turnCounterLabel = document.createElement('span');
turnCounterLabel.textContent = 'Turn ';
controlsRow.append(turnCounterLabel);

let turnCounterValue = 1;
const turnCounter = document.createElement('span');
turnCounter.textContent = turnCounterValue;
turnCounter.className = 'turn-counter';
turnCounterLabel.append(turnCounter);

const rollButton = document.createElement('button');
rollButton.textContent = 'Roll!';
rollButton.className = 'roll-button';
controlsRow.append(rollButton);

rollButton.addEventListener('click', () => {
    turnCounterValue++;
    if (turnCounterValue > 3) turnCounterValue = 1;
    turnCounter.textContent = turnCounterValue;
    rollDice();
});
