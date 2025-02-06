import {Calculator} from "./calculator";


const arrayNumbers: number[] = [1, 5, 5, 5, 6];

const calc = new Calculator(arrayNumbers);
console.log(calc.getSumCount());