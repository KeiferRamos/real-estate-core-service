import { InputType, Int, Field } from '@nestjs/graphql';
import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
class CreateAmenitiesInput {
  @Field()
  @IsString()
  image: string;

  @Field()
  @IsString()
  tag: string;
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
export class CreateEstablishmentInput {
  @Field(() => [String])
  @IsArray()
  list: string[];

  @Field()
  @IsString()
  tag: string;
}

@InputType()
export class CreateContentInput {
  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  title?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  banner?: string;

  @Field(() => [String], { nullable: true })
  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  gallery?: string[];

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  content_type?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  description?: string;
}

@InputType()
export class CreatePropertyInput {
  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  id?: string;

  @Field()
  @IsString()
  title: string;

  @Field(() => [String])
  @IsString({ each: true })
  @IsArray()
  gallery: string[];

  @Field()
  @IsString()
  type: string;

  @Field()
  @IsString()
  name: string;

  @Field()
  @IsString()
  description: string;

  @Field()
  @IsString()
  location: string;

  @Field()
  @IsString()
  status: string;

  @Field(() => [CreateAmenitiesInput])
  @IsArray()
  amenities: CreateAmenitiesInput[];

  @Field(() => [String])
  @IsArray()
  nearby_properties: string[];

  @Field(() => CreatePriceRangeInput)
  price_range: CreatePriceRangeInput;

  @Field(() => [CreateEstablishmentInput])
  establishments: CreateEstablishmentInput[];

  @Field(() => [CreateContentInput])
  contents: CreateContentInput[];
}
