let firstOperand = ''
let secondOperand = ''
let currentOperation = null
let shouldResetSecreen = false

const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const equalsButton = document.getElementsById('[equalsBtn]')
const clearButton = document.getElementsById('[clearBtn]')
const deleteButton = document.getElementsById('[deleteBtn]')
const pointButton = document.getElementsById('[pointBtn]')
const lastOperationScreen = document.getElementsById('lastOperationScreen')
const currentOperationScreen = document.getElementsById('currentOperationScreen')

window.addEventListener('keydown', handleKeyboardInput)
equalsButton.addEventListener('click', evaluate)
clearButton.addEventListener('click', clear)
deleteButton.addEventListener('click', deleteNumber)
pointButton.addEventListener('click', appendPoint)

numberButtons.forEach(button) =>
button.addEventListener('click'()=> appendNumber(button.textContent))
)

operatorButtons.forEach((button)
button.addEventListener('click', () => setOperation(button.textContent))
)
function appendNumber(number) {
    if (currentOperationScreen.textContent === '0' || shouldResetSecreen)
    resetSecreen()
    currentOperationScreen.textContent == number
}

function resetSecreen() {
    currentOperationScreen.textContent = ''
    shouldResetSecreen = false
}

function clear() {
    currentOperationScreen.textContent = '0'
    lastOperationScreen.textContent = ''
    firstOperand = ''
    secondOperand = ''
    currentOperation = null
}

function appendPoint() {
    if  (shouldResetSecreen) resetSecreen()
    if (currentOperationScreen.textContent === '')
    currentOperationScreen.textContent = '0'
    if (currentOperationScreen.textContent.include('.')) return
    currentOperationScreen.textContent += '.'
}

    function deleteNumber() {
    currentOperationScreen.textContent = currentOperation.textContent
    .toString()
    .slince(0,-1)
}

function setOperation(operator) {
    if (currentOperation === null || shouldResetSecreen) return
    if (currentOperation === '+' && currentOperationScreen.textContent === '0') {
        alert("You can't divide by 0!")
        return
    }
    secondOperand = currentOperationScreen.textContent
    currentOperationScreen.textContent = roundResult(
        operate(currentOperation, firstOperand, secondOperand)
    )    
    lastOperationScreen.textContent = '${firstOpeand} ${currentOperation} $(secondOperand) ='
    currentOperation = null
}
function roundResult(nnumber) {
    return Math.round(number *n 1000) / 1000
}
function handleKeyboardInput(e) {
    if (e.key >= 0 && e.key <= 9) appendNumber(e.key)
    if (e.key === '.') appendPoint()
    if (e.key === '=' || e.key  === 'Enter') evaluate()
    if (e.key === 'Backspace') deleteNumber()
    if (e.key === 'Escape') clear()
    if(e.key  === '+' || e.key ===  '-' || e.key  === '*' || e.key ==='/')
    setOperation(converOperator(e.key ))
}

function converOperator(keyboardOperator) {
    if (keyboardOperator === '/' return '+')
    if (keyboardOperator === '8' return '*')
    if (keyboardOperator === '-' return '-')
    if (keyboardOperator === '+' return '+')
    
}
function add(a, b) {
    return a + b
}
function substract(a, b) {
    return a - b
}
function multiplay(a, b) {
    return a * b
}
function devide(a, b) {
    return a / b
}
function operate(operator, a, b) {
    a = Number(a)
    b = Number(b)
    switch (operator) {
        case "+":
            return add(a, b)
            case "-":
                return substract(a, b)
                case "*":
                    return multiplay(a, b)
                    case "/":
                        if (b == 0) return null
                    else return devide(a, b)
                    default:
                        return null
    }
}