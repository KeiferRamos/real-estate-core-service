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
import { Content } from './content.entity';
import { Amenities } from './amenities.entity';
import { Establishment } from './establishment.entity';

@Entity()
@ObjectType()
export class Property {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  description: string;

  @Column()
  @Field()
  status: string;

  @Column({ nullable: true })
  @Field()
  location: string;

  @Column()
  @Field()
  type: string;

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

  @Column('text', { array: true, nullable: true, default: [] })
  @Field(() => [String], { nullable: true, defaultValue: [] })
  gallery: string[];

  @OneToMany(() => Amenities, (amenities) => amenities.property, {
    cascade: true,
    eager: true,
    nullable: true,
  })
  @JoinColumn()
  @Field(() => [Amenities], { nullable: true, defaultValue: [] })
  amenities: Amenities[];

  @OneToMany(() => Establishment, (establishment) => establishment.property, {
    cascade: true,
    eager: true,
    nullable: true,
  })
  @JoinColumn()
  @Field(() => [Establishment], { nullable: true, defaultValue: [] })
  establishments: Establishment[];
}
