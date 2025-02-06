/*
Your task is to write a function called "castValue" that takes an "unknown" type as its parameter.
The function should return the input (but only if it is a string or a number) as an assigned type,
so not "unknown". If the type is not known, the function should return an error message.

Usage examples:
castValue("Word"); -> Output: Word
castValue(525) -> Output: 525
castValue(false) -> Output: Sorry, this is an unsupported type

Hint:

function castValue(value: unknown) {
    if (typeof value === 'string') {
        let stringValue: string = value as string;
        console.log(stringValue);
*/
function castValue(value) {
    if (typeof value == 'string') {
        var stringValue = value;
        return stringValue;
    }
    else if (typeof value == 'number') {
        var numberValue = value;
        return numberValue;
    }
    else {
        return "Sorry, this is an unsupported type";
    }
    ;
}
;
console.log(castValue("Word"));
console.log(castValue(525));
console.log(castValue(false));
