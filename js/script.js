import { equate, add, multiply, subtract, divide } from "./operations.js";

// Display
let numDisplay = document.querySelector('.num-display');
let opsDisplay = document.querySelector('.ops-display');

let displayToggle;
let displayValue = 0;
let tempDisplay;
let secondValue = 0;
let displayOp = '';
let isDecimal = false;

function updateDisplay(){

    if (!displayToggle) {
        if (isDecimal) {
            numDisplay.innerText = tempDisplay;
        } else{ 
            numDisplay.innerText = displayValue;
            opsDisplay.innerText = displayOp;
        } 
    } else {
        if (isDecimal) {
            numDisplay.innerText = tempDisplay;
        } else {
            numDisplay.innerText = secondValue;
            opsDisplay.innerText = displayOp;
        }  
    }
}

function toggleDisplay(){
    if (!displayOp == '') {
        displayToggle = 1;
    }
}

function newNumber(n){
    toggleDisplay();
    if (!displayToggle) {
        if (isDecimal) {
            displayValue = displayValue + (n / 10);
            isDecimal = false;
        } else {
            displayValue = (10 * displayValue) + n;
        }
        
    } else {
        if (isDecimal) {
            secondValue = secondValue + (n / 10);
            isDecimal = false;
        } else {
            secondValue = (10 * secondValue) + n;   
        }    
    }
}

function newOp(o){
    displayOp = o;
}

function clearDisplay(){
    displayValue = 0;
    secondValue = 0;
    displayOp = '';
    displayToggle = false;
}

// Event listeners 
// find better way for this
// need to add clear buttons
let on = document.querySelector('.js-on-btn');
let neg = document.querySelector('.js-neg-btn');
let c = document.querySelector('.js-c-btn');

let xSign = document.querySelector('.js-multiply-btn');
let addSign = document.querySelector('.js-plus-btn');
let subSign = document.querySelector('.js-sub-btn');
let divSign = document.querySelector('.js-divide-btn');
let decBtn = document.querySelector('.js-point-btn');

let eqButton = document.querySelector('.js-equal-btn');

// could create elements below in --i, ++j nested loop
let seven = document.querySelector('.js-7-btn');
let eight = document.querySelector('.js-8-btn');
let nine = document.querySelector('.js-9-btn');
let four = document.querySelector('.js-4-btn');
let five = document.querySelector('.js-5-btn');
let six = document.querySelector('.js-6-btn');
let one = document.querySelector('.js-1-btn');
let two = document.querySelector('.js-2-btn');
let three = document.querySelector('.js-3-btn');

let zero = document.querySelector('.js-0-btn');

//Clear Buttons
c.addEventListener('click', () => {
    clearDisplay();
    updateDisplay();
})

on.addEventListener('click', () => {
    updateDisplay();
})

// Ops Buttons
xSign.addEventListener('click', () => {
    newOp('x');
    updateDisplay();
})

addSign.addEventListener('click', () => {
    newOp('+');
    updateDisplay();
})

subSign.addEventListener('click', () => {
    newOp('-');
    updateDisplay();
})

divSign.addEventListener('click', () => {
    newOp('/');
    updateDisplay();
})

neg.addEventListener('click', () => {
    if (!displayToggle) {
        displayValue = -1 * displayValue;
        console.log(displayValue);
        updateDisplay();
    } else {
        secondValue = -1 * secondValue;
        console.log(secondValue);
        updateDisplay();
    }
    
})

decBtn.addEventListener('click', () => {
    if (!displayToggle){
        tempDisplay = displayValue + '.';
    } else {
        tempDisplay = secondValue + '.';
    }   
    isDecimal = true;
    updateDisplay();
})

eqButton.addEventListener('click', () => {
    if (displayValue === 'silly goose'){
        displayValue = 'sillier goose';
        displayToggle = false;
        displayOp = '';
        secondValue = 0;
        updateDisplay();
    }
    if (displayValue === 'sillier goose'){
        displayValue = 'silliest goose';
        updateDisplay();
    } else if (displayValue === 'silliest goose'){
        displayValue = 'no more';
        updateDisplay();
    } else if (displayValue === 'no more'){
        displayValue = 'alright';
        updateDisplay();
    } else if (displayValue === 'alright'){
        displayValue = 'last goose';
        updateDisplay();
    }

    if (equate(displayValue, secondValue, displayOp)){
        displayValue = equate(displayValue, secondValue, displayOp);
        displayToggle = false;
        displayOp = '';
        secondValue = 0;
        updateDisplay();
    } 
})


// Number Buttons - potential loop here to create.. 
seven.addEventListener('click', () => {
    newNumber(7);
    updateDisplay();
})
eight.addEventListener('click', () => {
    newNumber(8);
    updateDisplay();
})
nine.addEventListener('click', () => {
    newNumber(9);
    updateDisplay();
})
four.addEventListener('click', () => {
    newNumber(4);
    updateDisplay();
})
five.addEventListener('click', () => {
    newNumber(5);
    updateDisplay();
})
six.addEventListener('click', () => {
    newNumber(6);
    updateDisplay();
})
one.addEventListener('click', () => {
    newNumber(1);
    updateDisplay();
})
two.addEventListener('click', () => {
    newNumber(2);
    updateDisplay();
})
three.addEventListener('click', () => {
    newNumber(3);
    updateDisplay();
})
zero.addEventListener('click', () => {
    newNumber(0);
    updateDisplay();
})
