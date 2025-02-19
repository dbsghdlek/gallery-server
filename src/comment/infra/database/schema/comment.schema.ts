import { Schema } from '@nestjs/mongoose';

@Schema()
export class Comment {
  private userId: number;
  private galleryId: number;
  private commentId: number;
  private comment: string;
  private likeUsers: string[];
}
