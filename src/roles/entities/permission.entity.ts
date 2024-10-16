import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from './role.entity';

@Entity()
@ObjectType()
export class Permission {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  name: string;

  @Column('text', { array: true, default: [] })
  @Field(() => [String])
  permissions: string[];

  @OneToMany(() => Role, (role) => role.permission)
  role: Role;
}
