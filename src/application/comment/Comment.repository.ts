import { Comment } from '../../domain/comment/Comment';

export interface CommentRepository {
  findAll(pageNum: number): Promise<Comment[]>;
}
