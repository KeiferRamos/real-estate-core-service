import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema } from '@nestjs/mongoose';

@ObjectType()
@Schema()
export class Amenities {
  @Field()
  _id: string;

  @Prop()
  @Field()
  name: string;

  @Prop()
  @Field()
  image: string;
}
