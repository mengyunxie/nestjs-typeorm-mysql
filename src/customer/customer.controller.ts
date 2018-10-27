import { Controller, Get, Post, Put, Delete, Body, Param, Header } from '@nestjs/common';
import { CustomerService } from './customer.service';

@Controller('api/v1/customers')
export class CustomerController {

  constructor(private readonly customerService: CustomerService) { }

  @Get()
  @Header('Access-Control-Allow-Origin', '*')
  findAll() {
    return this.customerService.findAll();
  }

  @Post()
  @Header('Access-Control-Allow-Origin', '*')
  @Header('Content-Type', 'application/json')
  create(@Body() body) {
    return this.customerService.create(body);
  }

  @Get(':id')
  @Header('Access-Control-Allow-Origin', '*')
  findOne(@Param('id') id) {
    return this.customerService.findOne(id);
  }

  @Get(':tenantId/customers')
  @Header('Access-Control-Allow-Origin', '*')
  find(@Param('tenantId') tenantId) {
    return this.customerService.findAllByTenantId(tenantId);
  }

  @Put(':id')
  @Header('Access-Control-Allow-Origin', '*')
  @Header('Content-Type', 'application/json')
  update(@Param('id') id, @Body() body) {
    return this.customerService.update(id, body);
  }

  @Delete(':id')
  @Header('Access-Control-Allow-Origin', '*')
  remove(@Param('id') id) {
    return this.customerService.remove(id);
  }

}
