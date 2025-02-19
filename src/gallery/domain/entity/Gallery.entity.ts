import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Column, OneToMany } from 'typeorm/browser';
import { GalleryLike } from '../../../galleryLikes/domain/GalleryLikes.entity';

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
