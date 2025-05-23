import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PropertyService } from './property.service';
import { Property } from './entities/property.entity';
import { CreatePropertyInput } from './dto/create-property.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/auth.guard';
import { IsPublic } from '../meta/data';

@UseGuards(JwtAuthGuard)
@Resolver(() => Property)
export class PropertyResolver {
  constructor(private readonly propertyService: PropertyService) {}

  @IsPublic()
  @Query(() => [Property], { name: 'properties' })
  findAll() {
    return this.propertyService.findAll();
  }

  @IsPublic()
  @Query(() => Property, { name: 'property' })
  findOne(@Args('id') id: string) {
    return this.propertyService.find(id);
  }

  @Mutation(() => Property)
  createProperty(@Args('CreatePropertyInput') input: CreatePropertyInput) {
    return this.propertyService.create(input);
  }

  @Mutation(() => String)
  deleteProperty(@Args('id') id: string) {
    return this.propertyService.delete(id);
  }
}
