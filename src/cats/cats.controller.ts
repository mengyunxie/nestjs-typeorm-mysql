import { Controller, Get, Req, Post, Header, Param, Body, Res, HttpStatus } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interface/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  // @Post()
  // @Header('Cache-Control', 'none')
  // create(){
  //   return 'This action adds a new cat!';
  // }

  // @Post()
  // async create(@Body() createCatDto: CreateCatDto){
  //   return 'This action adds a new cat!';
  // }

  // @Get(':id')
  // findOne(@Param('id') id) {
  //   console.log(id);
  //   return `This action returns a #${id} cats!`;
  // }

  // @Get()
  // findAll(@Req() request) {
  //   return 'This action returns all cats!';
  // }

  // @Get()
  // findAll(): Observable<any[]>{
  //   return of([]);
  // }

  // @Post()
  // create(@Res() res){
  //   res.status(HttpStatus.CREATED).send();
  // }
  // @Get()
  // findAll(@Res() res){
  //   res.status(HttpStatus.OK).json([]);
  // }

  // @Post()
  // async create(@Body() createCatDto: CreateCatDto) {
  //   this.catsService.create(createCatDto);
  // }

  // @Get()
  // async findAll(): Promise<Cat[]> {
  //   return this.catsService.findAll();
  // }
  @Get()
  getCat() {
    return this.catsService.getCat();
  }

  @Post()
  createCat(@Body() body) {
    return this.catsService.createCat(body);
  }
}