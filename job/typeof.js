"use strict";
console.log(typeof "hi");
console.log(typeof 123);
console.log(typeof true);
const exString = "something";
const childString = "hoho";
function add(a, b) {
    return a + b;
}
var ENumbers;
(function (ENumbers) {
    ENumbers[ENumbers["zero"] = 0] = "zero";
    ENumbers[ENumbers["one"] = 1] = "one";
    ENumbers[ENumbers["two"] = 2] = "two";
    ENumbers[ENumbers["three"] = 3] = "three";
})(ENumbers || (ENumbers = {}));
const numbs = ENumbers;
console.log(numbs.three);
