import { ApiProperty } from '@nestjs/swagger';

export class CreateUserBodyDoc {
  @ApiProperty({
    example: 'email12@email.com',
    description: 'The email address of the user',
    required: true,
  })
  email: string;

  @ApiProperty({
    example: 'password',
    description: 'The password for the user account',
    required: true,
    minLength: 6,
  })
  password: string;

  @ApiProperty({
    example: 'user',
    description: 'The full name of the user',
    required: true,
  })
  name: string;

  @ApiProperty({
    example: true,
    description: 'Whether the user has super user privileges',
    default: false,
  })
  isSuperUser: boolean;
}
