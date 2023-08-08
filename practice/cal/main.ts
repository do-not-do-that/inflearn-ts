import { ICalculator } from "./cal";
import { CalculatorImplV1 } from "./calImpl.v1";
import { CalculatorImplV2 } from "./calImpl.v2";

const cal: ICalculator = new CalculatorImplV1();

console.log(cal.add(1, 2));

// 구현 클래스 사용 시 명세를 타입으로 사용함.

// 이유

// 1. OOP
// 결합도가 강하지 않으면서 확장 가능한 프로그램을 위하여.
// 2. 보다 탄탄한 설계
