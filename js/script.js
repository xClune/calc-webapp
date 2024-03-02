import { equate, add, multiply, subtract, divide } from "./operations.js";

// Display
let numDisplay = document.querySelector('.num-display');
let opsDisplay = document.querySelector('.ops-display');

let displayToggle;
let displayValue = 0;
let secondValue = 0;
let displayOp = '';

function updateDisplay(){
    if (!displayToggle) {
        numDisplay.innerText = displayValue;
        opsDisplay.innerText = displayOp;
    } else {
        numDisplay.innerText = secondValue;
        opsDisplay.innerText = displayOp;
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
        displayValue = (10 * displayValue) + n;
    } else {
        secondValue = (10 * secondValue) + n;
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

function displayOff(){
    displayValue.innerText = '';
    displayOp = '';
}



// Event listeners 
// find better way for this
// need to add clear buttons
let on = document.querySelector('.js-on-btn');
let off = document.querySelector('.js-off-btn');
let ce = document.querySelector('.js-ce-btn');
let c = document.querySelector('.js-c-btn');

let xSign = document.querySelector('.js-multiply-btn');
let addSign = document.querySelector('.js-plus-btn');
let subSign = document.querySelector('.js-sub-btn');
let divSign = document.querySelector('.js-divide-btn');

let eqButton = document.querySelector('.js-equal-btn');

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

off.addEventListener('click', () => {
    clearDisplay();
    displayOff();
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

eqButton.addEventListener('click', () => {
    if (equate(displayValue, secondValue, displayOp)){
        displayValue = equate(displayValue, secondValue, displayOp);
    displayToggle = false;
    displayOp = '';
    updateDisplay();
    } 
})


// Number Buttons
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
