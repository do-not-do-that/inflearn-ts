// const testText = document.querySelector("#someText")!;
// const testText = document.querySelector("#someText") as HTMLElement;
// console.log(testText?.id);

interface IExam {
  value: number;
}

const example: object = { value: 1 };
// console.log(example.value);

// 1. as (추천!)
console.log((example as IExam).value);
// 2 <>
console.log(<IExam>example);
