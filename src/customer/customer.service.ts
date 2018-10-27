import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) { }
  async findAll(): Promise<Customer[]> {
    return await this.customerRepository.find();
  }

  async findAllByTenantId(tenantId: number): Promise<Customer[]> {
    return await this.customerRepository.findByIds([tenantId]);
  }

  async findOne(id: number): Promise<Customer[]> {
    return await this.customerRepository.findByIds([id]);
  }
  async remove(id: number): Promise<any> {
    return await this.customerRepository.delete(id);
  }
  async create(body): Promise<string> {
    const customer = new Customer();
    customer.name = body.name;
    customer.tenantId = body.tenantId;
    customer.password = body.password;
    customer.contactName = body.contactName;
    customer.contactEmail = body.contactEmail;
    customer.address = body.address;
    customer.domain = body.domain;
    customer.description = body.description;
    customer.createdTime = new Date().toISOString();
    customer.updatedTime = new Date().toISOString();
    return this.customerRepository.save(customer)
      .then(res => {
        return res;
      })
      .catch(err => {
        return err;
      });
  }
  async update(id, body): Promise<string> {
    const customer = new Customer();
    customer.id = id;
    if (body.name) {
      customer.name = body.name;
    }
    if (body.contactName) {
      customer.contactName = body.contactName;
    }
    if (body.contactEmail) {
      customer.contactEmail = body.contactEmail;
    }
    if (body.address) {
      customer.address = body.address;
    }
    if (body.domain) {
      customer.domain = body.domain;
    }
    if (body.description) {
      customer.description = body.description;
    }
    customer.updatedTime = new Date().toISOString();

    return this.customerRepository.update(id, customer)
      .then(res => {
        return res;
      })
      .catch(err => {
        return err;
      });
  }
}
