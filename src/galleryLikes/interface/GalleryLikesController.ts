import { Controller } from '@nestjs/common';
import GalleryLikesService from '../application/GalleryLikesService';

@Controller('likes')
export default class GalleryLikesController {
  constructor(private likesService: GalleryLikesService) {}
}
