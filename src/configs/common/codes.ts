import { HttpStatus } from '@nestjs/common';

interface IErrorDetails {
  message: string;
  key: string;
  code: string;
}

enum ERROR_CODE {
  SERVER_ERROR = 'SERVER_ERROR',
  BAD_REQUEST = 'BAD_REQUEST',
  NOT_FOUND = 'NOT_FOUND',
  UNPROCESSABLE_ENTITY = 'UNPROCESSABLE_ENTITY',
  UNAUTHORIZED = 'UNAUTHORIZED',
  CONFLICT = 'CONFLICT',
  FORBIDDEN = 'FORBIDDEN',
  UNVERIFIED = 'UNVERIFIED',
  RESTRICTED = 'RESTRICTED',
  ACCOUNT_NOT_EXISTS = 'ACCOUNT_NOT_EXISTS',
  VALIDATION_FAILED = 'VALIDATION_FAILED',
  INVALID_DATE = 'INVALID_DATE',
  UPLOAD_FILE_FAILED = 'UPLOAD_FILE_FAILED',
  EVENT_NOT_FOUND = 'EVENT_NOT_FOUND',
  EVENT_NOT_EXISTS = 'EVENT_NOT_EXISTS',
  CONFIG_NOT_FOUND = 'CONFIG_NOT_FOUND',
  TOO_MANY_REQUEST = 'TOO_MANY_REQUEST',
  ACCOUNT_NOT_FOUND = 'ACCOUNT_NOT_FOUND',
  ACCOUNT_ALREADY_EXISTED = 'ACCOUNT_ALREADY_EXISTED',
  WALLET_NOT_EXISTS = 'WALLET_NOT_EXISTS',
  INSUFFICIENT_BALANCE = 'INSUFFICIENT_BALANCE',
}

const ErrorList = {
  [ERROR_CODE.SERVER_ERROR]: {
    code: HttpStatus.INTERNAL_SERVER_ERROR,
    error: 'E_SERVER_ERROR',
  },
  [ERROR_CODE.BAD_REQUEST]: {
    code: HttpStatus.BAD_REQUEST,
    error: 'E_BAD_REQUEST',
  },
  [ERROR_CODE.NOT_FOUND]: {
    code: HttpStatus.NOT_FOUND,
    error: 'E_NOT_FOUND',
  },
  [ERROR_CODE.UNPROCESSABLE_ENTITY]: {
    code: HttpStatus.UNPROCESSABLE_ENTITY,
    error: 'E_UNPROCESSABLE_ENTITY',
  },
  [ERROR_CODE.UNAUTHORIZED]: {
    code: HttpStatus.UNAUTHORIZED,
    error: 'E_UNAUTHORIZED',
  },
  [ERROR_CODE.CONFLICT]: {
    code: HttpStatus.CONFLICT,
    error: 'E_CONFLICT',
  },
  [ERROR_CODE.FORBIDDEN]: {
    code: HttpStatus.FORBIDDEN,
    error: 'E_FORBIDDEN',
  },
  [ERROR_CODE.UNVERIFIED]: {
    code: HttpStatus.NOT_ACCEPTABLE,
    error: 'E_UNVERIFIED',
  },
  [ERROR_CODE.RESTRICTED]: {
    code: HttpStatus.PRECONDITION_FAILED,
    error: 'E_RESTRICTED',
  },
  [ERROR_CODE.VALIDATION_FAILED]: {
    code: HttpStatus.BAD_REQUEST,
    error: 'Validation failed',
  },
  [ERROR_CODE.UPLOAD_FILE_FAILED]: {
    code: HttpStatus.BAD_REQUEST,
    error: 'Upload file failed',
  },
  [ERROR_CODE.EVENT_NOT_FOUND]: {
    code: HttpStatus.NOT_FOUND,
    error: 'Event not found',
  },
  [ERROR_CODE.EVENT_NOT_EXISTS]: {
    code: HttpStatus.UNPROCESSABLE_ENTITY,
    error: 'Event not exists',
  },
  [ERROR_CODE.CONFIG_NOT_FOUND]: {
    code: HttpStatus.NOT_FOUND,
    error: 'Config not found',
  },
  [ERROR_CODE.ACCOUNT_NOT_FOUND]: {
    code: HttpStatus.NOT_FOUND,
    error: 'Account not found',
  },
  [ERROR_CODE.ACCOUNT_NOT_EXISTS]: {
    code: HttpStatus.UNPROCESSABLE_ENTITY,
    error: 'Account not existed',
  },
  [ERROR_CODE.ACCOUNT_ALREADY_EXISTED]: {
    code: HttpStatus.CONFLICT,
    error: 'Account already existed',
  },
  [ERROR_CODE.WALLET_NOT_EXISTS]: {
    code: HttpStatus.UNPROCESSABLE_ENTITY,
    error: 'Wallet not existed',
  },
  [ERROR_CODE.INSUFFICIENT_BALANCE]: {
    code: HttpStatus.BAD_REQUEST,
    error: 'Insufficient balance',
  },
};

export { IErrorDetails, ERROR_CODE, ErrorList };
