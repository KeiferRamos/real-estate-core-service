import { ObjectType, Field } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Permission } from './permission.entity';
import { Admin } from 'src/admin/entities/admin.entity';

@Entity()
@ObjectType()
export class Role {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  role: string;

  @ManyToOne(() => Permission, (permission) => permission.role, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  @Field(() => Permission)
  permission: Permission;

  @OneToMany(() => Admin, (admin) => admin.role)
  admin: Admin;
}
