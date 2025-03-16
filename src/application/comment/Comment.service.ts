import { CommentRepository } from './Comment.repository';
import { Inject } from '@nestjs/common';

export class CommentService {
  constructor(
    @Inject('COMMENT_REPOSITORY')
    private readonly commentRepository: CommentRepository,
  ) {}

  findAll() {
    return this.commentRepository.findAll(1);
  }
}
