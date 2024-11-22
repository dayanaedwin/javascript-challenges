/* Implement the computeAmount function such that it provides the following methods:
    hundred(val): Adds val hundreds (1 hundred = 100) to the total amount.
    thousand(val): Adds val thousands (1 thousand = 1,000) to the total amount.
    lacs(val): Adds val lacs (1 lac = 100,000) to the total amount.
    crores(val): Adds val crores (1 crore = 10,000,000) to the total amount.
    value(): Returns the total computed amount
 */

function computeAmount() {
    let value = 0;

    this.hundred = function (val) {
        value += val * 100;
        return this;
    }
    this.thousand = function (val) {
        value += val * 1000;
        return this;
    }
    this.lacs = function (val) {
        value += val * 100000;
        return this;
    }
    this.crore = function (val) {
        value += val * 10000000;
    }
    this.value = function () {
        return value;
    }
    return this;
}

console.log(computeAmount().lacs(15).thousand(5).value());