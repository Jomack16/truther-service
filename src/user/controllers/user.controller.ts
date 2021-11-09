import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { User, UserDto } from '../entities/user.entity';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getAllUsers(): Promise<User[]> {
    return await this.userService.readAll();
  }

  @Get('/:id')
  async getOneUser(@Param('id') id: string): Promise<User> {
    return await this.userService.readOne(id);
  }

  @Post()
  async createUser(@Body() user: UserDto): Promise<User> {
    return await this.userService.create(user);
  }

  @Patch('/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() user: UserDto,
  ): Promise<User> {
    return await this.userService.update(id, user);
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string): Promise<void> {
    return await this.userService.delete(id);
  }
}
