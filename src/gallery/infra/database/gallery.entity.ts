import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { GalleryLikesEntity } from '../../../galleryLikes/infra/database/galleryLikes.entity';

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
  private readonly id: number;

  @Column({ type: 'text', nullable: false, unique: false })
  private readonly mediaType: string;

  @Column({ type: 'text', nullable: true, unique: false })
  private readonly groupName: string;

  @Column({ type: 'date' })
  private readonly pictureDate: string;

  @Column({ type: 'date' })
  private readonly registerDate: string;

  @OneToMany(() => GalleryEntity, (gallery) => gallery.likes, {
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
  get getPictureDate() {
    return this.pictureDate;
  }
  get getRegisterDate() {
    return this.registerDate;
  }
}
