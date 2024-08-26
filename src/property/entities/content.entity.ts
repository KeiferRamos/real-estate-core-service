import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema } from '@nestjs/mongoose';

@ObjectType()
@Schema()
export class Content {
  @Prop()
  @Field()
  title: string;

  @Prop()
  @Field()
  image: string;

  @Prop()
  @Field()
  content: string;

  @Prop()
  @Field()
  component: string;
}
