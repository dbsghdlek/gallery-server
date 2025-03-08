import { Inject } from '@nestjs/common';
import {
  GalleryRepository,
  GALLERY_REPOSITORY,
} from '../gallery.repository';

export class GalleryService {
  constructor(
    @Inject('GALLERY_REPOSITORY')
    private readonly galleryRepository: GalleryRepository,
  ) {}

  getImages(pageNumber: number) {
    return this.galleryRepository.getImageList(pageNumber);
  }
}
