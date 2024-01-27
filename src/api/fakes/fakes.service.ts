import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Fakes } from './fakes.entity';

@Injectable()
export class FakesService {
  constructor(
    @InjectRepository(Fakes)
    private fakesRepository: Repository<Fakes>,
  ) {}

  async findall(): Promise<Fakes[]> {
    return await this.fakesRepository.find();
  }

  async findOne(id: string): Promise<Fakes> {
    return await this.fakesRepository.findOne({ where: { id } });
  }

  async create(user: Fakes): Promise<Fakes> {
    const newUser = this.fakesRepository.create(user);
    return await this.fakesRepository.save(newUser);
  }

  async update(id: string, fake: Fakes): Promise<Fakes> {
    await this.fakesRepository.update(id, fake);
    return await this.fakesRepository.findOne({ where: { id } });
  }

  async delete(id: string): Promise<void> {
    await this.fakesRepository.delete(id);
  }
}
