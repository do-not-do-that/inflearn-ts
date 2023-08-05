"use strict";
// extends 쓰는 이유
// 1. 안전성 2. 보장
function prt6(params, params2) {
    if (typeof params === "string") {
        console.log("문자열");
    }
    else if (typeof params === "number") {
        console.log("숫자");
    }
    if (typeof params2 === "boolean") {
        console.log("불리언");
    }
    else if (typeof params2 === "object") {
        console.log("객체");
    }
}
prt6("test", true);
prt6(1, {});
function execute(params) {
    params.hi("은빔");
}
execute({
    hi(name) {
        console.log("hi!", name);
    },
});
