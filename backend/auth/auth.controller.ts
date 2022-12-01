import {
  Controller,
  Post,
  Body,
  HttpStatus,
  HttpCode,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Public } from 'backend/common/decorators/public.decorator';
import { RefreshTokenGuard } from 'backend/common/guards/refresh-token.guard';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { AuthDto } from './dtos/auth.dto';
import { Tokens } from './types/tokens.type';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('/local/signup')
  @HttpCode(HttpStatus.CREATED)
  signupLocal(@Body() dto: AuthDto): Promise<Tokens> {
    return this.authService.signupLocal(dto);
  }

  @Public()
  @Post('/local/signin')
  @HttpCode(HttpStatus.OK)
  signinLocal(@Body() dto: AuthDto): Promise<Tokens> {
    return this.authService.signinLocal(dto);
  }

  @Post('/logout')
  @HttpCode(HttpStatus.OK)
  logout(@Req() request: Request) {
    return this.authService.logout(request.user['sub']);
  }

  @Public()
  @UseGuards(RefreshTokenGuard)
  @Post('/refresh')
  @HttpCode(HttpStatus.OK)
  refreshTokens(@Req() request: Request) {
    console.log(request.user);
    return this.authService.refreshTokens(
      request.user['sub'],
      request.user['refreshToken'],
    );
  }
}
