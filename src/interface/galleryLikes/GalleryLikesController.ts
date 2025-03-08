import { Controller } from '@nestjs/common';
import GalleryLikesService from '../../application/galleryLikes/GalleryLikesService';

@Controller('likes')
export default class GalleryLikesController {
  constructor(private likesService: GalleryLikesService) {}
}
