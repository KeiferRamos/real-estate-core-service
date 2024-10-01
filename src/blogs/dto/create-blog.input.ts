import { InputType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsArray, IsOptional, IsString, ValidateNested } from 'class-validator';

@InputType()
export class CreateBlogContentInput {
  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  id?: string;

  @Field()
  @IsString()
  content_type: string;

  @Field(() => [String], { nullable: true })
  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  gallery?: string[];

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  video?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  banner?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  title?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  description?: string;
}

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
  date_created: string;

  @IsString({ each: true })
  @Field(() => [String])
  @IsArray()
  categories: string[];

  @IsString()
  @Field()
  banner: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateBlogContentInput)
  @Field(() => [CreateBlogContentInput])
  blog_contents: CreateBlogContentInput[];
}
