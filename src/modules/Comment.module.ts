import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentRepositoryImpl } from '../infra/comment/CommentRepositoryImpl';
import { CommentService } from '../application/comment/Comment.service';
import { CommentSchema } from '../infra/comment/schema/Comment.schema';
import { Comment } from '../infra/comment/schema/Comment.schema';
import CommentController from '../interface/comment/Comment.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
  ],
  providers: [
    CommentService,
    {
      provide: 'COMMENT_REPOSITORY',
      useClass: CommentRepositoryImpl,
    },
  ],
  controllers: [CommentController],
})
export class CommentModule {}
