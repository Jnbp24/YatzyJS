let diceRow;

function createDiceImages() {
    diceRow = document.querySelector('.dice-row');
    if (!diceRow) return;
    diceRow.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        let value = Math.floor(Math.random() * 6) + 1;
        const img = document.createElement('img');
        img.src = `assets/dice${value}.png`;
        img.alt = `Dice ${i+1}`;
        img.className = 'dice-img';
        img.id = `die${i+1}`;
        img.dataset.value = value; // Value for score calculation
        img.addEventListener('click', function() {
            img.classList.toggle('dice-hold');
        });
        diceRow.appendChild(img);
    }
}

function rollDice() {
    diceRow = document.querySelector('.dice-row');
    if (!diceRow) return;
    let turnCounter = document.querySelector('.turn-counter');
    let turnCounterValue = parseInt(turnCounter.textContent);
    const rollButton = document.querySelector('.roll-button');
    if (turnCounterValue === 0) {
        createDiceImages();
        turnCounter.textContent = '1';
        updateScores(getDiceArray());
        if (rollButton) {
            rollButton.disabled = false;
            rollButton.style.opacity = '1';
            rollButton.style.cursor = 'pointer';
        }
    } else if (turnCounterValue < 3) {
        const currentImgs = Array.from(diceRow.children);
        diceRow.innerHTML = '';
        for (let i = 0; i < 5; i++) {
            let img;
            if (currentImgs[i] && currentImgs[i].classList.contains('dice-hold')) {
                img = currentImgs[i];
            } else {
                let value = Math.floor(Math.random() * 6) + 1;
                img = document.createElement('img');
                img.src = `assets/dice${value}.png`;
                img.alt = `Dice ${i+1}`;
                img.className = 'dice-img';
                img.id = `die${i+1}`;
                img.dataset.value = value; // Value for score calculation
                img.addEventListener('click', function() {
                    img.classList.toggle('dice-hold');
                });
            }
            diceRow.appendChild(img);
        }
        updateScores(getDiceArray());
        turnCounter.textContent = (turnCounterValue + 1).toString();
        if (parseInt(turnCounter.textContent) === 3 && rollButton) {
            rollButton.disabled = true;
            rollButton.style.opacity = '0.5';
            rollButton.style.cursor = 'not-allowed';
        }
    } else {
        resetDice();
    }
}

function resetDice() {
    diceRow = document.querySelector('.dice-row');
    if (diceRow) diceRow.innerHTML = '';
    let turnCounter = document.querySelector('.turn-counter');
    if (turnCounter) turnCounter.textContent = '0';
    if (window.resetOptionInputs) window.resetOptionInputs();
}

function updateScores(diceArray){
    const calc = new YatzyResultCalculator(getDiceArray());
    
    const scoreMap = {
        'ones': () => calc.upperSectionScore(1),
        'twos': () => calc.upperSectionScore(2),
        'threes': () => calc.upperSectionScore(3),
        'fours': () => calc.upperSectionScore(4),
        'fives': () => calc.upperSectionScore(5),
        'sixes': () => calc.upperSectionScore(6),
        'pair': () => calc.onePairScore(),
        'two-pair': () => calc.twoPairScore(),
        'three-same': () => calc.threeValueOfAKindScore(),
        'four-same': () => calc.fourOfAKindScore(),
        'full-house': () => calc.fullHouseScore(),
        'small-straight': () => calc.smallStraightScore(),
        'large-straight': () => calc.largeStraightScore(),
        'chance': () => calc.chanceScore(),
        'yatzy': () => calc.yatzyScore()
    };

    // Populate inputs directly by calling the functions in the map
    for (const [id, fn] of Object.entries(scoreMap)) {
        const input = document.getElementById(id);
        if (input && !input.classList.contains('input-lock')) input.value = fn() || '';
    }

    // Sum & bonus
    const sum = scoreMap.ones() + scoreMap.twos() + scoreMap.threes() +
                scoreMap.fours() + scoreMap.fives() + scoreMap.sixes();
    const bonus = sum >= 63 ? 50 : 0;

    const sumInput = document.querySelector('.sum-bonus-row input:nth-of-type(1)');
    const bonusInput = document.querySelector('.sum-bonus-row input:nth-of-type(2)');
    if (sumInput) sumInput.value = sum;
    if (bonusInput) bonusInput.value = bonus;

    // Total
    const total = Object.values(scoreMap).reduce((acc, fn) => acc + fn(), 0);
    const totalInput = document.querySelector('.total-row input');
    if (totalInput) totalInput.value = total;
}

function resetUnlockedInputs() {
    
    const allInputs = document.querySelectorAll('.option-input');
    
    allInputs.forEach(input => {
       
        const computedStyle = window.getComputedStyle(input);
        const backgroundColor = computedStyle.backgroundColor;
        
        
        if (backgroundColor !== 'rgb(0, 128, 0)' && backgroundColor !== 'green') {
            input.value = '';
        }
    });
}

function getDiceArray() {
    return Array.from(diceRow.children).map(img => ({ value: parseInt(img.dataset.value) }));
}

window.rollDice = rollDice;
window.resetDice = resetDice;
window.createDiceImages = createDiceImages;
