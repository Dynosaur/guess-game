class RandomNumberGenerator {

    constructor(min, max) {
        this.minimum = min;
        this.maximum = max;
    }

    generate() {
        return Math.round(Math.random() * (this.maximum - this.minimum) + this.minimum);
    }

}

module.exports = RandomNumberGenerator;