"use strict";
// 인터페이스의 주 목적
// 명세, 타입, 클래스를 만들 때
const man = {
    name: "eunbiiim",
    age: 24,
    city: "seoul",
};
// 웹 앱
// 경계선 //
// 서버
function prt(params) {
    var _a;
    console.log((_a = params === null || params === void 0 ? void 0 : params.city) !== null && _a !== void 0 ? _a : "default");
}
prt(man);
