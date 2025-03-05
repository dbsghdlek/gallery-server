import { Module } from '@nestjs/common';
import { GalleryLikesEntity } from './infra/database/galleryLikes.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import GalleryLikesRepositoryImpl from './infra/database/GalleryLikesRepositoryImpl';
import GalleryLikesService from './application/GalleryLikesService';
import GalleryLikesController from './interface/GalleryLikesController';

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
