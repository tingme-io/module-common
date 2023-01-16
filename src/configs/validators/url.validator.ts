import { Injectable } from '@nestjs/common';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { StringHelper } from '@helpers/string.helper';

@ValidatorConstraint()
@Injectable()
export class CustomUrlValidation implements ValidatorConstraintInterface {
  validate(value: string, args: ValidationArguments): boolean {
    return StringHelper.isValidUrl(value);
  }
  defaultMessage(args: ValidationArguments) {
    return `Invalid url format`;
  }
}
