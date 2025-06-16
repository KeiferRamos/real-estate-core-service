import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Property } from '../../property/entities/property.entity';
import { Content } from './content_entity';

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
  url: string;

  @Column({ nullable: true })
  @Field()
  category: string;

  @Column({ nullable: true, default: 0 })
  @Field({ nullable: true, defaultValue: 0 })
  order?: number;

  @ManyToOne(() => Property, (property) => property.gallery, {
    onDelete: 'CASCADE',
  })
  gallery: Property;

  @ManyToOne(() => Content, (content) => content.gallery, {
    onDelete: 'CASCADE',
    nullable: true,
  })
  @JoinColumn()
  content: Content;
}
