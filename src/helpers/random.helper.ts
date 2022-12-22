import { NumberHelper } from './number.helper';
import BigNumber from 'bignumber.js';

export interface IRandomChanceValue<T> {
  readonly chance: number;
  readonly value: T;
}

const RATE_RANDOM = 100;

export class RandomHelper {
  public static randomChance<T>(maps: IRandomChanceValue<T>[]): T {
    const values = [];
    let start = 1;
    maps.forEach(({ chance, value }) => {
      const end = new BigNumber(start)
        .plus(chance * RATE_RANDOM - 1)
        .toNumber();
      values.push({
        start,
        end,
        value,
      });
      start = end + 1;
    });
    const number = NumberHelper.randomNumber(1, 100 * RATE_RANDOM);
    const value = values.find(
      (item) => item.start <= number && item.end >= number,
    );
    return value ? value.value : 0;
  }
}
