import { Field, ObjectType } from '@nestjs/graphql';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@ObjectType()
@Schema()
export class Nearby {
  @Field()
  _id: string;

  @Prop()
  @Field()
  name: string;

  @Prop()
  @Field()
  property_type: string;

  @Prop()
  @Field(() => [String])
  images: string[];

  @Prop()
  @Field()
  location: string;
}
