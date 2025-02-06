"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
var values_1 = require("./values");
var Calculator = /** @class */ (function () {
    function Calculator(numArray) {
        this.numArray = numArray;
        this.values = new values_1.Values();
    }
    Calculator.prototype.getSumCount = function () {
        var sum = 0;
        var count = 0;
        for (var _i = 0, _a = this.numArray; _i < _a.length; _i++) {
            var num = _a[_i];
            sum += num;
            count += 1;
        }
        ;
        this.values.setSum(sum);
        this.values.setCount(count);
        return "Sum: " + this.values.sum.toString() + " & count: " + this.values.count.toString();
    };
    return Calculator;
}());
exports.Calculator = Calculator;
;
