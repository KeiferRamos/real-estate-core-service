import { ObjectType, Field } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { FullName } from './fullname.entity';
import { Role } from './roles/entities/role.entity';

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

  @ManyToOne(() => Role, (role) => role.admin, { cascade: true, eager: true })
  @JoinColumn()
  @Field(() => Role)
  role: Role;

  @OneToOne(() => FullName, (fullname) => fullname.admin, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  @Field(() => FullName)
  full_name: FullName;
}
