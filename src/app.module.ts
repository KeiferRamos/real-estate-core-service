import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { PropertyModule } from './property/property.module';
import { join } from 'path';

@Module({
  imports: [
    PropertyModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    MongooseModule.forRoot(
      'mongodb+srv://keiferramos2001:kimpoy1234@keiferdb.brheh4c.mongodb.net/PropertyDB?retryWrites=true&w=majority&appName=KeiferDb',
    ),
  ],
})
export class AppModule {}
