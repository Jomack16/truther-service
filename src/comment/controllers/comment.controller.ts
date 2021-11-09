import { Controller, Get } from '@nestjs/common';
import { CommentService } from '../services/comment.service';
import { Comment } from '../entities/comment.entity';

@Controller('comment')
export class CommentController {
  constructor(private commentService: CommentService) {}

  @Get()
  async getAllComments(): Promise<Comment[]> {
    return await this.commentService.readAll();
  }
}
