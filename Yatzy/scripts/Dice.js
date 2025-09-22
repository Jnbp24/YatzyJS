

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
}

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
                img.addEventListener('click', function() {
                    img.classList.toggle('dice-hold');
                });
            }
            diceRow.appendChild(img);
        }
        turnCounterValue++;
        turnCounter.textContent = turnCounterValue;
    } else {
    
        createDiceImages();
        turnCounterValue = 1;
        turnCounter.textContent = turnCounterValue;
    }
}

function resetDice() {
    createDiceImages();
}

window.rollDice = rollDice;
window.resetDice = resetDice;
window.createDiceImages = createDiceImages;