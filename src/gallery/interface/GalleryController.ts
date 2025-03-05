import { GalleryService } from '../application/services/Gallery.service';
import { Controller } from '@nestjs/common';

@Controller('gallery')
export class GalleryController {
  constructor(private readonly galleryService: GalleryService) {}
}
