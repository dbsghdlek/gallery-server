import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { GalleryLike } from '../../../galleryLikes/infra/database/galleryLike.entity';

@Entity('gallery')
export class GalleryEntity {
  constructor(
    id: number,
    mediaType: string,
    groupName: string,
    pictureDate: string,
    registerDate: string,
  ) {
    this.id = id;
    this.mediaType = mediaType;
    this.groupName = groupName;
    this.pictureDate = pictureDate;
    this.registerDate = registerDate;
  }
  @PrimaryGeneratedColumn()
  private id: number;

  @Column({ type: 'text', nullable: false, unique: false })
  private mediaType: string;

  @Column({ type: 'text', nullable: true, unique: false })
  private groupName: string;

  @Column({ type: 'date' })
  private pictureDate: string;

  @Column({ type: 'date' })
  private registerDate: string;

  @OneToMany(() => GalleryEntity, (gallery) => gallery.likes, {
    onDelete: 'CASCADE',
  })
  likes: GalleryLike[];

  get getId() {
    return this.id;
  }
  get getMediaType() {
    return this.mediaType;
  }
  get getGroupName() {
    return this.groupName;
  }
  get getPictureDate() {
    return this.pictureDate;
  }
  get getRegisterDate() {
    return this.registerDate;
  }
}
