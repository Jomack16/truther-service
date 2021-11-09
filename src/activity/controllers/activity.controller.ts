import { Controller, Get } from '@nestjs/common';
import { Activity } from '../entities/activity.entity';
import { ActivityService } from '../services/activity.service';

@Controller('activity')
export class ActivityController {
  constructor(private activityService: ActivityService) {}

  @Get()
  async getAllActivities(): Promise<Activity[]> {
    return await this.activityService.readAll();
  }
}
