import { Module, forwardRef } from '@nestjs/common';
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
    }),
  ],
  exports: [JwtAuthGuard, LocalStrategy],
  providers: [JwtAuthGuard, LocalStrategy],
})
export class AuthModule {}
