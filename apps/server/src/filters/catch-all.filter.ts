import { LogicException, HttpResponse } from '@iskl/shares/types';
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { LogService } from '~/modules/log/log.service';
import PrettyError from 'pretty-error';

const pe = new PrettyError();
pe.withoutColors();

@Catch()
export class CatchAllExceptionFilter implements ExceptionFilter {
  constructor(
    // private readonly httpAdapterHost: HttpAdapterHost,
    private readonly logService: LogService,
  ) {}

  log(message: string) {
    this.logService.error({
      message,
      label: 'ExceptionFilter',
    });
  }

  catch(exception: unknown, host: ArgumentsHost) {
    // const httpAdapter = this.httpAdapterHost.httpAdapter;
    const ctx = host.switchToHttp();
    const req = ctx.getRequest<Request>();
    const res = ctx.getResponse<Response>();

    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const responseBody: HttpResponse = {
      code: exception instanceof LogicException ? exception.code : httpStatus,
      data: {
        timestamp: new Date().toISOString(),
        path: req.path,
      },
      message:
        exception instanceof Error
          ? exception.message
          : 'Internal Server Error',
    };

    // 上报错误
    this.log(`错误上报: ${req.url}`);
    this.log(`${JSON.stringify(responseBody)}`);
    this.log(`错误信息: ${pe.render(exception)}`);

    // 返回给前端
    res.status(httpStatus).json(responseBody);
    // httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
  }
}
