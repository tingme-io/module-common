import Web3 from 'web3';
import * as crypto from 'crypto';

const UPPER_STRING_POOL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER_STRING_POOL = 'abcdefghijklmnopqrstuvwxyz';
const RANDOM_STRING_POOL = UPPER_STRING_POOL + LOWER_STRING_POOL;
const RANDOM_NUMBER_POOL = '0123456789';
const UPPER_NUMBER_POOL = UPPER_STRING_POOL + RANDOM_NUMBER_POOL;
const LOWER_NUMBER_POOL = LOWER_STRING_POOL + RANDOM_NUMBER_POOL;
const URL_REGEX =
  /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,24}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

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

  public static md5(input: string): string {
    return crypto.createHash('md5').update(input).digest('hex');
  }

  public static removeVietnamese(intput: string): string {
    intput = intput.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    intput = intput.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    intput = intput.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    intput = intput.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    intput = intput.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    intput = intput.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    intput = intput.replace(/đ/g, 'd');
    intput = intput.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
    intput = intput.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
    intput = intput.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
    intput = intput.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
    intput = intput.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
    intput = intput.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
    intput = intput.replace(/Đ/g, 'D');
    return intput;
  }

  public static formatHashtag(value: string): string {
    return StringHelper.removeVietnamese(value).replace(/\s+/g, '');
  }

  public static isValidUrl(email: string): boolean {
    return URL_REGEX.test(email);
  }
}
