import { ObjectType, Field } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { FullName } from './fullname.entity';

@Entity()
@ObjectType()
export class Admin {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  username: string;

  @Column()
  @Field()
  password: string;

  @Column()
  @Field()
  role: string;

  @OneToOne(() => FullName, (fullname) => fullname.admin, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  @Field(() => FullName)
  full_name: FullName;
}
