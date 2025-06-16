import { Field, InputType } from '@nestjs/graphql';
import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateAssetInput {
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  id?: string;

  @Field()
  @IsString()
  url: string;

  @Field()
  @IsString()
  tag: string;

  @Field({ nullable: true })
  @IsString()
  category: string;

  @Field({ nullable: true, defaultValue: 0 })
  @IsNumber()
  order?: number;
}

@InputType()
export class CreateContentInput {
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  id?: string;

  @Field()
  @IsNumber()
  order: number;

  @Field(() => [CreateAssetInput], { nullable: true })
  @IsArray()
  @IsOptional()
  gallery?: CreateAssetInput[];

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  richtext?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  content_type?: string;
}
