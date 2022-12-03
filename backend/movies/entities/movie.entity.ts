import { Mood } from 'backend/moods/entities/mood.entity';
import { Talent } from 'backend/talents/entities/talent.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { MovieShot } from './movies-shots.entity';
import { Rating } from './rating.entity';
import { Review } from './review.entity';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  originalTitle: string;

  @Column({ nullable: true })
  slogan: string;

  @Column({ nullable: true })
  poster: string;

  @Column({
    type: 'timestamptz',
    default: () => 'NOW()',
  })
  releaseDate: Date;

  @Column({ nullable: true })
  country: string;

  // @ManyToOne(() => Talent, (talent) => talent.movies)
  // director: Talent;

  @Column({ nullable: true })
  budget: number;

  @Column({ nullable: true })
  fees: number;

  @OneToOne(() => Rating, (rating) => rating.movie)
  rating: Rating;

  @Column()
  description: string;

  @JoinTable()
  @ManyToMany(() => Talent, (actor) => actor.movies)
  actors: Talent[];

  @JoinTable()
  @ManyToMany(() => Mood, (mood) => mood.movies, {
    cascade: true,
  })
  moods: Mood[];

  @OneToMany(() => MovieShot, (movieShot) => movieShot.movie, {
    onDelete: 'CASCADE',
  })
  shots: MovieShot[];

  @OneToMany(() => Review, (review) => review.movie)
  reviews: Review[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
