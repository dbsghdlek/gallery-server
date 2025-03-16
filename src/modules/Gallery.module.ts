import { Module } from '@nestjs/common';
import { GalleryRepositoryImpl } from '../infra/gallery/database/repositories/GalleryRepotitoryImpl';
import { GalleryController } from '../interface/gallery/Gallery.controller';
import { GalleryService } from '../application/gallery/services/Gallery.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GalleryEntity } from '../infra/gallery/database/gallery.entity';

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
