import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from '../entities/comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
  ) {}

  async create(comment: Comment): Promise<Comment> {
    return await this.commentRepository.create(comment);
  }

  async readAll(): Promise<Comment[]> {
    return await this.commentRepository.find();
  }

  async readOne(id: string): Promise<Comment> {
    return await this.commentRepository.findOne(id);
  }

  async update(id: string, comment: Comment): Promise<Comment> {
    if (!id) {
      throw new HttpException(
        'CommentId cannot be null',
        HttpStatus.BAD_REQUEST,
      );
    }
    await this.commentRepository.findOneOrFail(id);
    await this.commentRepository.update(id, comment);
    return await this.commentRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.commentRepository.delete(id);
  }
}
