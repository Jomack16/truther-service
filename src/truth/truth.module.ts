import { Module } from '@nestjs/common';
import { TruthService } from './services/truth.service';
import { TruthController } from './controllers/truth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Truth } from './entities/truth.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Truth])],
  providers: [TruthService],
  controllers: [TruthController],
})
export class TruthModule {}
