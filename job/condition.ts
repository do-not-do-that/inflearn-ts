interface ICity {
  name: string;
}

interface ISchool extends ICity {
  year: number;
}

console.log(false ? "truevalue" : "falsevalue");
type ConditionType = ISchool extends ICity ? number : string;

// 에러
// const test: ConditionType = "test";
