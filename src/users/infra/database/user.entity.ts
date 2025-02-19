import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { GalleryLike } from '../../../galleryLikes/infra/database/galleryLike.entity';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  private id: number;

  @Column()
  private password: string;

  @Column()
  private name: string;

  @Column()
  private createdAt: Date;

  @OneToMany(() => UserEntity, (user) => user.likes, { onDelete: 'CASCADE' })
  likes: GalleryLike[];
}
