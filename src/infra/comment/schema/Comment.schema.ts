import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Comment extends Document {
  @Prop()
  readonly userName: string;
  @Prop({ required: true })
  readonly galleryId: number;
  @Prop()
  readonly content: string;
  @Prop()
  readonly createdAt: Date;

  get getUserName() {
    return this.userName;
  }
  get getGalleryId() {
    return this.galleryId;
  }
  get getContent() {
    return this.content;
  }
  get getCreatedAt() {
    return this.createdAt;
  }
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
