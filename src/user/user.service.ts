import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { hash } from 'bcrypt';
import { User } from 'src/database/entities/user.entity';
import { EntityManager } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectEntityManager()
    private readonly entityManager: EntityManager,
  ) {}

  async findAll(): Promise<User[]> {
    return this.entityManager.find(User);
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.entityManager.findOne(User, { where: { email } });
  }

  async cleanUser(user: any): Promise<any> {
    const { password, ...cleanUser } = user;
    const hashedPassword = await hash(password, 10);
    return { ...cleanUser, password: hashedPassword };
  }

  async create(user: CreateUserDto & { createdBy: User }): Promise<User> {
    return await this.entityManager.save(User, await this.cleanUser(user));
  }
}
