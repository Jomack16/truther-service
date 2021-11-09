import { Module } from '@nestjs/common';
import { FriendService } from './services/friend.service';
import { FriendController } from './controllers/friend.controller';
import { Friend } from './entities/friend.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Friend])],
  providers: [FriendService],
  controllers: [FriendController],
})
export class FriendModule {}
