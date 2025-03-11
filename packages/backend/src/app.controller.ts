import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get('hello/*')
  // getHello(): any {
  //   // return this.appService.getHello();
  //   return "some";
  // }

  @Get('hello/date')
  getDate(): any {
    // return this.appService.getHello();
    return new Date().getTime();
  }
}
