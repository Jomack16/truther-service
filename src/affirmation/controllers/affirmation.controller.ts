import { Controller, Get } from '@nestjs/common';
import { Affirmation } from '../entities/affirmation.entity';
import { AffirmationService } from '../services/affirmation.service';

@Controller('affirmation')
export class AffirmationController {
  constructor(private affirmationService: AffirmationService) {}

  @Get()
  async getAllAffirmations(): Promise<Affirmation[]> {
    return await this.affirmationService.readAll();
  }
}
