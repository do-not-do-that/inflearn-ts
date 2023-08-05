// null undefined

const un: undefined = undefined;

// 최하위 계층 ->

interface IMan {
  name: string;
}

function printName(params: IMan) {
  console.log("printName on!");
  console.log(params?.name);
}

printName(undefined);
