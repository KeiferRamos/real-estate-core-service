import { InputType, Int, Field } from '@nestjs/graphql';
import {
  CreateAssetInput,
  CreateContentInput,
} from '../../media/dto/create-media.input';
import {
  IsArray,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';

@InputType()
class CreateLandmarkInput {
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  id?: string;

  @Field()
  @IsString()
  category: string;

  @Field(() => [String])
  @IsString({ each: true })
  @IsArray()
  sub_category: string[];
}

@InputType()
class CreatePriceRangeInput {
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  id?: string;

  @Field()
  @IsNumber()
  minimum: number;

  @Field()
  @IsNumber()
  maximum: number;
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
  @IsObject()
  price_range: CreatePriceRangeInput;

  @Field(() => [CreateContentInput])
  @IsArray()
  contents: CreateContentInput[];

  @Field(() => [CreateLandmarkInput])
  @IsArray()
  landmarks: CreateLandmarkInput[];
}
