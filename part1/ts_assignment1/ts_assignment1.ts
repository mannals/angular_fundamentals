/* 
Your task is to convert the previous assignment (JS Assignment 2) to use TypeScript. 
So exactly the same function, but add types for the parameters. 
*/

function print(name: string, occupation: string, wage: number): string {
    return "Hey, " + name + ". You are a " + occupation + " and your hourly wage is " + wage.toString() + " dollars."
}

console.log(print("Sam", "Engineer", 25))