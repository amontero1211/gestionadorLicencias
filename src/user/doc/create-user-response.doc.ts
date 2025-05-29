import { ApiProperty } from '@nestjs/swagger';

class CreatedByUserDto {
  @ApiProperty({ example: '2025-05-10T21:36:53.714Z' })
  createdAt: Date;

  @ApiProperty({ example: '2025-05-10T21:36:53.714Z' })
  updatedAt: Date;

  @ApiProperty({ example: null, nullable: true })
  deletedAt: Date | null;

  @ApiProperty({ example: 2 })
  id: number;

  @ApiProperty({ example: null, nullable: true })
  avatar: string | null;

  @ApiProperty({ example: 'Super User' })
  name: string;

  @ApiProperty({ example: 'admin@email.com' })
  email: string;

  @ApiProperty({ example: true })
  isSuperUser: boolean;
}

export class CreateUserResponseDoc {
  @ApiProperty({ example: 'email12@email.com' })
  email: string;

  @ApiProperty({ example: 'user' })
  name: string;

  @ApiProperty({ example: true })
  isSuperUser: boolean;

  @ApiProperty({ type: CreatedByUserDto })
  createdBy: CreatedByUserDto;

  @ApiProperty({
    example: '$2b$10$mp2ZCw6XGJGJRvkxHqZxh.j9J0/0mw3hgCXbCth//UMP9sTcfcEM2',
  })
  password: string;

  @ApiProperty({ example: null, nullable: true })
  avatar: string | null;

  @ApiProperty({ example: '2025-05-11T00:57:41.519Z' })
  createdAt: Date;

  @ApiProperty({ example: '2025-05-11T00:57:41.519Z' })
  updatedAt: Date;

  @ApiProperty({ example: null, nullable: true })
  deletedAt: Date | null;

  @ApiProperty({ example: 5 })
  id: number;
}
