// function printType(params: any) {
//   console.log(typeof params);
// }

// printType("test");
// printType(23);
// printType({});

interface IGene<T, U> {
  data: Array<T>;
  name: U;
}

function prt5(params: IGene<number, string>) {
  console.log(typeof params.data);
}

prt5({ data: [50, 40, 30], name: "test" });
