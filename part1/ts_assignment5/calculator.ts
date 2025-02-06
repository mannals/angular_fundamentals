import {Values} from "./values";

export class Calculator {
    numArray: number[];
    values: Values;


    public constructor(numArray: number[]) {
        this.numArray = numArray;
        this.values = new Values();
    }

    public getSumCount(): string {
        let sum: number = 0;
        let count: number = 0;
        for (let num of this.numArray) {
            sum += num;
            count += 1;
        };

        this.values.setSum(sum);
        this.values.setCount(count);

        return "Sum: " + this.values.sum.toString() + " & count: " + this.values.count.toString();
    }    

};