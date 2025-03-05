import Gallery from '../entities/Gallery.entity';
export const GALLERY_REPOSITORY = Symbol('GalleryRepository');
export interface GalleryRepository {
  findAllByPaging(pageNumber: number): Promise<Gallery[]>;
}
