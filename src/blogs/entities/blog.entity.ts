import { ObjectType, Field } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BlogContent } from './blog_content.entity';

@Entity()
@ObjectType()
export class Blog {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  description: string;

  @Column()
  @Field()
  author: string;

  @Column()
  @Field()
  date_created: string;

  @Column('text', { array: true })
  @Field(() => [String])
  categories: string[];

  @Column()
  @Field()
  banner: string;

  @OneToMany(() => BlogContent, (blogcontent) => blogcontent.blog, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  @Field(() => [BlogContent])
  blog_contents: BlogContent[];
}
