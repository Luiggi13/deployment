import { Injectable } from '@nestjs/common';
import { Health, HealthStatus } from '@/types';

@Injectable()
export class AppService {
  getAvailability(): Health {
    return { status: HealthStatus.AVAILABLE };
  }
}
