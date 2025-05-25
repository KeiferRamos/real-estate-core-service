import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Property } from './property/entities/property.entity';
import { PropertyModule } from './property/property.module';
import { PriceRange } from './property/entities/price_range.entity';
import { Asset } from './property/entities/asset';
import { BlogsModule } from './blogs/blogs.module';
import { Content } from './blogs/entities/content.entity';
import { Blog } from './blogs/entities/blog.entity';
import { AdminModule } from './admin/admin.module';
import { Admin } from './admin/entities/admin.entity';

import { ConfigModule } from '@nestjs/config';

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
      entities: [Property, PriceRange, Content, Asset, Blog, Admin],
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
  ],
})
export class AppModule {}
