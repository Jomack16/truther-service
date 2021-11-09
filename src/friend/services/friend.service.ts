import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Friend } from '../entities/friend.entity';

@Injectable()
export class FriendService {
  constructor(
    @InjectRepository(Friend)
    private friendRepository: Repository<Friend>,
  ) {}

  async create(friend: Friend): Promise<Friend> {
    return await this.friendRepository.create(friend);
  }

  async readAll(): Promise<Friend[]> {
    return await this.friendRepository.find();
  }

  async readOne(id: string): Promise<Friend> {
    return await this.friendRepository.findOne(id);
  }

  async update(id: string, friend: Friend): Promise<Friend> {
    if (!id) {
      throw new HttpException('UserId cannot be null', HttpStatus.BAD_REQUEST);
    }
    await this.friendRepository.findOneOrFail(id);
    await this.friendRepository.update(id, friend);
    return await this.friendRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.friendRepository.delete(id);
  }
}
