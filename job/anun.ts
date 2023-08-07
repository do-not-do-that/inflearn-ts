// any unknown
const user: any = {
  ID: "eunbiiim",
};

console.log(user.name);
console.log(user.length);

// 전부 알 수 없어 에러가 나기 때문에,
// 정말 무엇이 들어올지 모를 상황(외부 api 를 가져다 쓰는데, 뭐가 들어올지 모를 때)에 사용됨.
const newUser: unknown = {
  ID: "eunbiiim",
};

console.log(newUser.ID);
console.log(newUser.name);
console.log(newUser.length);
