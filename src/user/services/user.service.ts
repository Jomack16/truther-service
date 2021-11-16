import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User, UserDto } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(user: UserDto): Promise<User> {
    const instance = this.userRepository.create(user);
    return await this.userRepository.save(instance);
  }

  async readAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async readOne(id: string): Promise<User> {
    return await this.userRepository.findOne(id);
  }

  async findUsername(username: string): Promise<User[]> {
    return await this.userRepository.find({
      where: { username: username },
    });
  }

  async update(id: string, user: UserDto): Promise<User> {
    if (!id) {
      throw new HttpException('UserId cannot be null', HttpStatus.BAD_REQUEST);
    }
    await this.userRepository.update(id, user);
    return await this.userRepository.findOne(id);
  }

  async delete(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}
