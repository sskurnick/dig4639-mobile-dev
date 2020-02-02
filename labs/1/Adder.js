class Adder {

    constructor(a,b) {
        this.a = a;
        this.b = b;
    }

    sum (a,b) {
        return (this.a + this.b);
    }

    render() {
        let sentence = `<p>The sum of ${this.a} and ${this.b} equals to ${this.sum()}</p>`;
        console.log(sentence);
    }

}

module.exports = Adder;