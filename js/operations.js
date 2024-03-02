// Calulator operations
export function add(a, b){
    return a + b;
}

export function multiply(a, b){
    return a * b;
}

export function subtract(a, b){
    return a - b;
}

export function divide(a, b){
    return a / b;
}

export function equate(a, b, op){
    if (op == ''){
        return false;
    } else if (op == '+') {
        return add(a, b);
    } else if (op == 'x') {
        return multiply(a, b);
    } else if (op == '-') {
        return subtract(a, b);
    } else if (op == '/') {
        return divide(a, b);
    }
}