function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let firstNum;
let secondNum;
let operator;

function operate(operator, a, b) {
    switch(operator) {
        case '+': return add(a, b);;
        case '-': return subtract(a, b);;
        case '*': return multiply(a, b);;
        case '/': return divide(a, b);
    }
}

const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

function populateDisplay(content) {
    display.textContent = content;
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (this.classList.contains('number')) {
            //let output = this.value;
            display.textContent += this.value;
        } else if (this.classList.contains('operator')) {
            let firstNum = +(display.textContent);
            console.log(firstNum);  
        } else if (this.classList.contains('equals')) {
    
        }
    });
});
