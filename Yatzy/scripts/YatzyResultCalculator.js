class YatzyResultCalculator {
    constructor(diceArray) {
        this.dice = diceArray;
    }

   getCounts() {
        const counts = [0, 0, 0, 0, 0, 0, 0];
        for (const die of this.dice) {
            if (die.value >= 1 && die.value <= 6) {
                counts[die.value]++;
            }
        }
        return counts;
    }

    upperSectionScore(eyes) {
        let score = 0;
        for (const die of this.dice) {
            if (die.value == eyes) {
                score += eyes;
            }
        }
        return score;
    }

    onePairScore() {
        const counts = this.getCounts()
        for (let i = 6; i >= 1; i--) {
            if (counts[i] >= 2) {
                return i * 2;
            }
        }
        return 0;
    }

    twoPairScore() {
        const counts = this.getCounts()
        let pairs = 0, score = 0;
        for (let i = 6; i >= 1; i--) {
            if (counts[i] >= 2) {
                pairs++;
                score += i * 2;
                counts[i] -= 2;
                if (pairs == 2) {
                    return score;
                }
            }
        }
        return 0;
    }

    threeValueOfAKindScore() {
        const counts = this.getCounts();
        for (let i = 6; i >= 1; i--) {
            if (counts[i] >= 3) {
                return i * 3;
            }
        }
        return 0;
    }

    fourOfAKindScore() {
        const counts = this.getCounts();
        for (let i = 6; i >= 1; i--) {
            if (counts[i] >= 4) {
                return i * 4
            }
        }
        return 0;
    }

    fullHouseScore() {
        const counts = this.getCounts()
        let threeValue = 0, pairValue = 0;
        for (let i = 6; i >= 1; i--) {
            if (counts[i] >= 3 && threeValue == 0) {
                threeValue = i;
            } else if (counts[i] >= 2 && i != threeValue && pairValue == 0) {
                pairValue = i;
            }
        }

        if (threeValue != 0 && pairValue != 0) {
            return (threeValue * 3) + (pairValue * 2);
        } else {
            return 0;
        }
    }

    smallStraightScore() {
        const counts = this.getCounts()
        if (
            counts[1] >= 1 &&
            counts[2] >= 1 &&
            counts[3] >= 1 &&
            counts[4] >= 1 &&
            counts[5] >= 1
        ) {
            return 15;
        } else {
            return 0;
        }
    }

    largeStraightScore() {
        const counts = this.getCounts();

        if (
            counts[2] >= 1 &&
            counts[3] >= 1 &&
            counts[4] >= 1 &&
            counts[5] >= 1 &&
            counts[6] >= 1
        ) {
            return 20;
        } else {
            return 0;
        }
    }

    chanceScore() {
        let total = 0;

        for (let i = 0; i < this.dice.length; i++) {
            total += this.dice[i].value;
        }

        return total;
    }

    yatzyScore() {
        const counts = this.getCounts();

        for (let i = 1; i <= 6; i++) {
            if (counts[i] === 5) {
                return 50;
            }
        }

        return 0;
    }
}