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

// document.addEventListener('DOMContentLoaded', () => {
//     display.textContent = '0';
//     console.log("Loaded");
// })




let flag = 0;   //to indicate second number
let operatorFlag = 0;  //to indicate second operator
let result = 0;


function populateDisplay(content = result) {
        if (display.textContent.length > 12) {
            console.log(display.textContent.length);
            return;
        } 
        display.textContent += content;
}

function getLimitedNumber(number) {
    number = number.toString();
    numLength = number.length;
    if (numLength <= 12) {
        return number;
    }
    if (numLength > 12) {
        number = +number;
        number = number.toExponential(7);
        return number;
    }
}

populateDisplay();


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.contains('number')) {
            if (flag === 1) {
                display.textContent = '';
                flag = 0;
            }
            if (display.textContent == 0) {
                display.textContent = '';
            }
            
            
            populateDisplay(button.value);
        } else if (button.classList.contains('operator')) {
            if (operatorFlag == 1) {
                secondNum = +(display.textContent);
                result = operate(operator, firstNum, secondNum);
                display.textContent = '';
                if (isNaN(result)) {
                    result = "Wrong format";
                }
                result = getLimitedNumber(result);
                populateDisplay(result);
                firstNum = +result;
                operatorFlag = 0;
            } 
            operator = button.value;
            firstNum = +(display.textContent);
            flag = 1;
            operatorFlag = 1;
        } else if (button.classList.contains('equals')) {
            if (operatorFlag == 1) {
                secondNum = +(display.textContent);
                console.log(secondNum);
                display.textContent = '';
                result = operate(operator, firstNum, secondNum);
                if(result === undefined) {
                    result = secondNum;
                } else if (result === Infinity || result === -Infinity) {
                    result = 'Nice try!';
                }
                result = getLimitedNumber(result);
                populateDisplay(result);
                flag = 0;
                operatorFlag = 0;
            }                      
        } else if (button.classList.contains('clear')) {
            firstNum = 0;
            secondNum = 0;
            result = 0;
            display.textContent = '';
            populateDisplay();
        } else if (button.classList.contains('delete')) {
            if (display.textContent == 0) {
                return;
            }
            let str = display.textContent;
            str = str.slice(0, str.length - 1);
            display.textContent = str;
        }
    });
});
