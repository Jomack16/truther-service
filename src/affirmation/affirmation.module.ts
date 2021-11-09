import { Module } from '@nestjs/common';
import { AffirmationService } from './services/affirmation.service';
import { AffirmationController } from './controllers/affirmation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Affirmation } from './entities/affirmation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Affirmation])],
  providers: [AffirmationService],
  controllers: [AffirmationController],
})
export class AffirmationModule {}
