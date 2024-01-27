import { Injectable } from '@nestjs/common';
@Injectable()
export class AppService {
  getHello(): { status: string } {
    return { status: 'Subido desde pr de main' };
  }
}
