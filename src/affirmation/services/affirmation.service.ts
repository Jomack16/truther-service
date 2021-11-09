import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Affirmation } from '../entities/affirmation.entity';

@Injectable()
export class AffirmationService {
  constructor(
    @InjectRepository(Affirmation)
    private affirmationRepository: Repository<Affirmation>,
  ) {}

  async create(affirmation: Affirmation): Promise<Affirmation> {
    return await this.affirmationRepository.create(affirmation);
  }

  async readAll(): Promise<Affirmation[]> {
    return await this.affirmationRepository.find();
  }

  async readOne(id: string): Promise<Affirmation> {
    return await this.affirmationRepository.findOne(id);
  }

  async update(id: string, affirmation: Affirmation): Promise<Affirmation> {
    if (!id) {
      throw new HttpException('UserId cannot be null', HttpStatus.BAD_REQUEST);
    }
    await this.affirmationRepository.findOneOrFail(id);
    await this.affirmationRepository.update(id, affirmation);
    return await this.affirmationRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.affirmationRepository.delete(id);
  }
}
