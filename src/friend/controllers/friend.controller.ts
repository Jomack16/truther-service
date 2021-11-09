import { Controller, Get } from '@nestjs/common';
import { Friend } from '../entities/friend.entity';
import { FriendService } from '../services/friend.service';

@Controller('friend')
export class FriendController {
  constructor(private friendService: FriendService) {}

  @Get()
  async getAllFriends(): Promise<Friend[]> {
    return await this.friendService.readAll();
  }
}
