import { CommentService } from '../../application/comment/Comment.service';
import { Controller, Get } from '@nestjs/common';

@Controller('comment')
export default class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get()
  test() {
    return this.commentService.findAll();
  }
}
