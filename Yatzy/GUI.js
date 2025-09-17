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
    diceImgs.push(img);
    diceRow.append(img);
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
controlsRow.append(turnCounter);

const rollButton = document.createElement('button');
rollButton.textContent = 'Roll!';
rollButton.className = 'roll-button';
controlsRow.append(rollButton);

rollButton.addEventListener('click', () => {
    turnCounterValue++;
    if (turnCounterValue > 3) turnCounterValue = 1;
    turnCounter.textContent = turnCounterValue;
});

// Bottom box for Yatzy options and scoring
const bottomBox = document.createElement('div');
bottomBox.className = 'bottom-box';
mainContainer.append(bottomBox);

const yatzyOptions = [
    { label: '1', id: 'ones' },
    { label: '2', id: 'twos' },
    { label: '3', id: 'threes' },
    { label: '4', id: 'fours' },
    { label: '5', id: 'fives' },
    { label: '6', id: 'sixes' },
    { label: 'One pair', id: 'pair' },
    { label: 'Two pair', id: 'two-pair' },
    { label: 'Three Of A Kind', id: 'three-same' },
    { label: 'Four Of A Kind', id: 'four-same' },
    { label: 'House', id: 'full-house' },
    { label: 'Small Straight', id: 'small-straight' },
    { label: 'Large Straight', id: 'large-straight' },
    { label: 'Chance', id: 'chance' },
    { label: 'Yatzy', id: 'yatzy' }
];

const optionsForm = document.createElement('form');
optionsForm.className = 'options-form';
bottomBox.append(optionsForm);

// Top section (upper part) for 1-s to 6-s
for (let i = 0; i < 6; i++) {
    const row = document.createElement('div');
    row.className = 'option-row';
    const label = document.createElement('label');
    label.textContent = yatzyOptions[i].label;
    label.htmlFor = yatzyOptions[i].id;
    row.append(label);
    const input = document.createElement('input');
    input.type = 'text';
    input.id = yatzyOptions[i].id;
    input.className = 'option-input';
    row.append(input);
    optionsForm.append(row);
}

// Sum and Bonus row as a form
const sumBonusForm = document.createElement('form');
sumBonusForm.className = 'option-row sum-bonus-row';
const sumLabel = document.createElement('label');
sumLabel.textContent = 'Sum:';
sumBonusForm.append(sumLabel);
const sumInput = document.createElement('input');
sumInput.type = 'text';
sumInput.className = 'option-input';
sumBonusForm.append(sumInput);
const bonusLabel = document.createElement('label');
bonusLabel.textContent = 'Bonus:';
sumBonusForm.append(bonusLabel);
const bonusInput = document.createElement('input');
bonusInput.type = 'text';
bonusInput.className = 'option-input';
sumBonusForm.append(bonusInput);
optionsForm.append(sumBonusForm);

// Lower section for rest of options
for (let i = 6; i < yatzyOptions.length; i++) {
    const row = document.createElement('div');
    row.className = 'option-row';
    const label = document.createElement('label');
    label.textContent = yatzyOptions[i].label;
    label.htmlFor = yatzyOptions[i].id;
    row.append(label);
    const input = document.createElement('input');
    input.type = 'text';
    input.id = yatzyOptions[i].id;
    input.className = 'option-input';
    row.append(input);
    optionsForm.append(row);
}

// Total row
const totalRow = document.createElement('div');
totalRow.className = 'option-row total-row';
const totalLabel = document.createElement('label');
totalLabel.textContent = 'Total:';
totalRow.append(totalLabel);
const totalInput = document.createElement('input');
totalInput.type = 'text';
totalInput.className = 'option-input';
totalRow.append(totalInput);
optionsForm.append(totalRow);