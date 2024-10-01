import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Property } from './property.entity';

@Entity()
@ObjectType()
export class Content {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  content_type: string;

  @Column()
  @Field()
  banner: string;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  description: string;

  @ManyToOne(() => Property, (property) => property.contents, {
    onDelete: 'CASCADE',
  })
  property: Property;
}
