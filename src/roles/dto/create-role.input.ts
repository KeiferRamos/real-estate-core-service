import { InputType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsArray, IsObject, IsString } from 'class-validator';

@InputType()
export class CreatePermissionInput {
  @Field()
  @IsString()
  name: string;

  @Field(() => [String])
  @IsString({ each: true })
  @IsArray()
  permissions: string[];
}

@InputType()
export class CreateRoleInput {
  @Field()
  @IsString()
  role: string;

  @IsString()
  @Field()
  permission: string;
}
