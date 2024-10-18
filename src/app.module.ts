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
import { RolesModule } from './roles/roles.module';
import { Role } from './roles/entities/role.entity';
import { ConfigModule } from '@nestjs/config';
import { Permission } from './roles/entities/permission.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      database: process.env.NAME,
      type: 'postgres',
      url: process.env.DATABASE_URL,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      ssl: {
        rejectUnauthorized: false,
      },
      host: process.env.HOST,
      port: 6543,
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
        Role,
        Permission,
      ],
      synchronize: false,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    PropertyModule,
    BlogsModule,
    AdminModule,
    RolesModule,
  ],
})
export class AppModule {}
