import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { GalleryLike } from '../../galleryLikes/domain/GalleryLikes.entity';
import { OneToMany } from 'typeorm/browser';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  private id: number;

  private password: string;

  private name: string;

  private createdAt: Date;

  @OneToMany(() => GalleryLike, (like) => like.user, { onDelete: 'CASCADE' })
  likes: GalleryLike[];
}
