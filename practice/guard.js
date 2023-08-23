var IDetail = /** @class */ (function () {
    function IDetail() {
    }
    return IDetail;
}());
function setUser(target, param, newValue) {
    if (param === "marketing" && typeof newValue === "boolean") {
        target[param] = newValue;
    }
    else if (param === "detail" && newValue instanceof IDetail) {
        target[param] = newValue;
    }
    else if (param === "sns" && typeof newValue === "string") {
        var v = newValue;
        target[param] = v;
    }
}
