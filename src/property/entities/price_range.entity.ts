import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Property } from './property.entity';

@Entity()
@ObjectType()
export class PriceRange {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  minimum: string;

  @Column()
  @Field()
  maximum: string;

  @OneToOne(() => Property, (property) => property.price_range, {
    onDelete: 'SET NULL',
  })
  property: Property;
}
