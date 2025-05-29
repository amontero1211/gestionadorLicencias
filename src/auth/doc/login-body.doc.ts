import { ApiProperty } from '@nestjs/swagger';

export class LoginBodyDoc {
  @ApiProperty({
    description: 'The email of the user',
    example: 'test@test.com',
  })
  email: string;

  @ApiProperty({
    description: 'The password of the user',
    example: 'password',
  })
  password: string;
}
