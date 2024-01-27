import { Injectable } from '@nestjs/common';
import { configApp } from './config/config.app';

@Injectable()
export class AppService {
  getHello(): { status: boolean } {
    console.log(configApp().postgres.host);
    return { status: false };
  }
}
