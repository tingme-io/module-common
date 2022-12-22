export class NumberHelper {
  public static randomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  }

  public static randomNonce(): number {
    return NumberHelper.randomNumber(1234, 123456789);
  }
}
