// 배열 타입
const arr1: number[] = [1, 2, 3];
const arr2: Array<number> = [1, 2, 3];

const arr3: string[] = ["hi", "hello", "world"];
const arr4: Array<string> = ["hi", "hello", "world"];

const arr5 = [1, true, false, "good", {}]; // 이 경우는 설계가 잘못된 상황.(특수한 케이스 제외)

interface IPerson {
  name: string;
  age: number;
  city?: string;
}

const arr6: IPerson[] = [
  {
    name: "eunbiim",
    age: 24,
    city: "seoul",
  },
  {
    name: "eunbiim",
    age: 24,
  },
  {
    name: "eunbiim",
    age: 24,
    city: "seoul",
  },
  {
    name: "eunbiim",
    age: 24,
  },
  {
    name: "eunbiim",
    age: 24,
    city: "seoul",
  },
  {
    name: "eunbiim",
    age: 24,
    city: "seoul",
  },
];

arr6.forEach((e: IPerson) => console.log(e?.city ?? "default"));

// 튜플 - 배열의 길이와 원소를 바꿀 수 없는 자료구조. (불변성 유지)
const arr7: [number, string, object, any[]] = [1, "hi", {}, []];
console.log("🚀 ~ file: arr.ts:52 ~ arr7:", arr7);
arr7.push("test");
console.log("🚀 ~ file: arr.ts:54 ~ arr7:", arr7); // [ 1, 'hi', {}, [], 'test' ] 로, 튜플은 논리적인 자료구조 임을 확인할 수 있음. (실제 런타임에서 보장 x)
