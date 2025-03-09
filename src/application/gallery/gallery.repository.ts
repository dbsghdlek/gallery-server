import Gallery from '../../domain/gallery/entities/Gallery.entity';
import { ImageDto } from './dto/Image.dto';
export const GALLERY_REPOSITORY = Symbol('GalleryRepository');
export interface GalleryRepository {
  getImageList(pageNumber: number): Promise<ImageDto[]>;
}
