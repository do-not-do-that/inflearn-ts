"use strict";
// null undefined
const un = undefined;
function printName(params) {
    console.log("printName on!");
    console.log(params === null || params === void 0 ? void 0 : params.name);
}
// printName(undefined);
