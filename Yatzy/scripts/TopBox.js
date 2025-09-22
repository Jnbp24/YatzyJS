window.mainContainer = document.querySelector('.main-container');
if (!window.mainContainer) {
    window.mainContainer = document.createElement('div');
    window.mainContainer.className = 'main-container';
    document.body.append(window.mainContainer);
}

let topBox = document.querySelector('.top-box');
if (!topBox) {
    topBox = document.createElement('div');
    topBox.className = 'top-box';
    window.mainContainer.insertBefore(topBox, window.mainContainer.firstChild);
}

window.diceRow = document.querySelector('.dice-row');
if (!window.diceRow) {
    window.diceRow = document.createElement('div');
    window.diceRow.className = 'dice-row';
    topBox.append(window.diceRow);
}

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

let turnCounterValue = 0;
const turnCounter = document.createElement('span');
turnCounter.textContent = turnCounterValue;
turnCounter.className = 'turn-counter';
turnCounterLabel.append(turnCounter);

const rollButton = document.createElement('button');
rollButton.textContent = 'Roll!';
rollButton.className = 'roll-button';
controlsRow.append(rollButton);

rollButton.addEventListener('click', () => {
    let currentTurn = parseInt(turnCounter.textContent);
    // If we're at turn 3, Dice.js will reset to 1, so don't increment
    if (currentTurn === 3) {
        rollDice();
        turnCounterValue = 0;
        turnCounter.textContent = 0;
    } else {
        rollDice();
        turnCounterValue = currentTurn + 1;
        turnCounter.textContent = turnCounterValue;
    }
});
