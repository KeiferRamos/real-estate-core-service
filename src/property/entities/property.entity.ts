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
import { Content } from '../../blogs/entities/content.entity';
import { Asset } from './asset';

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

  @OneToOne(() => PriceRange, {
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
}
