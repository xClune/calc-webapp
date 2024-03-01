// Display
let display = document.querySelector('.display');


// Event listeners
let seven = document.querySelector('.js-7-btn')
let eight = document.querySelector('.js-8-btn')
let nine = document.querySelector('.js-9-btn')
let four = document.querySelector('.js-4-btn')
let five = document.querySelector('.js-5-btn')
let six = document.querySelector('.js-6-btn')
let one = document.querySelector('.js-1-btn')
let two = document.querySelector('.js-2-btn')
let three = document.querySelector('.js-3-btn')
let zero = document.querySelector('.js-0-btn')

seven.addEventListener('click', () => {
    updateDisplay('7');
})
eight.addEventListener('click', () => {
    updateDisplay('8');
})
nine.addEventListener('click', () => {
    updateDisplay('9');
})
four.addEventListener('click', () => {
    updateDisplay('4');
})
five.addEventListener('click', () => {
    updateDisplay('5');
})
six.addEventListener('click', () => {
    updateDisplay('6');
})
one.addEventListener('click', () => {
    updateDisplay('1');
})
two.addEventListener('click', () => {
    updateDisplay('2');
})
three.addEventListener('click', () => {
    updateDisplay('3');
})
zero.addEventListener('click', () => {
    updateDisplay('0');
})



function updateDisplay(d){
    let d1 = document.createElement('h1');
    d1.innerText = d;
    display.appendChild(d1);
}