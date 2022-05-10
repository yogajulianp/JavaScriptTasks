//factorial loop
function factorial(value){
    let result = 1;
    for (let i = 1; i <= value; i++ ) {
        result *= i;
    }

    return result;
}

console.log(factorial(8));
console.log(1*2*3*4*5*6*7*8);

//factorial recursive
function factorialRecursive(value){
    if(value === 1){
        return 1
    } else {
        return value * factorialRecursive(value-1);
    }
}

console.log(factorialRecursive(8));
// 8 * factorialRecursive(7)
// 8 * 7 * factorialRecursive(6)
// 8 * 7 * 6 * factorialRecursive(5)
// 8 * 7 * 6 * 5 * factorialRecursive(4)
// 8 * 7 * 6 * 5 * 4 * factorialRecursive(3)
// 8 * 7 * 6 * 5 * 4 * 3 * factorialRecursive(2)
// 8 * 7 * 6 * 5 * 4 * 3 * 2 * factorialRecursive(1)
// 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1