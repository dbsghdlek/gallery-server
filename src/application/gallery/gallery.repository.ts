import Gallery from '../../domain/gallery/entities/Gallery.entity';
import { ImageDto } from './dto/Image.dto';
export const GALLERY_REPOSITORY = Symbol('GalleryRepository');
export interface GalleryRepository {
  findAllByPaging(pageNumber: number): Promise<Gallery[]>;

  getImageList(pageNumber: number): Promise<ImageDto[]>;
}
