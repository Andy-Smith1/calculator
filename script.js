const numberButton = document.querySelectorAll('.number');
const screen = document.querySelector('#screen');
const operatorButton = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('#equals');
const clearButton = document.querySelector('#clear');

let operator = '';
let currentNum = '';
let previousNum = '';
let result = null;
let lastOperator = '';

//OPERATOR FUNCTIONS
//add function
function addNums(num1, num2) {
    return  num1 + num2;
    
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
 
        currentNum += e.target.innerText;
        currentNum = parseFloat(currentNum);
        screen.innerText = currentNum;
    })
});

operatorButton.forEach((op) => {
    op.addEventListener ('click', (e) => {
        operator = e.target.innerText; 
        previousNum = currentNum;
        currentNum = '';
    
    })

})


equalsButton.addEventListener('click', () => {
  operate(previousNum, operator, currentNum);
  currentNum = result;
  screen.innerText = Math.round(result * 100) / 100;
})


clearButton.addEventListener('click', () => {
    operator = '';
    currentNum = '';
    previousNum = '';
    result = null;
    screen.innerText = currentNum;
})

