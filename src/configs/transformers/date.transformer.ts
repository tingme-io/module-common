import {AppError} from 'configs/common/app-error';
import {ERROR_CODE, ErrorList} from 'configs/common/codes';

const isValidDate = (d: Date) => {
  return d && d instanceof Date && !isNaN(d.getTime());
};

const valueToDate = (inp: any) => {
  const value = inp.value;
  if (isValidDate(value)) {
    return value;
  }

  if (typeof value === 'string') {
    let d = new Date(value);
    if (isValidDate(d)) {
      return d;
    }

    d = new Date(Number(value));
    if (isValidDate(d)) {
      return d;
    }

    throw new AppError(ErrorList[ERROR_CODE.INVALID_DATE]);
  } else if (typeof value === 'number') {
    const d = new Date(value);
    if (isValidDate(d)) {
      return d;
    }
    throw new AppError(ErrorList[ERROR_CODE.INVALID_DATE]);
  } else {
    throw new AppError(ErrorList[ERROR_CODE.INVALID_DATE]);
  }
};

export { valueToDate };
