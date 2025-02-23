import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { GalleryLike } from '../../../../galleryLikes/infra/database/galleryLike.entity';

@Entity()
export class Gallery {
  @PrimaryGeneratedColumn()
  private id: number;

  private mediaType: string;

  private groupName: string;

  @Column({ type: 'date' })
  private pictureDate: string;

  @Column({ type: 'date' })
  private registerDate: string;

  @OneToMany(() => Gallery, (gallery) => gallery.likes, { onDelete: 'CASCADE' })
  likes: GalleryLike[];
}
