// 성별, 부서코드, 카테고리, ..etc
// enum은 컴파일 시 function 으로 구현된다. js 에서는 enum 이 없기 때문이다.
enum categoryEnum {
  H = "H",
  K = "K",
  S = "S",
}

const category: categoryEnum = categoryEnum.H;

// 웹 앱
// --- 기준선
// 서버

function cate(category: any) {
  console.log(category); // 0 출력
  if (category == "H") {
    console.log("5% 할인");
  } else if (category == "K") {
    console.log("10% 할인");
  } else if (category == "S") {
    console.log("80% 할인");
  } else {
    console.log("서버 stop");
  }
}

cate(category);

// 리터럴 타입

enum sexEnum {
  MALE = "MALE",
  FEMALE = "FEMALE",
  ETC = "ETC",
}

const sex: "MALE" | "FEMALE" | "ETC" = "MALE";
const sex2: sexEnum = sexEnum.ETC;
