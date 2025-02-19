import Gallery from '../entities/Gallery.entity';
export const GALLERY_REPOSITORY = Symbol('GalleryRepository');
export interface GalleryRepository {
  findAll(): Promise<Gallery[]>;
}
