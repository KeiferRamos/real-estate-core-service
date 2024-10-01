import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Admin } from './admin.entity';

@Entity()
@ObjectType()
export class FullName {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  first_name: string;

  @Column()
  @Field()
  last_name: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  middle_name?: string;

  @OneToOne(() => Admin, (admin) => admin.full_name, { onDelete: 'CASCADE' })
  admin: Admin;
}
