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