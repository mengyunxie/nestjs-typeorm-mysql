import { Controller, Get, Post, Put, Delete, Body, Param, Header } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  @Header('Access-Control-Allow-Origin', '*')
  findAll() {
    return this.userService.findAll();
  }
  @Post()
  @Header('Access-Control-Allow-Origin', '*')
  create(@Body() body) {
    return this.userService.create(body);
  }

  @Get(':userId')
  @Header('Access-Control-Allow-Origin', '*')
  findOne(@Param('userId') userId) {
    return this.userService.findOne(userId);
  }

  @Put(':userId')
  @Header('Access-Control-Allow-Origin', '*')
  update(@Param('userId') userId, @Body() body) {
    return this.userService.update(userId, body);
  }

  @Delete(':userId')
  @Header('Access-Control-Allow-Origin', '*')
  remove(@Param('userId') userId) {
    return this.userService.remove(userId);
  }

}