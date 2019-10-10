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

console.log(sumRecursion(10))
console.log(sumRecursionReduction(10))
