import { Controller, Get } from '@nestjs/common';
import { Denial } from '../entities/denial.entity';
import { DenialService } from '../services/denial.service';

@Controller('denial')
export class DenialController {
  constructor(private denialService: DenialService) {}

  @Get()
  async getAllDenials(): Promise<Denial[]> {
    return await this.denialService.readAll();
  }
}
