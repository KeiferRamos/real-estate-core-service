import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Blog } from '@src/blogs/entities/blog.entity';
import { Property } from '@src/property/entities/property.entity';
import { Asset } from './asset_entity';

@Entity()
@ObjectType()
export class Content {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  content_type: string;

  @OneToMany(() => Asset, (asset) => asset.content, {
    cascade: true,
    nullable: true,
    eager: true,
  })
  @Field(() => [Asset], { nullable: true })
  gallery: Asset[];

  @Column({ nullable: true })
  @Field({ nullable: true })
  richtext: string;

  @ManyToOne(() => Blog, (blog) => blog.contents, { onDelete: 'CASCADE' })
  blog: Blog;

  @ManyToOne(() => Property, (property) => property.contents, {
    onDelete: 'CASCADE',
  })
  property: Property;
}
