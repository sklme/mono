import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

@Catch()
export class CatchAllExceptionFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: unknown, host: ArgumentsHost) {
    // const ctx = host.switchToHttp();
    // const response = ctx.getResponse<Response>();
    // response.sendFile('index.html', { root: 'public' });

    const httpAdapter = this.httpAdapterHost.httpAdapter;
    const ctx = host.switchToHttp();

    console.log(
      '开始exception filter...',
      httpAdapter.getRequestUrl(ctx.getRequest()),
    );

    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const responseBody = {
      statusCode: httpStatus,
      timestamp: new Date().toISOString(),
      path: httpAdapter.getRequestUrl(ctx.getRequest()),
    };

    // 上报错误

    console.log(
      '结束exception filter...',
      httpAdapter.getRequestUrl(ctx.getRequest()),
    );

    httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
  }
}
