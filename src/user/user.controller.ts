import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import JwtGuard from 'src/auth/strategy/jwt.guard';
import { GetAdmin } from 'src/common/decorators/get-admin.decorator';
import { User } from 'src/database/entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(JwtGuard)
  async findAll(@GetAdmin() _: User) {
    return await this.userService.findAll();
  }

  @Post('create')
  @UseGuards(JwtGuard)
  async create(@GetAdmin() user: User, @Body() body: CreateUserDto) {
    return await this.userService.create({ ...body, createdBy: user });
  }
}
