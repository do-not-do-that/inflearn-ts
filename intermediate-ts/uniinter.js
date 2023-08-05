"use strict";
// 1. union 합집합 | (OR)
let nameOrAge;
nameOrAge = "eunbiiim";
nameOrAge = 24;
function printUnion(params) {
    // name 정보가 들어왔을 때 로직
    if ("name" in params) {
        console.log(params.name);
    }
    // age 정보가 들어왔을 때 로직
    if ("age" in params) {
        console.log(params.age);
    }
}
printUnion({ age: 12 });
const nameAndAge = {
    name: "eunbiiim",
    age: 24,
};
function search(params) {
    console.log(params.name + ",", params.age);
}
search({ age: 24, name: "eunbiiim" });
