// 1. union 합집합 | (OR)
let nameOrAge: string | number;
nameOrAge = "eunbiiim";
nameOrAge = 24;

interface IName {
  name: string;
}

interface IAge {
  age: number;
}

type NameObjectOrAgeObject = IName | IAge;

function printUnion(params: NameObjectOrAgeObject) {
  // name 정보가 들어왔을 때 로직
  if ("name" in params) {
    console.log(params.name);
  }

  // age 정보가 들어왔을 때 로직
  if ("age" in params) {
    console.log(params.age);
  }
}

printUnion({ age: 12 });

// 2. intersection 교집합 & (AND)
interface IIName {
  name: string;
}

interface IIAge {
  age: number;
}
const nameAndAge: IName & IAge = {
  name: "eunbiiim",
  age: 24,
};
type ForSearch = IIName & IIAge;

function search(params: ForSearch) {
  console.log(params.name + ",", params.age);
}

search({ age: 24, name: "eunbiiim" });
