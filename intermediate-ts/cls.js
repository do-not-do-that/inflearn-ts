"use strict";
class UserInfo {
    constructor(name, age, phone) {
        this.name = name;
        this._age = age;
        this._phone = phone;
    }
    get phone() {
        return (this._phone.slice(0, 3) +
            " - " +
            this._phone.slice(3, 7) +
            " - " +
            this._phone.slice(7, 12));
    }
    // 속력, 넓이, 나이 등은 음수 표현 x
    set phone(newPhone) {
        this._phone = newPhone;
    }
    get age() {
        return this._age;
    }
    set age(newAge) {
        if (newAge <= 0)
            this._age = 0;
        else
            this._age = newAge;
    }
}
const user = new UserInfo("eunbiim", 24, "01011114444");
// user.phone = "busan";
user.age = -25;
console.log(user.name, user.age, user.phone);
