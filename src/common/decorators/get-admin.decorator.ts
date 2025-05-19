import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { User } from 'src/database/entities/user.entity';
export const GetAdmin = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request: Request = ctx.switchToHttp().getRequest();
    const user: User = request['user'];
    if (user.isSuperUser) {
      return user;
    }
    throw new UnauthorizedException('User is not an admin');
  },
);
