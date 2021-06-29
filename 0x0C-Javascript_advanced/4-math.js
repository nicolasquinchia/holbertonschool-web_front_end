/**
 * Complex Closure
 * Use of arrow functions
 * @param {Number} firstNumber First number to divide
 * @returns result of the operation divide
 */
function divideBy(firstNumber) {
    return (secondNumber) => {
        return secondNumber / firstNumber;
    }
}

/**
 * Complex Closure
 * Use of arrow functions
 * @param {Number} firstNumber First number to add
 * @returns result of the operation add
 */
function addBy(firstNumber) {
    return (secondNumber) => {
        return firstNumber + secondNumber;
    }
}

let addBy100 = addBy(100);
let addBy1000 = addBy(1000);
let divideBy10 = divideBy(10);
let divideBy100 = divideBy(100);
