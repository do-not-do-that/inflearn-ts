// 인터페이스의 주 목적
// 명세, 타입, 클래스를 만들 때

interface IPerson {
  name: string;
  age: number;
  city?: string;
}

const man: { name: string; age: number; city?: string } = {
  name: "eunbiiim",
  age: 24,
  city: "seoul",
};

// 웹 앱
// 경계선 //
// 서버

function prt(params: IPerson) {
  console.log(params?.city ?? "default");
}

prt(man);
