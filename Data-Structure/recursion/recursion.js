/**
 * Linear Recursion 
 */ 
var sumLinearRecursion = function (value) {
    if (value == 0) {
        return 0;
    }
    return sumRecursion(value - 1) + value;
}

var sumLinearRecursionReduction = function (value) {
    var sum = 0;
    for (var i = 0; i <= value; i++) {
        sum += i
    }
    return sum;
}

var sumLinearRecursionTail = function (value, x = 0) {
    if (value == 1) {
        return value + x;
    }
    return sumRecursionTail(value - 1, value + x);
}

// 1 1 2 3 5 8 13 20 32

/**
 * Binary Recursion 
 */
var fibonacyReduction = function (value) {
    var n1 = 0;
    var n2 = 1;
    var temp = 1;
    if (value < 0) {
        return -1;
    } else if (value == 0 || value == 1) {
        return 1;
    } else {
        for (var i = 2; i < value; i++) {
            n1 = n2;
            n2 = temp;
            temp = n1 + n2;
        }
    }
    return temp;
}

var fibonacyRecursion = function (value) {
    if (value == 0 || value == 1) {
        return 1;
    }
    return fibonacyRecursion(value - 1) + fibonacyRecursion(value - 2);
}

var fibonancyRecurionTail = function (value, n1, n2) {
    if (value == 0) {
        return n1;
    }

    if (value == 1) {
        return n2;
    }

    return fibonancyRecurionTail(value - 1, n2, n1 + n2);
}

// Calculate sum n 
// console.log(sumRecursion(10))
// console.log(sumRecursionReduction(10))
// console.log(sumRecursionTail(10))


// // Calculate fibonacy recursion reduction
// for (var i = 0; i < 5; i++) {
//     console.log(fibonacyReduction(i));
//

// Calculate fibonancy recursion
// for (var i = 0; i < 5; i++) {
//     console.log(fibonacyRecursion(i));
// }
// console.log(fibonancyRecurionTail(4, 0, 1));
console.log(sumLinearRecurion(5))
console.log(sumLinerRecursionTail(5))