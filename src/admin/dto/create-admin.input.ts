import { InputType, Field } from '@nestjs/graphql';

import { IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateAdminInput {
  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  id?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  registration_id?: string;

  @Field()
  @IsString()
  username: string;

  @Field()
  @IsString()
  password: string;

  @Field()
  @IsString()
  full_name: string;
}
