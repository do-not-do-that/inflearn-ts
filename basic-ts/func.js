"use strict";
function add(a, b) {
    //   return a + b;
    console.log(a + b);
    return;
}
add(1, 2);
const minus = (a, b) => String(a - b);
const multiple = (a, b) => {
    return () => {
        return a * b * 2;
    };
};
// type 키워드를 사용하는 경우
// 1. 함수
// 2. 타입이 길어질 때 ex: "hello" | "world" | "test" | "t1" ...etc
function sendError() {
    throw { errorCode: 500, message: "internal server error" };
}
const result = sendError();
console.log("result : ", result);
