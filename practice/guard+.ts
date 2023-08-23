interface IType<T> {
  type: T;
}
interface IPerson extends IType<"person"> {
  name: string;
  walk(): void;
}

interface IAnimal extends IType<"animal"> {
  name: string;
  bark(): void;
}

function isPerson(o: object): o is IPerson {
  return "name" in o && "walk" in o;
}

function isAnimal(o: object): o is IAnimal {
  return "name" in o && "bark" in o;
}

function something(o: IPerson | IAnimal) {
  //   if (isPerson(o)) o.walk();
  //   if (isAnimal(o)) o.bark();

  switch (o.type) {
    case "person":
      o.walk();
      break;
    case "animal":
      o.bark();
      break;
  }
}
