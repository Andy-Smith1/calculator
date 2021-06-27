const numberButton = document.querySelectorAll('.number');
const screen = document.querySelector('#screen');
const operatorButton = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('#equals');
const clearButton = document.querySelector('#clear');

let operator;
let num1 = '';
let num2 = '';
let result = null;
let hasDecimal = false;
let lastOperator = '';

//OPERATOR FUNCTIONS
//add function
function addNums(num1, num2) {
    return num1 + num2;
};
//subtract function
function subtractNums(num1, num2) {
    return num1 - num2;
};
//multiply function
function multiplyNums(num1, num2) {
    return num1 * num2;
};
//division function
function divideNums(num1, num2) {
    if (num2 == 0) {
        return 'NICE TRY!'; //unable to divide by 0
    }
    return num1 / num2;
};

//operate function
function operate(num1, operator, num2) {
    
    switch(operator) {
        case '+':
            result = addNums(num1, num2);
            break;
        case '-':
            result = subtractNums(num1, num2);
            break;
        case '*':
            result = multiplyNums(num1, num2);
            break;
        case '/':
            result = divideNums(num1, num2);
            break;
        default:
            result = 'ERROR';
    }
    return result;
}




numberButton.forEach((number) => {
    number.addEventListener('click', (e) => {
        if (e.target.innerText === '.' && !hasDecimal) {
            hasDecimal = true;
        } else if (e.target.innerText === '.' && hasDecimal) {
            return;
        }
        num2 += e.target.innerText;
        screen.innerText = num2;
    })
});

operatorButton.forEach((operator) => {
    operator.addEventListener('click', (e) => {
        if (!num2) return;
        hasDecimal = false;
        const operatorType = e.target.innerText;
        if (num1 && num2 && operator) {
            operate(num1, operatorType, num2);
        } else {
            result = parseFloat(num2);
        }
        nextNum(operatorType);
        console.log(result);
    })
});

function nextNum(operator = '') {
    num1 += num2
    num2 = '';
}

equalsButton.addEventListener('click', (e) => {
    if( !num1 || !num2 ) return;
    hasDecimal = false;
    operate();
    nextNum();
    screen.innerText = result;
    num2 = result;
    num1 = '';
})