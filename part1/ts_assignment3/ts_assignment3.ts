/*
Your task is to create a simple function called "calcArray" that returns: 
a. sum of the elements from an array and 
b. returns the count of elements in the array.

To get you started:

First define the type for the return value and use it:

type ArrayValues = {
    sum: number;
    count: number;
}

function calcArray(...): ArrayValues {
    //Calculate the sum & count here

    return {
        sum,
        count
    };
}

The following usage:

const arrayNumbers: number[] = [1, 5, 5, 5, 6];
const test = calcArray(arrayNumbers);
console.log(`Sum: ${test.sum} & count: ${test.count}`);

Should print: Sum: 22 & count: 5
*/

type ArrayValues = {
    sum: number;
    count: number;
}

function calcArray(numArray: number[]): ArrayValues {
    let sum = 0;
    let count = 0;

    for (let num of numArray) {
        sum += num;
        count += 1;
    }

    return {
        sum,
        count
    };
};

const arrayNumbers: number[] = [1, 5, 5, 5, 6];
const test = calcArray(arrayNumbers);
console.log(`Sum: ${test.sum} & count: ${test.count}`);