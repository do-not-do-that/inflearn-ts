interface IAdd {
  (a: number, b: number): IAdd;

  a: number;
  b: number;

  getResult(): number;
}

function add(a: number, b: number): void {
  this.a = a;
  this.b = b;

  this.getResult = (): number => {
    return this.a + this.b;
  };
}

const temp1: IAdd = new add(1, 2);
const temp2: IAdd = new add(3, 4);

console.log(temp1, temp2);
