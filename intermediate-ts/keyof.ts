interface IBook {
  title: string;
  publisher: string;
  price: number;
  author: string;
}

function prt3(params: IBook, key: keyof IBook) {
  console.log(params[key]);
}

prt3(
  {
    title: "타입스크립투",
    publisher: "dmsql",
    price: 1234,
    author: "은빔",
  },
  "author"
);
