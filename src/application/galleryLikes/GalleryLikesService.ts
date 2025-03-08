import { GalleryRepository } from '../gallery/gallery.repository';
import { Inject } from '@nestjs/common';

export default class GalleryLikesService {
  constructor(
    @Inject('LIKES_REPOSITORY')
    private readonly galleryRepository: GalleryRepository,
  ) {}
}
