import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Property } from './entities/property.entity';
import { In, Repository } from 'typeorm';
import { CreatePropertyInput } from './dto/create-property.input';

@Injectable()
export class PropertyService {
  constructor(
    @InjectRepository(Property)
    private readonly propertyRepository: Repository<Property>,
  ) {}

  findAll() {
    try {
      return this.propertyRepository.find({
        relations: ['nearby_properties'],
      });
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  find(id: string) {
    try {
      return this.propertyRepository.findOne({
        where: { id },
        relations: ['nearby_properties'],
        order: {
          contents: {
            order: 'ASC',
            gallery: {
              order: 'ASC',
            },
          },
        },
      });
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async create(createProperty: CreatePropertyInput) {
    try {
      return this.propertyRepository.save(createProperty);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async delete(id: string) {
    try {
      await this.propertyRepository.delete({ id });

      return 'property deleted successfully';
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
