const numberButton = document.querySelectorAll('.number');
const screen = document.querySelector('#screen');
const operatorButton = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('#equals');
const clearButton = document.querySelector('#clear');

let operator = '';
let currentNum = '';
let previousNum = '';
let result = null;
let equalsIsClicked = false;



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
        if (currentNum.toString().length > 14) {
            return;
        }
        currentNum += e.target.innerText;
        currentNum = parseFloat(currentNum);
        screen.innerText = currentNum;
    })
});

// WORKING BLOCK
operatorButton.forEach((op) => {
    op.addEventListener ('click', (e) => {
        if (operator && previousNum && currentNum) {
            operate(previousNum, operator, currentNum)
            currentNum = result;
            screen.innerText = Math.round(result * 100) / 100;
        };
        operator = e.target.innerText;
        previousNum = currentNum;
        currentNum = '';
        equalsIsClicked = false;
        
    })
})



equalsButton.addEventListener('click', () => {
    if (equalsIsClicked == true) {
        return;
    }
  equalsIsClicked = true;
  operate(previousNum, operator, currentNum);
  currentNum = result;
  screen.innerText = Math.round(result * 100) / 100;
  operator = '';
})


clearButton.addEventListener('click', () => {
    operator = '';
    currentNum = '';
    previousNum = '';
    result = null;
    equalsIsClicked = false;
    screen.innerText = currentNum;
})

