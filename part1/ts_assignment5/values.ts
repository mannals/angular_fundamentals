// not sure what was meant by values in assignment instructions
// I'm assuming it meant the sum and count

export class Values {
    sum: number;
    count: number;

    constructor() {
        this.sum = 0;
        this.count = 0;
    }

    public setSum(sum: number) {
        this.sum = sum;
    }

    public setCount(count: number) {
        this.count = count;
    }
}