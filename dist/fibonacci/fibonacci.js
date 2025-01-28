"use strict";
const findFibonacciNumber = (n) => {
    if (n === 1)
        return 0;
    if (n === 2)
        return 1;
    return findFibonacciNumber(n - 1) + findFibonacciNumber(n - 2);
};
console.log(findFibonacciNumber(5));
