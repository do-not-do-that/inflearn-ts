console.log(typeof "hi");
console.log(typeof 123);
console.log(typeof true);

const exString: string = "something";

const childString: typeof exString = "hoho";

function add(a: number, b: number): number {
  return a + b;
}

type A = ReturnType<typeof add>;

enum ENumbers {
  "zero",
  "one",
  "two",
  "three",
}

const numbs: typeof ENumbers = ENumbers;
console.log(numbs.three);
