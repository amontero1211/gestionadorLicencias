import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDoc {
  @ApiProperty({
    example: '2025-05-29T02:01:56.136Z',
    description: 'The date when the user was created',
  })
  createdAt: string;

  @ApiProperty({
    example: '2025-05-29T02:01:56.136Z',
    description: 'The date when the user was last updated',
  })
  updatedAt: string;

  @ApiProperty({
    example: null,
    description: 'The date when the user was deleted, null if not deleted',
    nullable: true,
  })
  deletedAt: string | null;

  @ApiProperty({
    example: 1,
    description: 'The unique identifier of the user',
  })
  id: number;

  @ApiProperty({
    example: null,
    description: "The URL of the user's avatar image",
    nullable: true,
  })
  avatar: string | null;

  @ApiProperty({
    example: 'Super User',
    description: 'The full name of the user',
  })
  name: string;

  @ApiProperty({
    example: 'admin@email.com',
    description: 'The email address of the user',
  })
  email: string;

  @ApiProperty({
    example: true,
    description: 'Whether the user has super user privileges',
  })
  isSuperUser: boolean;
}
