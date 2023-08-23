function getLogic(p) {
    // admin manager user
    // 누가 가져오느냐에 따라 내려주는 것 달라짐
    switch (p.type) {
        case "admin":
            console.log("모두 다 불러오기", p.post);
            break;
        case "manager":
            console.log("info 만 추가해서 불러오기", p.info);
            break;
        case "user":
            console.log("post만", p.post);
            break;
    }
}
getLogic({
    type: "manager",
    post: "포스트 불러오는 로지익",
    info: "info 불러오는 로직"
});
function errorHandler(p) {
    switch (p.code) {
        case 404:
            console.log(p.notFoundFunc);
            break;
        case 500:
            console.log(p.interErrorFunc);
            break;
    }
}
errorHandler({ code: 404, notFoundFunc: "404 낫 파운드 발동!" });
