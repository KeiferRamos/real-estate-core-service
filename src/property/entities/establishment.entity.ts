import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Property } from './property.entity';

@Entity()
@ObjectType()
export class Establishment {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  tag: string;

  @Column('text', { array: true })
  @Field(() => [String])
  list: string[];

  @ManyToOne(() => Property, (property) => property, { onDelete: 'CASCADE' })
  property: Property;
}
