"use strict";
// 2
function returnParams(params) {
    return params;
}
returnParams("hi");
returnParams(26);
// 3
const rP = returnParams;
function prtKey(params, key) {
    console.log(params[key]);
    return params[key];
}
prtKey({ name: "John", age: 30 }, "name");
prtKey({ city: "Seoul", phone: "01012341234" }, "phone");
// 5
class ClassName {
    constructor(_data) {
        this._data = _data;
    }
    set data(newData) {
        this._data = newData;
    }
    get data() {
        return this._data;
    }
}
