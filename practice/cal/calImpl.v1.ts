import { ICalculator } from "./cal";

export class CalculatorImplV1 implements ICalculator {
  add(a: number, b: number): number {
    return a + b;
  }

  minus(a: number, b: number): number {
    return a - b;
  }

  multiple(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): number {
    return a / b;
  }
}

// 인터페이스를 이용해 구현한 클래스를 만듦
