import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('test')
  test() {
    return {
      test: 1,
    };
  }

  @Post('error')
  error() {
    throw new Error('test');
  }
}
