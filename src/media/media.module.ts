import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asset } from './entities/asset_entity';
import { Content } from './entities/content_entity';

@Module({
  imports: [TypeOrmModule.forFeature([Asset, Content])],
})
export class MediaModule {}
