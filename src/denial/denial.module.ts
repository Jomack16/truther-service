import { Module } from '@nestjs/common';
import { DenialService } from './services/denial.service';
import { DenialController } from './controllers/denial.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Denial } from './entities/denial.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Denial])],
  providers: [DenialService],
  controllers: [DenialController],
})
export class DenialModule {}
