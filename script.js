const numberButton = document.querySelectorAll('.number');

let num1 = 0;
let num2 = 0;

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
    let result;
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


