import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get(':username')
  public searchByName(@Param('username') username: string): User {
    const userFounded = this.userService.searchByName(username);
    return userFounded;
  }

  @Post()
  public create(@Body() user: User): User {
    const createdUser = this.userService.create(user);
    return createdUser;
  }
}
