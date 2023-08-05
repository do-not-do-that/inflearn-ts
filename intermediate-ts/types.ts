interface IUser {
  name: string;
  age: number;
}

interface IBook2 {
  title: string;
  price: number;
}

interface ICart {
  userName: string;
  bookName: string;
}

interface IUserCartService {
  user: IUser;
  book: IBook2;
  cart: ICart;
}

function login(params: IUserCartService["user"]) {
  // 유저 로그인
  console.log(params);
}

function searchBook(params: IUserCartService["book"]) {
  // 책 검색 로직
  console.log(params);
}

function addBookToMyCart(params: IUserCartService["cart"]) {
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
