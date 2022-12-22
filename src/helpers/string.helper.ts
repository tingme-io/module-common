import Web3 from 'web3';

const UPPER_STRING_POOL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER_STRING_POOL = 'abcdefghijklmnopqrstuvwxyz';
const RANDOM_STRING_POOL = UPPER_STRING_POOL + LOWER_STRING_POOL;
const RANDOM_NUMBER_POOL = '0123456789';
const UPPER_NUMBER_POOL = UPPER_STRING_POOL + RANDOM_NUMBER_POOL;
const LOWER_NUMBER_POOL = LOWER_STRING_POOL + RANDOM_NUMBER_POOL;

export enum RandomTypes {
  STRING_ONLY = 'STRING_ONLY',
  NUMBER_ONLY = 'NUMBER_ONLY',
  STRING_NUMBER = 'STRING_NUMBER',
  UPPER_ONLY = 'UPPER_ONLY',
  LOWER_ONLY = 'LOWER_ONLY',
  UPPER_NUMBER = 'UPPER_NUMBER',
  LOWER_NUMBER = 'LOWER_NUMBER',
}
export class StringHelper {
  public static stringToSlug(str: string): string {
    return str
      .trim()
      .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-'); // collapse dashes
  }

  public static randomString(length: number, randomType: RandomTypes): string {
    let pool: string;
    switch (randomType) {
      case RandomTypes.STRING_ONLY:
        pool = RANDOM_STRING_POOL;
        break;
      case RandomTypes.NUMBER_ONLY:
        pool = RANDOM_NUMBER_POOL;
        break;
      case RandomTypes.UPPER_ONLY:
        pool = UPPER_STRING_POOL;
        break;
      case RandomTypes.LOWER_ONLY:
        pool = LOWER_STRING_POOL;
        break;
      case RandomTypes.UPPER_NUMBER:
        pool = UPPER_NUMBER_POOL;
        break;
      case RandomTypes.LOWER_NUMBER:
        pool = LOWER_NUMBER_POOL;
        break;
      default:
        pool = RANDOM_STRING_POOL + RANDOM_NUMBER_POOL;
    }

    let rand = '';

    for (let i = 0; i < length; i++) {
      rand += pool.charAt(Math.floor(Math.random() * pool.length));
    }
    return rand;
  }

  public static toChecksumAddress(address: string) {
    return Web3.utils.toChecksumAddress(address);
  }
}
