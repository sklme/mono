import { Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { SimpleParseIntPipe } from 'src/pipes/parse-int.pipe';

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

  @Get('testPipe')
  testPipe(@Query('id', SimpleParseIntPipe) id: number) {
    //
    return {
      id,
    };
  }
}
