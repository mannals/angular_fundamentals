function arraySum(array) {
    let sum = 0

    for (let i of array) {
        sum += parseInt(i)
    }

    return sum
}

console.log(arraySum([5, 5, 1, 3]))