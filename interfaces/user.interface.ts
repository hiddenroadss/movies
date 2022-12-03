import { IReview } from './review.interface';

export interface IUser {
  id: number;

  email: string;

  password: string;

  refreshToken: string;

  reviews: IReview[];
}
