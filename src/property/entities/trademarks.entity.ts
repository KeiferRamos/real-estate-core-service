import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema } from '@nestjs/mongoose';

@ObjectType()
@Schema()
export class Trademark {
  @Prop()
  @Field()
  title: string;

  @Prop()
  @Field(() => [String])
  list: string[];
}

@ObjectType()
@Schema()
export class TrademarkList {
  @Prop()
  @Field(() => [String])
  images: string[];

  @Prop({ type: [{ type: Trademark, ref: Trademark.name }] })
  @Field(() => [Trademark])
  list: Trademark[];
}
