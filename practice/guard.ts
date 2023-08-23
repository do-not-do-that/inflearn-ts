class IDetail {
  name: string;
  age: number;
  city: string;
}

type typeSNS = "KAKAO" | "NAVER";
interface IUser {
  detail: IDetail;
  marketing: boolean;
  sns: typeSNS;
}

function setUser(
  target: IUser,
  param: keyof IUser,
  newValue: (typeof target)[typeof param]
) {
  if (param === "marketing" && typeof newValue === "boolean") {
    target[param] = newValue;
  } else if (param === "detail" && newValue instanceof IDetail) {
    target[param] = newValue;
  } else if (param === "sns" && typeof newValue === "string") {
    const v: typeSNS = newValue;
    target[param] = v;
  }
}
