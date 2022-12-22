import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UserQuery {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  address?: string;
}
