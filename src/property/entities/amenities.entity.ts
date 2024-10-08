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
export class Amenities {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  tag: string;

  @Column()
  @Field()
  image: string;

  @ManyToOne(() => Property, (property) => property.amenities, {
    onDelete: 'CASCADE',
  })
  property: Property;
}
