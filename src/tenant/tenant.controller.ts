import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TenantService } from './tenant.service';

@Controller('tenants')
export class TenantController {
  constructor(private readonly tenantService: TenantService) {}
  @Get()
  findAll() {
    return this.tenantService.findAll();
  }
  @Post()
  create(@Body() body) {
    return this.tenantService.create(body);
  }

  @Get(':tenantId')
  findOne(@Param('tenantId') tenantId) {
    return this.tenantService.findOne(tenantId);
  }

  @Put(':tenantId')
  update(@Param('tenantId') tenantId, @Body() body) {
    return this.tenantService.update(tenantId, body);
  }

  @Delete(':tenantId')
  remove(@Param('tenantId') tenantId) {
    return this.tenantService.remove(tenantId);
  }

}
