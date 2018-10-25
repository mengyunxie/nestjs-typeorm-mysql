import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tenant } from './tenant.entity';

@Injectable()
export class TenantService {
  constructor(
    @InjectRepository(Tenant)
    private readonly tenantRepository: Repository<Tenant>,
  ) { }
  async findAll(): Promise<Tenant[]> {
    return await this.tenantRepository.find();
  }

  async findOne(tenantId: number): Promise<Tenant[]> {
    return await this.tenantRepository.findByIds([tenantId]);
  }
  async remove(tenantId: number): Promise<any> {
    return await this.tenantRepository.delete(tenantId);
  }
  async create(body): Promise<string> {
    const tenant = new Tenant();
    tenant.name = body.name;
    tenant.tenantId = body.tenantId;
    tenant.contactName = body.contactName;
    tenant.contactEmail = body.contactEmail;
    tenant.address = body.address;
    tenant.domain = body.domain;
    tenant.description = body.description;

    return this.tenantRepository.save(tenant)
      .then(res => {
        return 'create tenant ...done';
      })
      .catch(err => {
        return err;
      });
  }
  async update(tenantId, body): Promise<string> {
    const tenant = new Tenant();
    tenant.tenantId = tenantId;
    if (body.name) {
      tenant.name = body.name;
    }
    if (body.contactName) {
      tenant.contactName = body.contactName;
    }
    if (body.contactEmail) {
      tenant.contactEmail = body.contactEmail;
    }
    if (body.address) {
      tenant.address = body.address;
    }
    if (body.domain) {
      tenant.domain = body.domain;
    }
    if (body.description) {
      tenant.description = body.description;
    }

    return this.tenantRepository.update(tenantId, tenant)
      .then(res => {
        return 'update tenant ...done';
      })
      .catch(err => {
        return err;
      });
  }
}
