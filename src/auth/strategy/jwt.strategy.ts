import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { InjectEntityManager } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ITokenPayload } from 'src/common/interfaces/itoken-payload';
import { User } from 'src/database/entities/user.entity';
import { EntityManager } from 'typeorm';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    @InjectEntityManager()
    private readonly entityManager: EntityManager,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get('JWT_SECRET') || 'fallback-secret-key',
    });
  }

  async validate(payload: ITokenPayload): Promise<User> {
    const user = await this.entityManager.findOne(User, {
      where: { id: payload.userId },
    });
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    return user;
  }
}
