import { Controller, Get, Post, Body, Header } from '@nestjs/common';
import { DogsService } from './dogs.service';

@Controller('dogs')
export class DogsController {
    constructor(private readonly dogsService: DogsService) {}
    @Get()
    @Header('Access-Control-Allow-Origin', '*')
    findAll() {
      return this.dogsService.findAll();
    }
    @Post()
    @Header('Access-Control-Allow-Origin', '*')
    create(@Body() body) {
      return this.dogsService.create(body);
    }
}
