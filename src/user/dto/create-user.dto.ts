import { IsBoolean, IsOptional, IsString } from 'class-validator';

import { IsNotEmpty } from 'class-validator';

import { IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  avatar: string;

  @IsBoolean()
  @IsOptional()
  isSuperUser?: boolean;
}
