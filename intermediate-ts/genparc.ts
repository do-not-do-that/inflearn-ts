// 1
interface IData<T extends string | number> {
  data: T;
}

// 2
function returnParams<T>(params: T): T {
  return params;
}

returnParams<string>("hi");
returnParams<number>(26);

// 3
const rP: <T>(params: T) => T = returnParams;
interface IExecute {
  rP: <T>(params: T) => T;
}

// 4
interface IObj1 {
  name: string;
  age: number;
}

interface IObj2 {
  city: string;
  phone: string;
}

function prtKey<T extends object, U extends keyof T>(params: T, key: U): T[U] {
  console.log(params[key]);
  return params[key];
}

prtKey<IObj1, keyof IObj1>({ name: "John", age: 30 }, "name");
prtKey<IObj2, keyof IObj2>({ city: "Seoul", phone: "01012341234" }, "phone");

// 5
class ClassName<T> {
  constructor(private _data: T) {}

  set data(newData: T) {
    this._data = newData;
  }

  get data() {
    return this._data;
  }
}
