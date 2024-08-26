import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Amenities } from './amenities.entity';
import { Nearby } from './nearby.entity';
import { PriceRange } from './price.entity';
import { TrademarkList } from './trademarks.entity';
import { Content } from './content.entity';

@ObjectType()
@Schema()
export class Property {
  @Field()
  _id: string;

  @Prop()
  @Field()
  title: string;

  @Prop()
  @Field()
  location: string;

  @Prop()
  @Field()
  name: string;

  @Prop()
  @Field()
  property_type: string;

  @Prop()
  @Field()
  status: string;

  @Prop()
  @Field(() => [String])
  images: string[];

  @Prop()
  @Field()
  description: string;

  @Prop({ type: [{ type: Amenities, ref: Amenities.name }] })
  @Field(() => [Amenities])
  amenities: Amenities[];

  @Prop({ type: [{ type: Nearby, ref: Nearby.name }] })
  @Field(() => [Nearby], { nullable: true })
  nearby_properties: Nearby[];

  @Prop({ type: PriceRange, ref: PriceRange.name })
  @Field(() => PriceRange)
  price_range: PriceRange;

  @Prop({ type: TrademarkList, ref: TrademarkList.name })
  @Field(() => TrademarkList)
  trademarks: TrademarkList;

  @Prop({ type: [{ type: Content, ref: Content.name }] })
  @Field(() => [Content])
  contents: Content[];
}

export const PropertySchema = SchemaFactory.createForClass(Property);
