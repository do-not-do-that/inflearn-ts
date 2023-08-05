"use strict";
// 서버에서 다른 서버로 정보 전달
// 프론트에서 서버로부터 받을 때 -> json object
class LoginDataTransferObject {
    //   public ID;
    //   public PW;
    //   constructor(ID: string, PW: number) {
    //     this.ID = ID;
    //     this.PW = PW;
    //   }
    constructor(ID, PW = "default password") {
        this.ID = ID;
        this.PW = PW;
    }
}
const LoginDTO = new LoginDataTransferObject("hello");
console.log(LoginDTO);
