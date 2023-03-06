import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class EmailNotificationDTO {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'email'
  })
  email: string;
}