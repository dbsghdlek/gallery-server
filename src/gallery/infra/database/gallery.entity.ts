import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { GalleryLike } from '../../../galleryLikes/infra/database/galleryLike.entity';

@Entity('gallery')
export class GalleryEntity {
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
}
