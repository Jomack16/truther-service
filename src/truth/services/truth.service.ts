import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Truth as Truth } from '../entities/truth.entity';

@Injectable()
export class TruthService {
  constructor(
    @InjectRepository(Truth)
    private truthRepository: Repository<Truth>,
  ) {}

  async create(truth: Truth): Promise<Truth> {
    return await this.truthRepository.create(truth);
  }

  async readAll(): Promise<Truth[]> {
    return await this.truthRepository.find();
  }

  async readOne(id: string): Promise<Truth> {
    return await this.truthRepository.findOne(id);
  }

  async update(id: string, truth: Truth): Promise<Truth> {
    if (!id) {
      throw new HttpException('UserId cannot be null', HttpStatus.BAD_REQUEST);
    }
    await this.truthRepository.findOneOrFail(id);
    await this.truthRepository.update(id, truth);
    return await this.truthRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.truthRepository.delete(id);
  }
}
