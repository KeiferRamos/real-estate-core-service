import { InputType, Int, Field } from '@nestjs/graphql';
import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
class CreateAmenitiesInput {
  @Field()
  @IsString()
  image: string;

  @Field()
  @IsString()
  name: string;
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
export class CreateTrademarkInput {
  @Field()
  @IsString()
  title: string;

  @Field(() => [String])
  @IsArray()
  @IsString({ each: true })
  list: string[];
}

@InputType()
export class CreateTrademarkListInput {
  @Field(() => [String])
  @IsArray()
  @IsString({ each: true })
  images: string[];

  @Field(() => [CreateTrademarkInput])
  list: CreateTrademarkInput[];
}

@InputType()
export class CreateContentInput {
  @Field()
  @IsString()
  title: string;

  @Field()
  @IsString()
  image: string;

  @Field()
  @IsString()
  content: string;

  @Field()
  @IsString()
  component: string;
}

@InputType()
export class CreatePropertyInput {
  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  _id?: string;

  @Field()
  @IsString()
  title: string;

  @Field(() => [String])
  @IsString({ each: true })
  @IsArray()
  images: string[];

  @Field()
  @IsString()
  property_type: string;

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

  @Field(() => CreateTrademarkListInput)
  trademarks: CreateTrademarkListInput;

  @Field(() => [CreateContentInput])
  contents: CreateContentInput[];
}
