import { Module } from '@nestjs/common';
import { PropertyService } from './property.service';
import { PropertyResolver } from './property.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Property } from './entities/property.entity';
import { PriceRange } from './entities/price_range.entity';
import { Content } from './entities/content.entity';
import { Amenities } from './entities/amenities.entity';
import { Establishment } from './entities/establishment.entity';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    JwtModule.register({
      secret: process.env.SECRET,
      signOptions: {
        expiresIn: '8h',
      },
    }),
    TypeOrmModule.forFeature([
      Property,
      PriceRange,
      Content,
      Amenities,
      Establishment,
    ]),
  ],
  providers: [PropertyResolver, PropertyService],
})
export class PropertyModule {}
