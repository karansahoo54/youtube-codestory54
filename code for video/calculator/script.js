let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(operator) {
    if (currentInput === '') return; // Don't allow operator at the beginning
    if (isOperator(currentInput.slice(-1))) return; // Don't allow consecutive operators
    currentInput += operator;
    display.value = currentInput;
}

function appendDecimal() {
    if (currentInput.includes('.')) return; // Don't allow multiple decimals
    currentInput += '.';
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}

function calculate() {
    try {
        // Use eval() to perform the calculation (be cautious with user input in real applications)
        currentInput = eval(currentInput);
        display.value = currentInput;
    } catch (error) {
        display.value = 'Error';
        currentInput = '';
    }
}

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}