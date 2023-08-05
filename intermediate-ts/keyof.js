"use strict";
function prt3(params, key) {
    console.log(params[key]);
}
prt3({
    title: "타입스크립투",
    publisher: "dmsql",
    price: 1234,
    author: "은빔",
}, "author");
