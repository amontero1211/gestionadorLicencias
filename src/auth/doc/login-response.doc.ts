import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/database/entities/user.entity';

export class LoginResponseDoc {
  @ApiProperty({
    description: 'JWT authentication token for the user',
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTc0ODQ4NDY1OCwiZXhwIjoxNzQ4NDg4MjU4fQ.dc6811DVUp_PR4msU_vhZOBbQ5L9CalN65pVNIln2Jg',
  })
  token: string;

  @ApiProperty({
    description: 'User information including profile details and permissions',
    example: {
      id: 1,
      name: 'Super User',
      email: 'admin@email.com',
      avatar: null,
      isSuperUser: true,
      createdAt: '2025-05-29T02:01:56.136Z',
      updatedAt: '2025-05-29T02:01:56.136Z',
      deletedAt: null,
    },
    type: User,
  })
  user: User;
}
