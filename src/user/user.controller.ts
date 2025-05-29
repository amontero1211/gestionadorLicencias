import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import JwtGuard from 'src/auth/strategy/jwt.guard';
import { GetAdmin } from 'src/common/decorators/get-admin.decorator';
import { User } from 'src/database/entities/user.entity';
import { CreateUserBodyDoc } from './doc/create-user-body.doc';
import { CreateUserResponseDoc } from './doc/create-user-response.doc';
import { UserResponseDoc } from './doc/users-response.doc';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(JwtGuard)
  @ApiResponse({ type: [UserResponseDoc] })
  async findAll(@GetAdmin() _: User) {
    return await this.userService.findAll();
  }

  @Post('create')
  @UseGuards(JwtGuard)
  @ApiBody({ type: CreateUserBodyDoc })
  @ApiResponse({ type: CreateUserResponseDoc })
  async create(@GetAdmin() user: User, @Body() body: CreateUserDto) {
    return await this.userService.create({ ...body, createdBy: user });
  }
}
