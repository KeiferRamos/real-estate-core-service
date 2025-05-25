import { InputType, Int, Field } from '@nestjs/graphql';
import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
class CreateAssetInput {
  @Field()
  @IsString()
  image: string;

  @Field()
  @IsString()
  tag: string;

  @Field({ nullable: true })
  @IsString()
  category: string;
}

@InputType()
class CreatePriceRangeInput {
  @Field()
  @IsNumber()
  minimum: number;

  @Field()
  @IsNumber()
  maximum: number;
}

@InputType()
export class CreateContentInput {
  @Field(() => [String], { nullable: true })
  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  gallery?: string[];

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  richtext?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  content_type?: string;
}

@InputType()
export class CreatePropertyInput {
  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  id?: string;

  @Field(() => [CreateAssetInput])
  @IsArray()
  gallery: CreateAssetInput[];

  @Field()
  @IsString()
  category: string;

  @Field()
  @IsString()
  opening: string;

  @Field()
  @IsString()
  name: string;

  @Field()
  @IsString()
  location: string;

  @Field()
  @IsString()
  status: string;

  @Field(() => [String])
  @IsArray()
  nearby_properties: string[];

  @Field(() => CreatePriceRangeInput)
  price_range: CreatePriceRangeInput;

  @Field(() => [CreateContentInput])
  contents: CreateContentInput[];
}
