import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Activity } from '../entities/activity.entity';

@Injectable()
export class ActivityService {
  constructor(
    @InjectRepository(Activity)
    private activityRepository: Repository<Activity>,
  ) {}

  async create(activity: Activity): Promise<Activity> {
    return await this.activityRepository.create(activity);
  }

  async readAll(): Promise<Activity[]> {
    return await this.activityRepository.find();
  }

  async readOne(id: string): Promise<Activity> {
    return await this.activityRepository.findOne(id);
  }

  async update(id: string, activity: Activity): Promise<Activity> {
    if (!id) {
      throw new HttpException(
        'ActivityId cannot be null',
        HttpStatus.BAD_REQUEST,
      );
    }
    await this.activityRepository.findOneOrFail(id);
    await this.activityRepository.update(id, activity);
    return await this.activityRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.activityRepository.delete(id);
  }
}
