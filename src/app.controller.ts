import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Health } from '@/types';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Alive')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Service status' })
  getStatus(): Health {
    return this.appService.getAvailability();
  }
}
