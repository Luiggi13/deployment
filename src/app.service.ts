import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { status: boolean } {
    return { status: false };
  }
}
