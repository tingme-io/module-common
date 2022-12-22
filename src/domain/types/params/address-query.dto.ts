import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsEthereumAddress } from 'class-validator';

export class AddressQueryDto {
  @ApiProperty({ required: true })
  @IsEthereumAddress()
  @IsDefined()
  address: string;
}
