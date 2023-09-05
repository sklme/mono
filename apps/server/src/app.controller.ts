import { Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { Roles } from 'src/decorators/roles.decorator';
import { RolesGuard } from 'src/guards/roles.guard';
import { SimpleParseIntPipe } from 'src/pipes/parse-int.pipe';
import { AppService } from './app.service';
import { LogicException } from '@iskl/shares/types';

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

  @Get('testGuard')
  @Roles(['admin'])
  @UseGuards(RolesGuard)
  testGuard() {
    throw new LogicException(10001, '没有权限');

    return {
      pass: true,
      msg: '你通过了验证',
    };
  }
}
