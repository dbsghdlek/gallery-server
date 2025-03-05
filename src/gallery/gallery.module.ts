import { Module } from '@nestjs/common';
import { GalleryRepositoryImpl } from './infra/database/repositories/GalleryRepotitoryImpl';
import { GalleryController } from './interface/GalleryController';
import { GalleryService } from './application/services/Gallery.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GalleryEntity } from './infra/database/gallery.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GalleryEntity])],
  providers: [
    {
      provide: 'GALLERY_REPOSITORY',
      useClass: GalleryRepositoryImpl,
    },
    GalleryService,
  ],
  controllers: [GalleryController],
})
export default class GalleryModule {}
