"use strict";
function login(params) {
    // 유저 로그인
    console.log(params);
}
function searchBook(params) {
    // 책 검색 로직
    console.log(params);
}
function addBookToMyCart(params) {
    // 책 검색 로직
    console.log(params);
}
login({ name: "eunbiim", age: 25 });
searchBook({
    title: "책 이름",
    price: 2512,
});
addBookToMyCart({
    userName: "eunbiim",
    bookName: "타입스크립투",
});
