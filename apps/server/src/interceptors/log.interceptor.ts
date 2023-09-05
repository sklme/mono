import { HttpResponse } from '@iskl/shares/types';
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Request } from 'express';
import { tap } from 'rxjs';
import { LogService } from 'src/modules/log/log.service';

@Injectable()
export class LogInterceptor
  implements NestInterceptor<HttpResponse<unknown>, HttpResponse<unknown>>
{
  constructor(private readonly logService: LogService) {}

  log(message: string) {
    this.logService.info({
      message,
      label: 'HTTP',
    });
  }

  intercept(
    context: ExecutionContext,
    next: CallHandler<HttpResponse<Record<string, any>>>,
  ) {
    const req = context.switchToHttp().getRequest<Request>();
    console.log('开始log interceptor...');

    const hadler = context.getHandler();
    const belongClass = context.getClass();

    this.log(`请求开始: ${req.url} ${belongClass.name}.${hadler.name}`);
    this.log(`请求参数: ${JSON.stringify(req.query)}`);
    this.log(`请求体: ${JSON.stringify(req.body)}`);
    const ts = Date.now();

    return next.handle().pipe(
      tap((data) => {
        this.log(
          `请求结束: ${req.url} ${belongClass.name}.${hadler.name} ${
            Date.now() - ts
          }ms`,
        );
        this.log(`响应数据: ${JSON.stringify(data)}`);
      }),
    );
  }
}
