class Dice {
    constructor() {
        this.value = 0;
        this.held = false;
    }

    roll() {
        if (!this.held) {
            this.value = Math.floor(Math.random() * 6) + 1;
        }
    }

    toggleHold() {
        this.held = !this.held;
    }

    reset() {
        this.value = 0;
        this.held = false;
    }
}