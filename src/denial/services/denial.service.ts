import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Denial } from '../entities/denial.entity';

@Injectable()
export class DenialService {
  constructor(
    @InjectRepository(Denial)
    private denialRepository: Repository<Denial>,
  ) {}

  async create(denial: Denial): Promise<Denial> {
    return await this.denialRepository.create(denial);
  }

  async readAll(): Promise<Denial[]> {
    return await this.denialRepository.find();
  }

  async readOne(id: string): Promise<Denial> {
    return await this.denialRepository.findOne(id);
  }

  async update(id: string, denial: Denial): Promise<Denial> {
    if (!id) {
      throw new HttpException(
        'DenialId cannot be null',
        HttpStatus.BAD_REQUEST,
      );
    }
    await this.denialRepository.findOneOrFail(id);
    await this.denialRepository.update(id, denial);
    return await this.denialRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.denialRepository.delete(id);
  }
}
