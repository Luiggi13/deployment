import { Injectable } from '@nestjs/common';
import { configApp } from './config/config.app';
@Injectable()
export class AppService {
  getHello(): { status: string } {
    return { status: configApp().version };
  }
}
