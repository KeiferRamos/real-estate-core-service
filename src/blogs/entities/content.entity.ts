import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Blog } from './blog.entity';
import { Property } from '../../property/entities/property.entity';

@Entity()
@ObjectType()
export class Content {
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
  richtext: string;

  @ManyToOne(() => Blog, (blog) => blog.contents, { onDelete: 'CASCADE' })
  blog: Blog;

  @ManyToOne(() => Property, (property) => property.contents, {
    onDelete: 'CASCADE',
  })
  property: Blog;
}
