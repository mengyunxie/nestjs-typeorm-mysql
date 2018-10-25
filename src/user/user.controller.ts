import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  findAll() {
    return this.userService.findAll();
  }
  @Post()
  create(@Body() body) {
    return this.userService.create(body);
  }

  @Get(':userId')
  findOne(@Param('userId') userId) {
    return this.userService.findOne(userId);
  }

  @Put(':userId')
  update(@Param('userId') userId, @Body() body) {
    return this.userService.update(userId, body);
  }

  @Delete(':userId')
  remove(@Param('userId') userId) {
    return this.userService.remove(userId);
  }

}