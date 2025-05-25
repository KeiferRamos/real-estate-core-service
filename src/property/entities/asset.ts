import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Property } from './property.entity';

@Entity()
@ObjectType()
export class Asset {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  tag: string;

  @Column()
  @Field()
  image: string;

  @Column({ nullable: true })
  @Field()
  category: string;

  @ManyToOne(() => Property, (property) => property.gallery, {
    onDelete: 'CASCADE',
  })
  gallery: Property;
}
