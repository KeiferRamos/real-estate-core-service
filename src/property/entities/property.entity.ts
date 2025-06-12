import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PriceRange } from './price_range.entity';

import { Landmark } from './landmarks';
import { Content } from '../../media/entities/content_entity';
import { Asset } from '../../media/entities/asset_entity';

@Entity()
@ObjectType()
export class Property {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Field()
  @Column()
  opening: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  status: string;

  @Column({ nullable: true })
  @Field()
  location: string;

  @Column()
  @Field()
  category: string;

  @OneToOne(() => PriceRange, (price_range) => price_range.property, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  @Field(() => PriceRange)
  price_range: PriceRange;

  @OneToMany(() => Content, (content) => content.property, {
    cascade: true,
    eager: true,
    nullable: true,
  })
  @Field(() => [Content], { defaultValue: [], nullable: true })
  contents: Content[];

  @ManyToMany(() => Property)
  @JoinTable()
  @Field(() => [Property], { nullable: true, defaultValue: [] })
  nearby_properties: Property[];

  @OneToMany(() => Asset, (asset) => asset.gallery, {
    cascade: true,
    eager: true,
    nullable: true,
  })
  @JoinColumn()
  @Field(() => [Asset], { nullable: true, defaultValue: [] })
  gallery: Asset[];

  @OneToMany(() => Landmark, (landmark) => landmark.property, {
    cascade: true,
    eager: true,
    nullable: true,
  })
  @JoinColumn()
  @Field(() => [Landmark], { nullable: true, defaultValue: [] })
  landmarks: Landmark[];
}
