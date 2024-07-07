let display = document.getElementById('display');
let currentInput = '0';
let operationQueue = [];

function appendToDisplay(value) {
    if (currentInput === '0' && value !== '.') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = '0';
    operationQueue = [];
    display.innerText = currentInput;
}

function calculate() {
    try {
        
        let result = eval(currentInput.replace('^', '**'));
        display.innerText = result;
        currentInput = result.toString();
    } catch (error) {
        display.innerText = 'Error';
        currentInput = '';
    }
}