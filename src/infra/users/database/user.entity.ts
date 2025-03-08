import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { GalleryLikesEntity } from '../../galleryLikes/database/galleryLikes.entity';

@Entity('user')
export class UserEntity {
  constructor(
    id: number,
    loginId: string,
    password: string,
    name: string,
    createdAt: Date,
  ) {
    this.id = id;
    this.loginId = loginId;
    this.password = password;
    this.name = name;
    this.createdAt = createdAt;
  }
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({ type: 'text' })
  readonly loginId: string;

  @Column()
  readonly password: string;

  @Column()
  readonly name: string;

  @Column()
  readonly createdAt: Date;

  @OneToMany(() => UserEntity, (user) => user.likes, { onDelete: 'CASCADE' })
  likes: GalleryLikesEntity[];

  get getId() {
    return this.id;
  }
  get getLoginId() {
    return this.loginId;
  }
  get getPassword() {
    return this.password;
  }
  get getName() {
    return this.name;
  }
  get getCreatedAt() {
    return this.createdAt;
  }
}
