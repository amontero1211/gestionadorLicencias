import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginBodyDoc } from './doc/login-body.doc';
import { LoginResponseDoc } from './doc/login-response.doc';
import { MeResponseDoc } from './doc/me-response.doc';
import { LoginDto } from './dto/login.dto';
import JwtGuard from './strategy/jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiBody({ type: LoginBodyDoc })
  @ApiResponse({ type: LoginResponseDoc })
  async login(@Body() body: LoginDto) {
    const user = await this.authService.validateUser(body.email, body.password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return user;
  }

  @Get('me')
  @UseGuards(JwtGuard)
  @ApiResponse({ type: MeResponseDoc })
  me(@Req() req: Request) {
    return req['user'];
  }
}
