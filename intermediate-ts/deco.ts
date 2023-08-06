// f(g(x)) ---> f() {return g();}, g: 데코레이터 함수
// g ----> f(g(x)) , f: 데코레이터 팩토리(데코레이터 함수를 감싸는 함수, 목적 : 인자 전달, params 전달)

// 1. 데코레이터는 함수다
function Controller(constructor: { new (email: string): any }): any {
  return class extends constructor {
    _email = "deco@inflearn.com";
    _name = "eunbiim";
    _age = 24;
  };
}

function Get(params: any): any {
  //   console.log("[GET]", params);
}

function Post(params: any): any {
  console.log("[Post] deco Factory: ", params);
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    console.log("[Post] deco Func:", target, propertyKey, descriptor);

    target.getReq();
    target[propertyKey]();
  };
}

function Column(params: any): any {
  //   console.log("Column", params);
}

function UseGuard(): any {
  console.log("useGuard Factory: ");
  return (
    constructor: Function,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) => {
    console.log("useGuard Func:", constructor, propertyKey, descriptor);
  };
}

// 2. 데코레이터는 무조건 class 와 같이 쓴다. (내부 외부, 멤버 변수, 메소드, 파라미터...)
@Controller
class ExampleClass {
  //   @Column("email")
  private _email: string;
  constructor(email: string) {
    this._email = email;
  }

  //   @Get("/user")
  getReq() {
    console.log("getReq method process! ");
  }

  // Factory {f(g(x)) 여기서 f 역할, g deco func} -> top to bottom 으로 실행됨.
  // deco func -> bottom to top 으로 실행됨.
  //   @Post("/board")
  //   @UseGuard()
  postReq() {
    console.log("postReq method process! ");
  }

  @UseGuard()
  get email(): string {
    return this._email;
  }
}

// 3. 런타임에 클래스에 붙어서 실행되는 함수 == 데코레이터  ->@ -> new Class() 인스턴스화 없이 실행됨.
// console.log(new ExampleClass("example@inflearn.com"));

// 4. 유추해보기 -> 데코레이터에서 함수 안에 데이터를 조작할 수 있을 것 같음.
