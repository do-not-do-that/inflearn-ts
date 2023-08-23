type userType = "admin" | "manager" | "user";

interface IAdmin {
  type: userType;
  post: any;
  info: any;
  detail: any;
}

interface IManager {
  type: userType;
  post: any;
  info: any;
}

interface IUser {
  type: userType;
  post: any;
}

function getLogic(p: IAdmin | IManager | IUser) {
  // admin manager user
  // 누가 가져오느냐에 따라 내려주는 것 달라짐
  switch (p.type) {
    case "admin":
      console.log("모두 다 불러오기", (p as IAdmin).post);
      break;
    case "manager":
      console.log("info 만 추가해서 불러오기", (<IManager>p).info);
      break;
    case "user":
      console.log("post만", p.post);
      break;
  }
}

getLogic({
  type: "manager",
  post: "포스트 불러오는 로지익",
  info: "info 불러오는 로직",
});

type errorCode = 404 | 500;
interface I_NOT_FOUND {
  code: errorCode;
  notFoundFunc: any;
}

interface I_INTER_ERROR {
  code: errorCode;
  interErrorFunc: any;
}

function errorHandler(p: I_NOT_FOUND | I_INTER_ERROR) {
  switch (p.code) {
    case 404:
      console.log((p as I_NOT_FOUND).notFoundFunc);
      break;
    case 500:
      console.log((p as I_INTER_ERROR).interErrorFunc);
      break;
  }
}

errorHandler({ code: 404, notFoundFunc: "404 낫 파운드 발동!" });
