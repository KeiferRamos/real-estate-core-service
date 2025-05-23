import { Module } from '@nestjs/common';
import { JwtAuthGuard } from './auth.guard';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './jwt.strategy';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    JwtModule.register({
      secret: process.env.SECRET,
      signOptions: {
        expiresIn: '8h',
      },
    }),
  ],
  exports: [JwtAuthGuard, LocalStrategy],
  providers: [JwtAuthGuard, LocalStrategy],
})
export class AuthModule {}
