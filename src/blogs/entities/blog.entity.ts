import { ObjectType, Field } from '@nestjs/graphql';
import { Content } from '../../media/entities/content_entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

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
  date_published: string;

  @Column('text', { array: true })
  @Field(() => [String])
  tags: string[];

  @Column()
  @Field()
  banner: string;

  @OneToMany(() => Content, (blogcontent) => blogcontent.blog, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  @Field(() => [Content])
  contents: Content[];
}
