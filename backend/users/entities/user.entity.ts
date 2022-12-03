import { Review } from 'backend/movies/entities/review.entity';
import { IUser } from 'interfaces';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User implements IUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  refreshToken: string;

  @OneToMany(() => Review, (review) => review.user)
  reviews: Review[];
}
