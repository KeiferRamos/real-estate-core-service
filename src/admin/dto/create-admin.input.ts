import { InputType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsOptional, IsString, ValidateNested } from 'class-validator';

@InputType()
export class CreateFullNameInput {
  @Field()
  @IsString()
  first_name: string;

  @Field()
  @IsString()
  last_name: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  middle_name?: string;
}

@InputType()
export class CreateAdminInput {
  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  id?: string;

  @Field()
  @IsString()
  username: string;

  @Field()
  @IsString()
  password: string;

  @Field()
  @IsString()
  role: string;

  @Field()
  @ValidateNested({ each: true })
  @Type(() => CreateFullNameInput)
  full_name: CreateFullNameInput;
}
