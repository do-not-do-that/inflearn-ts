export class UserEntity {
  name?: string;
  age?: number;
  marketing?: boolean;

  constructor(name?: string, age?: number, marketing?: boolean) {
    if (name) this.name = name;
    if (age || typeof age === "number") this.age = age;
    if (marketing != undefined) this.marketing = marketing;
  }

  // constructor(public name?: string, public age?: number, public marketing?: boolean) {}

  static Builder = class {
    private _name?: string;
    private _age?: number;
    private _marketing?: boolean;

    // 원래 class와 필드의 이름이 같은 함수 - 메소드
    name(newName: string) {
      this._name = newName;

      // return this
      return this;
    }

    age(newAge: number) {
      this._age = newAge > 0 ? newAge : 0;

      // return this
      return this;
    }

    marketing(newMarketing: boolean) {
      this._marketing = newMarketing;

      // return this
      return this;
    }

    build(): UserEntity {
      return new UserEntity(this._name, this._age, this._marketing);
    }
  };
}
