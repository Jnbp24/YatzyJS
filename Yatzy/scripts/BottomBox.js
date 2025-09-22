window.mainContainer = document.querySelector('.main-container');
if (!window.mainContainer) {
    window.mainContainer = document.createElement('div');
    window.mainContainer.className = 'main-container';
    document.body.append(window.mainContainer);
}

let bottomBox = document.querySelector('.bottom-box');
if (!bottomBox) {
    bottomBox = document.createElement('div');
    bottomBox.className = 'bottom-box';
    if (window.mainContainer) window.mainContainer.append(bottomBox);
}

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
    input.addEventListener('click', function () {
        input.classList.add('input-lock');
        input.readOnly = true;
        input.style.pointerEvents = 'none';
        input.style.setProperty('background-color', '#a3c9f7', 'important'); // soft blue
        if (window.resetDice) window.resetDice();
        // Re-enable roll button
        const rollButton = document.querySelector('.roll-button');
        if (rollButton) rollButton.disabled = false;
    });
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
sumInput.readOnly = true;
sumInput.style.pointerEvents = 'none';
sumBonusForm.append(sumInput);
const bonusLabel = document.createElement('label');
bonusLabel.textContent = 'Bonus:';
sumBonusForm.append(bonusLabel);
const bonusInput = document.createElement('input');
bonusInput.type = 'text';
bonusInput.className = 'option-input';
bonusInput.readOnly = true;
bonusInput.style.pointerEvents = 'none';
sumBonusForm.append(bonusInput);
optionsForm.append(sumBonusForm);


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
    input.addEventListener('click', function () {
        input.classList.add('input-lock');
        input.readOnly = true;
        input.style.pointerEvents = 'none';
        input.style.setProperty('background-color', '#a3c9f7', 'important'); // soft blue
        if (window.resetDice) window.resetDice();
        // Re-enable roll button
        const rollButton = document.querySelector('.roll-button');
        if (rollButton) rollButton.disabled = false;
        rollButton.style.opacity = '1';
        rollButton.style.cursor = 'pointer';
    });
    row.append(input);
    optionsForm.append(row);
}

const totalRow = document.createElement('div');
totalRow.className = 'option-row total-row';
const totalLabel = document.createElement('label');
totalLabel.textContent = 'Total:';
totalRow.append(totalLabel);
const totalInput = document.createElement('input');
totalInput.type = 'text';
totalInput.className = 'option-input';
totalInput.readOnly = true;
totalInput.style.pointerEvents = 'none';
totalRow.append(totalInput);
optionsForm.append(totalRow);

function resetOptionInputs() {
    const allInputs = document.querySelectorAll('.option-input');
    allInputs.forEach(input => {
        // Only reset if not locked
        if (!input.classList.contains('input-lock')) {
            input.value = '';
            input.style.backgroundColor = '';
            input.style.pointerEvents = '';
            input.readOnly = false;
        }
        // If locked, do nothing (keep value and lock)
    });
}
window.resetOptionInputs = resetOptionInputs;