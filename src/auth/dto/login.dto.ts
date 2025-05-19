import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsEmail({}, { message: 'Email must be a valid email' })
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString({ message: 'Password must be a string' })
  password: string;
}
