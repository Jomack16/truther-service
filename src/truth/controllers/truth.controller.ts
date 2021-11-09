import { Controller, Get } from '@nestjs/common';
import { Truth } from '../entities/truth.entity';
import { TruthService } from '../services/truth.service';

@Controller('truth')
export class TruthController {
  constructor(private truthService: TruthService) {}

  @Get()
  async getAllTruths(): Promise<Truth[]> {
    return await this.truthService.readAll();
  }
}
