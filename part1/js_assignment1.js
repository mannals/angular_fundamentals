function arraySum(array) {
    var sum = 0;
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var i = array_1[_i];
        sum += parseInt(i);
    }
    return sum;
}
console.log(arraySum([5, 5, 1, 3]));
