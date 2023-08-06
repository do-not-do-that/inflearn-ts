"use strict";
// f(g(x)) ---> f() {return g();}, g: 데코레이터 함수
// g ----> f(g(x)) , f: 데코레이터 팩토리(데코레이터 함수를 감싸는 함수, 목적 : 인자 전달, params 전달)
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// 1. 데코레이터는 함수다
function Controller(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this._email = "deco@inflearn.com";
            this._name = "eunbiim";
            this._age = 24;
        }
    };
}
function Get(params) {
    //   console.log("[GET]", params);
}
function Post(params) {
    console.log("[Post] deco Factory: ", params);
    return (target, propertyKey, descriptor) => {
        console.log("[Post] deco Func:", target, propertyKey, descriptor);
        target.getReq();
        target[propertyKey]();
    };
}
function Column(params) {
    //   console.log("Column", params);
}
function UseGuard() {
    console.log("useGuard Factory: ");
    return (constructor, propertyKey, descriptor) => {
        console.log("useGuard Func:", constructor, propertyKey, descriptor);
    };
}
// 2. 데코레이터는 무조건 class 와 같이 쓴다. (내부 외부, 멤버 변수, 메소드, 파라미터...)
let ExampleClass = class ExampleClass {
    constructor(email) {
        this._email = email;
    }
    //   @Get("/user")
    getReq() {
        console.log("getReq method process! ");
    }
    // Factory {f(g(x)) 여기서 f 역할, g deco func} -> top to bottom 으로 실행됨.
    // deco func -> bottom to top 으로 실행됨.
    //   @Post("/board")
    //   @UseGuard()
    postReq() {
        console.log("postReq method process! ");
    }
    get email() {
        return this._email;
    }
};
__decorate([
    UseGuard(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], ExampleClass.prototype, "email", null);
ExampleClass = __decorate([
    Controller,
    __metadata("design:paramtypes", [String])
], ExampleClass);
// 3. 런타임에 클래스에 붙어서 실행되는 함수 == 데코레이터  ->@ -> new Class() 인스턴스화 없이 실행됨.
// console.log(new ExampleClass("example@inflearn.com"));
// 4. 유추해보기 -> 데코레이터에서 함수 안에 데이터를 조작할 수 있을 것 같음.
