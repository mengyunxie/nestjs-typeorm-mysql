import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }
  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(userId: number): Promise<User[]> {
    return await this.userRepository.findByIds([userId]);
  }
  async remove(userId: number): Promise<any> {
    return await this.userRepository.delete(userId);
  }
  async create(body): Promise<string> {
    const user = new User();
    user.userId = body.userId;
    user.username = body.username;
    user.email = body.email;
    user.phone = body.phone;
    user.tenantId = body.tenantId;
    user.customerId = body.customerId;
    user.subjectLabel = body.subjectLabel;
    user.enable = body.enable;
    user.role = body.role;

    return this.userRepository.save(user)
      .then(res => {
        return 'create user ...done';
      })
      .catch(err => {
        return err;
      });
  }
  async update(userId, body): Promise<string> {
    const user = new User();
    user.userId = userId;
    if (body.username) {
      user.username = body.username;
    }
    if (body.email) {
      user.email = body.email;
    }
    if (body.phone) {
      user.phone = body.phone;
    }
    if (body.tenantId) {
      user.tenantId = body.tenantId;
    }
    if (body.customerId) {
      user.customerId = body.customerId;
    }
    if (body.subjectLabel) {
      user.subjectLabel = body.subjectLabel;
    }
    if (body.enable) {
      user.enable = body.enable;
    }
    if (body.role) {
      user.role = body.role;
    }

    return this.userRepository.update(userId, user)
      .then(res => {
        return 'update user ...done';
      })
      .catch(err => {
        return err;
      });
  }
}
