"use strict";
// not sure what was meant by values in assignment instructions
// I'm assuming it meant the sum and count
Object.defineProperty(exports, "__esModule", { value: true });
exports.Values = void 0;
var Values = /** @class */ (function () {
    function Values() {
        this.sum = 0;
        this.count = 0;
    }
    Values.prototype.setSum = function (sum) {
        this.sum = sum;
    };
    Values.prototype.setCount = function (count) {
        this.count = count;
    };
    return Values;
}());
exports.Values = Values;
