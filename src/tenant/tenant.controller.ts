import { Controller, Get, Post, Put, Delete, Body, Param, Header } from '@nestjs/common';
import { TenantService } from './tenant.service';

@Controller('api/v1/tenants')
export class TenantController {

  constructor(private readonly tenantService: TenantService) { }

  @Get()
  @Header('Access-Control-Allow-Origin', '*')
  findAll() {
    return this.tenantService.findAll();
  }

  @Post()
  @Header('Access-Control-Allow-Origin', '*')
  @Header('Content-Type', 'application/json')
  create(@Body() body) {
    return this.tenantService.create(body);
  }

  @Get(':tenantId')
  @Header('Access-Control-Allow-Origin', '*')
  findOne(@Param('tenantId') tenantId) {
    return this.tenantService.findOne(tenantId);
  }

  @Put(':tenantId')
  @Header('Access-Control-Allow-Origin', '*')
  @Header('Content-Type', 'application/json')
  update(@Param('tenantId') tenantId, @Body() body) {
    return this.tenantService.update(tenantId, body);
  }

  @Delete(':tenantId')
  @Header('Access-Control-Allow-Origin', '*')
  remove(@Param('tenantId') tenantId) {
    return this.tenantService.remove(tenantId);
  }

}
