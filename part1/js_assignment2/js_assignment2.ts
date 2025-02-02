/* 
Write a function called "print" that takes three parameters: 
name, occupation and wage. 
The function should return all of the information in a sentence, 
so for example "console.log(print("Sam", "Engineer", 25")) could return: 
Hey, Sam. You are an engineer and your hourly wage is 25 dollars.
*/

function print(name, occupation, wage) {
    return "Hey, " + name + ". You are a " + occupation + " and your hourly wage is " + wage + " dollars."
}

console.log(print("Sam", "Engineer", "25"))