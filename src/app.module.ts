import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Property } from './property/entities/property.entity';
import { PropertyModule } from './property/property.module';
import { PriceRange } from './property/entities/price_range.entity';
import { Content } from './property/entities/content.entity';
import { Amenities } from './property/entities/amenities.entity';
import { Establishment } from './property/entities/establishment.entity';
import { BlogsModule } from './blogs/blogs.module';
import { BlogContent } from './blogs/entities/blog_content.entity';
import { Blog } from './blogs/entities/blog.entity';
import { AdminModule } from './admin/admin.module';
import { Admin } from './admin/entities/admin.entity';
import { FullName } from './admin/entities/fullname.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      database: 'real-estate',
      type: 'postgres',
      username: 'postgres',
      password: 'postgres',
      host: 'localhost',
      port: 5432,
      entities: [
        Property,
        PriceRange,
        Content,
        Amenities,
        Establishment,
        BlogContent,
        Blog,
        Admin,
        FullName,
      ],
      synchronize: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    PropertyModule,
    BlogsModule,
    AdminModule,
  ],
})
export class AppModule {}
