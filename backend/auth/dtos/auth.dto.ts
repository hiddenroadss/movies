import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { IUser } from 'interfaces';

export class AuthDto implements Omit<IUser, 'id' | 'refreshToken' | 'reviews'> {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
