// extends 쓰는 이유
// 1. 안전성 2. 보장

function prt6<T extends string | number, U extends boolean | object>(
  params: T,
  params2: U
) {
  if (typeof params === "string") {
    console.log("문자열");
  } else if (typeof params === "number") {
    console.log("숫자");
  }

  if (typeof params2 === "boolean") {
    console.log("불리언");
  } else if (typeof params2 === "object") {
    console.log("객체");
  }
}

prt6<string, boolean>("test", true);
prt6<number, object>(1, {});

interface IHi {
  hi: (name: string) => void;
}

function execute<T extends IHi>(params: T) {
  params.hi("은빔");
}

execute({
  hi(name: string) {
    console.log("hi!", name);
  },
});
