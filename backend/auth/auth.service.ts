import { Injectable, ForbiddenException } from '@nestjs/common';
import { UsersService } from 'backend/users/users.service';
import { AuthDto } from './dtos/auth.dto';
import * as bcrypt from 'bcrypt';
import { Tokens } from './types/tokens.type';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signupLocal(dto: AuthDto): Promise<Tokens> {
    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const newUser = await this.usersService.create({
      ...dto,
      password: hashedPassword,
    });
    const tokens = await this.getTokens(newUser.id, newUser.email);

    this.updateRefreshTokenHash(newUser.id, tokens.refresh_token);

    return tokens;
  }

  async signinLocal(dto: AuthDto) {
    const user = await this.usersService.findOne(dto.email);

    if (!user) {
      throw new ForbiddenException('Access denied');
    }

    const isPasswordsMatch = await bcrypt.compare(dto.password, user.password);

    if (!isPasswordsMatch) {
      throw new ForbiddenException('Access denied');
    }

    const tokens = await this.getTokens(user.id, user.email);
    await this.updateRefreshTokenHash(user.id, tokens.refresh_token);

    return tokens;
  }

  async logout(userId: number) {
    await this.usersService.update(userId, null);
  }

  async refreshTokens(userId: number, refreshToken: string) {
    const user = await this.usersService.findOneById(userId);

    if (!user) {
      throw new ForbiddenException('Access Denied');
    }

    const rtMatches = await bcrypt.compare(refreshToken, user.refreshToken);
    if (!rtMatches) {
      throw new ForbiddenException('Access Denied');
    }

    const tokens = await this.getTokens(user.id, user.email);

    this.updateRefreshTokenHash(user.id, tokens.refresh_token);

    return tokens;
  }

  private async getTokens(userId: number, email: string): Promise<Tokens> {
    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          email,
        },
        {
          secret: 'sec',
          expiresIn: 60 * 15,
        },
      ),
      this.jwtService.signAsync(
        {
          sub: userId,
          email,
        },
        {
          secret: 'rt-sec',
          expiresIn: 60 * 60 * 24 * 7,
        },
      ),
    ]);

    return {
      access_token: at,
      refresh_token: rt,
    };
  }

  private async updateRefreshTokenHash(userId: number, refreshToken: string) {
    const hash = await bcrypt.hash(refreshToken, 10);
    await this.usersService.update(userId, refreshToken);
  }
}
