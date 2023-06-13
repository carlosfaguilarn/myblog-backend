import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Entry } from '../entities/entry.entity';
import { CreateEntryDto } from '../dtos/entry.dtos';

@Injectable()
export class EntriesService {
  constructor(@InjectRepository(Entry) private repository: Repository<Entry>) {}

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    const entry = this.repository.findOne({ where: { id: id } });
    if (!entry) {
      throw new NotFoundException(`Entry #${id} not found`);
    }
    return entry;
  }

  create(data: CreateEntryDto) {
    const newEntry = this.repository.create(data);
    return this.repository.save(newEntry);
  }
}
