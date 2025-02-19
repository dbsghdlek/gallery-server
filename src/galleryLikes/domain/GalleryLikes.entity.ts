import { User } from '../../users/domain/User.entity';
import { Gallery } from '../../gallery/infra/database/entities/Gallery.entity';
import { JoinColumn, PrimaryColumn } from 'typeorm';
import { Column, ManyToOne } from 'typeorm/browser';

export class GalleryLike {
  @PrimaryColumn()
  userId: number;

  @PrimaryColumn()
  galleryId: number;

  @ManyToOne(() => User, (user) => user.likes, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => Gallery, (gallery) => gallery.likes, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'galleryId' })
  gallery: Gallery;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
