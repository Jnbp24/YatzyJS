
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
    if (turnCounterValue < 3) {
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
        // Do NOT increment turnCounter here; TopBox.js handles it
    } else {
        createDiceImages();
        turnCounter.textContent = 1;
    }
}

function resetDice() {
    createDiceImages();
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
        if (input) input.value = fn() || '';
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

function getDiceArray() {
    return Array.from(diceRow.children).map(img => ({ value: parseInt(img.dataset.value) }));
}

window.rollDice = rollDice;
window.resetDice = resetDice;
window.createDiceImages = createDiceImages;
