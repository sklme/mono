import { Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { SimpleParseIntPipe } from 'src/pipes/parse-int.pipe';
import { Roles } from 'src/decorators/roles.decorator';
import { RolesGuard } from 'src/guards/roles.guard';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
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
    interface DatabaseConfig {
      host: string;
      port: number;
    }
    console.log(1212);
    console.log(1212);
    console.log(1212);
    console.log(this.configService);
    console.log(
      this.configService.get<DatabaseConfig>('database.host', { infer: true }),
    );
    console.log(this.configService.get('NODE_ENV'));
    console.log(process.env['database']);
    return {
      pass: true,
      msg: '你通过了验证',
    };
  }
}
