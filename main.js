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

let flag = 0;   //to indicate second number
let operatorFlag = 0;  //to indicate second operator
let result;



buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.contains('number')) {
            if (flag === 1) {
                display.textContent = '';
                flag = 0;
            }
            populateDisplay(button.value);
        } else if (button.classList.contains('operator')) {
            if (operatorFlag == 1) {
                secondNum = +(display.textContent);
                result = operate(operator, firstNum, secondNum);
                display.textContent = '';
                populateDisplay(result);
                console.log("Result" + result);
                firstNum = +result;
                operatorFlag = 0;
            } 
            operator = button.value;
            firstNum = +(display.textContent);
            console.log(firstNum);
            flag = 1;
            operatorFlag = 1;
        } else if (button.classList.contains('equals')) {
            secondNum = +(display.textContent);
            console.log(secondNum);
            display.textContent = '';
            result = operate(operator, firstNum, secondNum);
            if(result === undefined) {
                result = secondNum;
            } else if (result === Infinity || result === -Infinity) {
                result = 'Nice try!';
            }
            populateDisplay(result);
            
            
        }
    });
});
