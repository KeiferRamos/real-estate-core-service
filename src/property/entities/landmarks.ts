import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Property } from './property.entity';

@Entity()
@ObjectType()
export class Landmark {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  category: string;

  @Column('text', { array: true })
  @Field(() => [String])
  sub_category: string[];

  @ManyToOne(() => Property, (property) => property.landmarks, {
    onDelete: 'CASCADE',
  })
  property: Property;
}
