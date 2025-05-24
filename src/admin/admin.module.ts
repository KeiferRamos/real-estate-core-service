import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminResolver } from './admin.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from './entities/admin.entity';

import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forFeature([Admin]),
    JwtModule.register({
      secret: process.env.SECRET,
      signOptions: {
        expiresIn: '8h',
      },
    }),
  ],
  providers: [AdminResolver, AdminService],
})
export class AdminModule {}
