import { GalleryEntity } from './database/gallery.entity';
import Gallery from '../../domain/gallery/entities/Gallery.entity';

export default class GalleryMapper {
  static toEntity(gallery: Gallery) {
    return new GalleryEntity(
      gallery.id,
      gallery.mediaType,
      gallery.groupName,
      gallery.fileName,
      gallery.thumbnail,
      gallery.pictureDate,
      gallery.registerDate,
    );
  }

  static fromEntity(entity: GalleryEntity) {
    return new Gallery(
      entity.getId,
      entity.getMediaType,
      entity.getGroupName,
      entity.getFileName,
      entity.getThumbnail,
      entity.getPictureDate,
      entity.getRegisterDate,
    );
  }
}
