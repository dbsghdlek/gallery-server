import { Inject } from '@nestjs/common';
import {
  GalleryRepository,
  GALLERY_REPOSITORY,
} from '../../domain/repositories/gallery.repository';

export class CreateUserUseCase {
  constructor(
    @Inject(GALLERY_REPOSITORY)
    private readonly galleryRepository: GalleryRepository,
  ) {}
}
