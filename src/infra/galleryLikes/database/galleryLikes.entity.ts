import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { GalleryEntity } from '../../gallery/database/gallery.entity';
import { UserEntity } from '../../users/database/user.entity';

@Entity('galleryLikes')
export class GalleryLikesEntity {
  @PrimaryColumn()
  userId: number;

  @PrimaryColumn()
  galleryId: number;

  @ManyToOne(() => UserEntity, (user) => user.likes, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: UserEntity;

  @ManyToOne(() => GalleryEntity, (gallery) => gallery.likes, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'galleryId' })
  gallery: GalleryEntity;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
