"use strict";
// 배열 타입
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = ["hi", "hello", "world"];
const arr4 = ["hi", "hello", "world"];
const arr5 = [1, true, false, "good", {}]; // 이 경우는 설계가 잘못된 상황.(특수한 케이스 제외)
const arr6 = [
    {
        name: "eunbiim",
        age: 24,
        city: "seoul",
    },
    {
        name: "eunbiim",
        age: 24,
    },
    {
        name: "eunbiim",
        age: 24,
        city: "seoul",
    },
    {
        name: "eunbiim",
        age: 24,
    },
    {
        name: "eunbiim",
        age: 24,
        city: "seoul",
    },
    {
        name: "eunbiim",
        age: 24,
        city: "seoul",
    },
];
arr6.forEach((e) => { var _a; return console.log((_a = e === null || e === void 0 ? void 0 : e.city) !== null && _a !== void 0 ? _a : "default"); });
// 튜플 - 배열의 길이와 원소를 바꿀 수 없는 자료구조. (불변성 유지)
const arr7 = [1, "hi", {}, []];
console.log("🚀 ~ file: arr.ts:52 ~ arr7:", arr7);
arr7.push("test");
console.log("🚀 ~ file: arr.ts:54 ~ arr7:", arr7); // [ 1, 'hi', {}, [], 'test' ] 로, 튜플은 논리적인 자료구조 임을 확인할 수 있음. (실제 런타임에서 보장 x)
