import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Comment extends Document {
  @Prop()
  userName: string;
  @Prop()
  galleryId: number;
  @Prop()
  content: string;
  @Prop()
  createdAt: Date;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
