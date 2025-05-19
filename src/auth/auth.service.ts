import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectEntityManager } from '@nestjs/typeorm';
import { compare } from 'bcrypt';
import { ITokenPayload } from 'src/common/interfaces/itoken-payload';
import { User } from 'src/database/entities/user.entity';
import { EntityManager } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectEntityManager()
    private readonly entityManager: EntityManager,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.entityManager.findOne(User, {
      where: { email },
    });
    if (user && (await compare(password, user.password))) {
      const payload: ITokenPayload = { userId: user.id };
      const token = this.jwtService.sign(payload);
      return { user, token };
    }
    return null;
  }
}
