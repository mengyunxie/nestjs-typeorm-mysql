import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dogs } from './dogs.entity';

@Injectable()
export class DogsService {
    constructor(
        @InjectRepository(Dogs)
        private readonly dogsRepository: Repository<Dogs>,
      ) {}
      async findAll(): Promise<Dogs[]> {
        return await this.dogsRepository.find();
      }
      async create(body): Promise<string> {
        const dogs = new Dogs();
        dogs.name = body.name;
        dogs.id = body.id;

        return this.dogsRepository.save(dogs)
            .then(res => {
                return 'create dogs ...done';
            })
            .catch(err => {
                return err;
            });
    }
}
