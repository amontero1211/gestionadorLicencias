import { ApiProperty } from '@nestjs/swagger';

/**
 * Represents the response structure for the authenticated user endpoint
 * This DTO defines the shape of the user data returned when fetching the current user's information
 */
export class MeResponseDoc {
  @ApiProperty({
    description: 'Unique identifier for the user',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: "User's full name",
    example: 'Super User',
  })
  name: string;

  @ApiProperty({
    description: "User's email address",
    example: 'admin@email.com',
  })
  email: string;

  @ApiProperty({
    description:
      "URL or path to the user's avatar image. Can be null if no avatar is set",
    example: null,
    nullable: true,
  })
  avatar: string | null;

  @ApiProperty({
    description: 'Indicates whether the user has super user privileges',
    example: true,
  })
  isSuperUser: boolean;

  @ApiProperty({
    description: 'Timestamp when the user record was created',
    example: '2025-05-29T02:01:56.136Z',
  })
  createdAt: string;

  @ApiProperty({
    description: 'Timestamp when the user record was last updated',
    example: '2025-05-29T02:01:56.136Z',
  })
  updatedAt: string;

  @ApiProperty({
    description:
      'Timestamp when the user record was soft deleted. Null if the user is active',
    example: null,
    nullable: true,
  })
  deletedAt: string | null;
}
