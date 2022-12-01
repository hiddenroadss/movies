import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthDto } from 'backend/auth/dtos/auth.dto';
import { Not, Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async findOne(email: string) {
    const user = await this.userRepo.findOne({
      where: {
        email,
      },
    });

    return user;
  }

  async findOneById(id: number) {
    const user = await this.userRepo.findOne({
      where: {
        id,
        refreshToken: Not(null),
      },
    });
    return user;
  }

  async create(dto: AuthDto) {
    const existingUser = await this.userRepo.findOne({
      where: {
        email: dto.email,
      },
    });
    if (existingUser) {
      throw new BadRequestException('User already exist');
    }
    const user = this.userRepo.create(dto);
    const savedUser = await this.userRepo.save(user);
    const { password, ...rest } = savedUser;
    return rest;
  }

  async update(userId: number, refreshToken: string) {
    const user = await this.userRepo.preload({
      id: userId,
      refreshToken,
    });

    if (!user) {
      throw new NotFoundException();
    }

    return this.userRepo.save(user);
  }
}
