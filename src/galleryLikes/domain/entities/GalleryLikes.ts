export default class GalleryLikes {
  constructor(galleryId: number, userId: number) {
    this.galleryId = galleryId;
    this.userId = userId;
  }
  galleryId: number;
  userId: number;
}
