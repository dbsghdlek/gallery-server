import { CommentRepository } from '../../application/comment/Comment.repository';
import { InjectModel } from '@nestjs/mongoose';
import { Comment as CommentSchema } from './schema/Comment.schema';
import { Comment } from '../../domain/comment/Comment';
import { Model } from 'mongoose';
import { plainToClass } from 'class-transformer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentRepositoryImpl implements CommentRepository {
  constructor(
    @InjectModel(CommentSchema.name) private commentModel: Model<CommentSchema>,
  ) {}
  async findAll(pageNum: number) {
    const commentList = await this.commentModel
      .find()
      .sort({ createdAt: -1 })
      .skip(10 * (pageNum - 1))
      .limit(10)
      .exec();

    return commentList.map((comment) => {
      return plainToClass(Comment, comment);
    });
  }
}
