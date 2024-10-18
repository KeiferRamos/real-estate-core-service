import { Module } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { BlogsResolver } from './blogs.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogContent } from './entities/blog_content.entity';
import { Blog } from './entities/blog.entity';
import { AuthModule } from '../auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forFeature([BlogContent, Blog]),
    AuthModule,
    JwtModule.register({
      secret: process.env.SECRET,
      signOptions: {
        expiresIn: '8h',
      },
    }),
  ],
  providers: [BlogsResolver, BlogsService],
})
export class BlogsModule {}
