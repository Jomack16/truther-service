import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { UserService } from '../../user/services/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(
    usernameIn: string,
    passwordIn: string,
  ): Promise<{ username: string; firstName: string; lastName: string }> {
    const userArray = await this.userService.findUsername(usernameIn);

    if (!userArray.length) return null;

    const [{ password, username, firstName, lastName }] = userArray;
    const isMatch = await bcrypt.compare(passwordIn, password);

    if (!isMatch) return null;

    return {
      username,
      firstName,
      lastName,
    };
  }
}
