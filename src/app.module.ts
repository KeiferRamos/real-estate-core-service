import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Property } from './property/entities/property.entity';
import { PropertyModule } from './property/property.module';
import { PriceRange } from './property/entities/price_range.entity';
import { BlogsModule } from './blogs/blogs.module';
import { Blog } from './blogs/entities/blog.entity';
import { AdminModule } from './admin/admin.module';
import { Admin } from './admin/entities/admin.entity';

import { ConfigModule } from '@nestjs/config';
import { Landmark } from './property/entities/landmarks';
import { MediaModule } from './media/media.module';
import { Content } from './media/entities/content_entity';
import { Asset } from './media/entities/asset_entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      database: process.env.NAME,
      type: 'postgres',
      url: process.env.DATABASE_URL,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      host: process.env.HOST,
      port: 6543,
      entities: [Property, PriceRange, Content, Asset, Blog, Admin, Landmark],
      synchronize: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      sortSchema: true,
      introspection: true,
    }),
    PropertyModule,
    BlogsModule,
    AdminModule,
    MediaModule,
  ],
})
export class AppModule {}
