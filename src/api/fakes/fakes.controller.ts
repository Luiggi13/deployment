import { FakesService } from './fakes.service';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseFilters,
} from '@nestjs/common';
import { Fakes } from './fakes.entity';
import { ApiTags } from '@nestjs/swagger';
import { SkipThrottle, Throttle } from '@nestjs/throttler';
import { RateLimitExceptionFilter } from '../../core/filters/throttler.filter';

@ApiTags('Fakes')
@Controller('fakes')
export class FakesController {
  constructor(private readonly fakesService: FakesService) {}

  @Get()
  @Throttle({ default: { limit: 10, ttl: 6000 } })
  @UseFilters(new RateLimitExceptionFilter())
  async findAll(): Promise<Fakes[]> {
    return await this.fakesService.findall();
  }

  @Get(':id')
  @SkipThrottle()
  async findOne(@Param('id') id: string): Promise<Fakes> {
    const user = await this.fakesService.findOne(id);
    if (!user) {
      throw new Error('User not found');
    } else {
      return user;
    }
  }

  @Post()
  @Throttle({ default: { limit: 5, ttl: 3000 } })
  @UseFilters(new RateLimitExceptionFilter())
  async create(@Body() user: Fakes): Promise<Fakes> {
    return await this.fakesService.create(user);
  }

  @Put(':id')
  @Throttle({ default: { limit: 5, ttl: 3000 } })
  @UseFilters(new RateLimitExceptionFilter())
  async update(@Param('id') id: string, @Body() user: Fakes): Promise<Fakes> {
    return this.fakesService.update(id, user);
  }

  @Delete(':id')
  @Throttle({ default: { limit: 5, ttl: 3000 } })
  @UseFilters(new RateLimitExceptionFilter())
  async delete(@Param('id') id: string): Promise<void> {
    const user = await this.fakesService.findOne(id);
    if (!user) {
      throw new Error('User not found');
    }
    return this.fakesService.delete(id);
  }
}
