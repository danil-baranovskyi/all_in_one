import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { some: string } {
    return { some: 'uuaaa' };
  }
}
