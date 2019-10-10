var sumRecursion = function (value) {
    if (value == 0) {
        return 0;
    }
    return sumRecursion(value - 1) + value;
}

var sumRecursionReduction = function (value) {
    var sum = 0;
    for (var i = 0; i <= value; i++) {
        sum += i
    }
    return sum;
}

var sumRecursionTail = function (value, x = 0) {
    if (value == 1) {
        return value + x;
    }
    return sumRecursionTail(value - 1, value + x);
}

console.log(sumRecursion(10))
console.log(sumRecursionReduction(10))
console.log(sumRecursionTail(10))
