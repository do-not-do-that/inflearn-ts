import { ICalculator } from "./cal";

export class CalculatorImplV2 implements ICalculator {
  add(a: number, b: number): number {
    return a + 3 * b;
  }

  minus(a: number, b: number): number {
    return a - 4 * b;
  }

  multiple(a: number, b: number): number {
    return a * b * 2;
  }
}

// 인터페이스를 이용해 구현한 클래스를 만듦
