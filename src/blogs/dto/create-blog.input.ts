import { InputType, Field } from '@nestjs/graphql';
import { CreateContentInput } from '@src/property/dto/create-property.input';
import { Type } from 'class-transformer';
import { IsArray, IsOptional, IsString, ValidateNested } from 'class-validator';

@InputType()
export class CreateBlogInput {
  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  id?: string;

  @IsString()
  @Field()
  title: string;

  @IsString()
  @Field()
  description: string;

  @IsString()
  @Field()
  author: string;

  @IsString()
  @Field()
  date_published: string;

  @IsString({ each: true })
  @Field(() => [String])
  @IsArray()
  tags: string[];

  @IsString()
  @Field()
  banner: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateContentInput)
  @Field(() => [CreateContentInput])
  contents: CreateContentInput[];
}
