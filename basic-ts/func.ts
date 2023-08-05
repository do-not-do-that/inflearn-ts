function add(a: number, b: number): void {
  //   return a + b;
  console.log(a + b);
  return;
}

add(1, 2);

const minus: addFunc = (a: number, b: number): string => String(a - b);

const multiple: mainMultiFunc = (a: number, b: number): subMultiFunc => {
  return () => {
    return a * b * 2;
  };
};

type typeName = any;
type addFunc = (a: number, b: number) => string;
type subMultiFunc = () => number;
type mainMultiFunc = (a: number, b: number) => subMultiFunc;

type myString = string;
type myNumber = number;

// type 키워드를 사용하는 경우
// 1. 함수
// 2. 타입이 길어질 때 ex: "hello" | "world" | "test" | "t1" ...etc

function sendError(): never {
  throw { errorCode: 500, message: "internal server error" };
}

const result = sendError();
console.log("result : ", result);
