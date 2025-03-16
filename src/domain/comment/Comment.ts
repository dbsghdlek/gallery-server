import { Expose } from 'class-transformer';

export class Comment {
  @Expose()
  readonly userName: string;
  @Expose()
  readonly galleryId: number;
  @Expose()
  readonly content: string;
  @Expose()
  readonly createdAt: Date;

  get getUserName() {
    return this.userName;
  }
  get getGalleryId() {
    return this.galleryId;
  }
  get getContent() {
    return this.content;
  }
  get getCreatedAt() {
    return this.createdAt;
  }
}
