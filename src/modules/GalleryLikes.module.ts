import { Module } from '@nestjs/common';
import { GalleryLikesEntity } from '../infra/galleryLikes/database/galleryLikes.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import GalleryLikesRepositoryImpl from '../infra/galleryLikes/database/GalleryLikesRepositoryImpl';
import GalleryLikesService from '../application/galleryLikes/GalleryLikesService';
import GalleryLikesController from '../interface/galleryLikes/GalleryLikesController';

@Module({
  imports: [TypeOrmModule.forFeature([GalleryLikesEntity])],
  providers: [
    {
      provide: 'LIKES_REPOSITORY',
      useClass: GalleryLikesRepositoryImpl,
    },
    GalleryLikesService,
  ],
  controllers: [GalleryLikesController],
})
export default class GalleryLikesModule {}
