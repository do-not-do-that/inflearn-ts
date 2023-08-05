"use strict";
// 성별, 부서코드, 카테고리, ..etc
var categoryEnum;
(function (categoryEnum) {
    categoryEnum["H"] = "H";
    categoryEnum["K"] = "K";
    categoryEnum["S"] = "S";
})(categoryEnum || (categoryEnum = {}));
const category = categoryEnum.H;
// 웹 앱
// --- 기준선
// 서버
function cate(category) {
    console.log(category); // 0 출력
    if (category == "H") {
        console.log("5% 할인");
    }
    else if (category == "K") {
        console.log("10% 할인");
    }
    else if (category == "S") {
        console.log("80% 할인");
    }
    else {
        console.log("서버 stop");
    }
}
cate(category);
