import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Blog } from './blog.entity';

@Entity()
@ObjectType()
export class BlogContent {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  content_type: string;

  @Column('text', { array: true, nullable: true })
  @Field(() => [String], { nullable: true })
  gallery: string[];

  @Column({ nullable: true })
  @Field({ nullable: true })
  video: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  banner: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  title: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  description: string;

  @ManyToOne(() => Blog, (blog) => blog.blog_contents, { onDelete: 'CASCADE' })
  blog: Blog;
}
