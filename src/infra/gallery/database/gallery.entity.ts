import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { GalleryLikesEntity } from '../../galleryLikes/database/galleryLikes.entity';

@Entity('gallery')
export class GalleryEntity {
  constructor(
    id: number,
    mediaType: string,
    groupName: string,
    fileName: string,
    thumbnail: string,
    pictureDate: string,
    registerDate: string,
  ) {
    this.id = id;
    this.mediaType = mediaType;
    this.groupName = groupName;
    this.fileName = fileName;
    this.thumbnail = thumbnail;
    this.pictureDate = pictureDate;
    this.registerDate = registerDate;
  }
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({ type: 'text', nullable: false, unique: false })
  readonly mediaType: string;

  @Column({ type: 'text', nullable: true, unique: false })
  readonly groupName: string;

  @Column({ type: 'text', nullable: false, unique: false })
  readonly fileName: string;

  @Column({ type: 'text', nullable: true, unique: false })
  readonly thumbnail: string;

  @Column({ type: 'date' })
  readonly pictureDate: string;

  @Column({ type: 'date' })
  readonly registerDate: string;

  @OneToMany(() => GalleryLikesEntity, (galleryLike) => galleryLike.gallery, {
    onDelete: 'CASCADE',
  })
  likes: GalleryLikesEntity[];

  get getId() {
    return this.id;
  }
  get getMediaType() {
    return this.mediaType;
  }
  get getGroupName() {
    return this.groupName;
  }
  get getFileName() {
    return this.fileName;
  }
  get getThumbnail() {
    return this.thumbnail;
  }
  get getPictureDate() {
    return this.pictureDate;
  }
  get getRegisterDate() {
    return this.registerDate;
  }
}
