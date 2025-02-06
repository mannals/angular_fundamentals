/*
Your task is to write an TS function that takes your shoesize (in US or EU size) and converts it.
For this task you can assume an universal offset, like shown in the example below
(no need for mens and womens):

function convertShoeSize(!!ADD PARAMETER & TYPE + RETURN TYPE!!) {
    const offset = 33;
    ...
}

The function should work like this
(In this example, it would be converting from US to EU,
if you want the other way around, change the offset to 9 or so):

console.log(convertShoeSize(8)); -> output should be: 41
*/
function convertShoeSize(shoeSize) {
    var offset = 33;
    // for the sake of simplicity, let's just use adult shoe sizes
    if (shoeSize >= 35) {
        return shoeSize - offset;
    }
    else {
        return shoeSize + offset;
    }
}
console.log(convertShoeSize(8));
