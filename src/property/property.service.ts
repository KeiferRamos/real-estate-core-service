import { Injectable } from '@nestjs/common';
import { CreatePropertyInput } from './dto/create-property.input';
import { InjectModel } from '@nestjs/mongoose';
import { Property } from './entities/property.entity';
import { Model } from 'mongoose';

@Injectable()
export class PropertyService {
  constructor(
    @InjectModel(Property.name) private readonly propertyModel: Model<Property>,
  ) {}

  async create({
    nearby_properties: nearby_properties_ids,
    _id,
    ...rest
  }: CreatePropertyInput) {
    const nearby_properties = await this.findByIds(nearby_properties_ids);
    if (_id) {
      return this.propertyModel.findByIdAndUpdate(
        _id,
        {
          nearby_properties,
          ...rest,
        },
        { returnOriginal: false },
      );
    }
    return this.propertyModel.create({ nearby_properties, ...rest });
  }

  findAll() {
    return this.propertyModel.find();
  }

  findByIds(ids: string[]) {
    return this.propertyModel.find({
      _id: {
        $in: ids,
      },
    });
  }

  findOne(id: string) {
    return this.propertyModel.findById(id);
  }

  async remove(id: string) {
    await this.propertyModel.updateMany(
      {
        'nearby_properties._id': id,
      },
      {
        $pull: { nearby_properties: { _id: id } },
      },
    );

    return this.propertyModel.findByIdAndDelete(id);
  }
}
