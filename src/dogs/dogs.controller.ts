import { Controller, Get, Post, Body } from '@nestjs/common';
import { DogsService } from './dogs.service';

@Controller('dogs')
export class DogsController {
    constructor(private readonly dogsService: DogsService) {}
    @Get()
    findAll() {
      return this.dogsService.findAll();
    }
    @Post()
    create(@Body() body) {
      return this.dogsService.create(body);
    }
}
