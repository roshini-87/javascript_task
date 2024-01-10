class Calculator {
    constructor() {
        // Default values
        this.num1 = 0;
        this.num2 = 0;
    }

    addition() {
        return this.num1 + this.num2;
    }

    subtraction() {
        return this.num1 - this.num2;
    }

    multiplication() {
        return this.num1 * this.num2;
    }
}

const calculatorInstance = new Calculator();

document.querySelector('.addition-btn').addEventListener('click', () => {
    calculatorInstance.num1 = parseFloat(document.getElementById('input1').value) || 0;
    calculatorInstance.num2 = parseFloat(document.getElementById('input2').value) || 0;
    document.getElementById('result').textContent = `Result: ${calculatorInstance.addition()}`;
});

document.querySelector('.subtraction-btn').addEventListener('click', () => {
    calculatorInstance.num1 = parseFloat(document.getElementById('input1').value) || 0;
    calculatorInstance.num2 = parseFloat(document.getElementById('input2').value) || 0;
    document.getElementById('result').textContent = `Result: ${calculatorInstance.subtraction()}`;
});

document.querySelector('.multiplication-btn').addEventListener('click', () => {
    calculatorInstance.num1 = parseFloat(document.getElementById('input1').value) || 0;
    calculatorInstance.num2 = parseFloat(document.getElementById('input2').value) || 0;
    document.getElementById('result').textContent = `Result: ${calculatorInstance.multiplication()}`;
});
