import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema } from '@nestjs/mongoose';

@ObjectType()
@Schema()
export class PriceRange {
  @Field()
  _id: string;

  @Prop()
  @Field()
  minimum: number;

  @Prop()
  @Field()
  maximum: number;
}
