import { Module } from '@nestjs/common';
import { GalleryRepositoryImpl } from './infra/database/repositories/GalleryRepotitoryImpl';
import { GALLERY_REPOSITORY } from './domain/repositories/gallery.repository';

@Module({
  providers: [
    {
      provide: GALLERY_REPOSITORY,
      useClass: GalleryRepositoryImpl,
    },
  ],
})
export default class GalleryModule {}
