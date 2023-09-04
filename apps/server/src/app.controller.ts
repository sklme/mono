import { Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { SimpleParseIntPipe } from 'src/pipes/parse-int.pipe';
import { Roles } from 'src/decorators/roles.decorator';
import { RolesGuard } from 'src/guards/roles.guard';
import { ConfigService } from '@nestjs/config';
import { LogService } from 'src/modules/log/log.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
    private readonly logService: LogService,
  ) {}

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
    this.logService.logger.info('testGuard', {
      label: '我是最厉害的label',
    });
    this.logService.logger.error({
      message: 'testGuard',
      label: '123',
    });

    return {
      pass: true,
      msg: '你通过了验证',
    };
  }
}
