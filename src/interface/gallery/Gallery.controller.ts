import { GalleryService } from '../../application/gallery/services/Gallery.service';
import { Controller, Get, HttpStatus, Param } from '@nestjs/common';

@Controller('gallery')
export class GalleryController {
  constructor(private readonly galleryService: GalleryService) {}

  @Get('/:pageNumber')
  async getGalleryByPaging(@Param('pageNumber') pageNumber: number) {
    const imageList = await this.galleryService.getImages(pageNumber);
    return {
      statusCode: HttpStatus.OK,
      body: imageList,
    };
  }
}
