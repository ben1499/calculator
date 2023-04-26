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
    display.textContent += content;
}

let flag = 0;
let operatorFlag = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.contains('number')) {
            if (flag === 1) {
                display.textContent = '';
                flag = 0;
            }
            populateDisplay(button.value);
        } else if (button.classList.contains('operator')) {
            operator = button.value;
            firstNum = +(display.textContent);
            console.log(firstNum);
            flag = 1;
        } else if (button.classList.contains('equals')) {
            secondNum = +(display.textContent);
            console.log(secondNum);
            display.textContent = '';
            let result = operate(operator, firstNum, secondNum);
            populateDisplay(result);
        }
    });
});
