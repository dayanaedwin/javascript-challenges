/* Polyfill of bind */

Function.prototype.customBind = customBind;

function customBind(...args) {
    const obj = this;
    const remArgs = args.slice(1);
    return function (...innerArgs) {
        return obj.apply(args[0], [...remArgs, ...innerArgs]);
    }
}

let printName = function (hometown, country) {
    console.log(this.firstName, this.lastName, hometown, country);
}

const member = {
    firstName: "John",
    lastName: "Doe",
}

let printMyName = printName.customBind(member, 'Amsterdam');

printMyName('NL');
