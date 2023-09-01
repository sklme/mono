/**
 * @file 将返回的数据统一包装成 { code: 0, message: 'success', data: any } 的格式
 */
import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { HttpResponse, ErrCode } from '@iskl/shares/types';

export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    return next.handle().pipe(
      map<unknown, HttpResponse<unknown>>((data) => ({
        code: ErrCode.success,
        data,
        message: 'success',
      })),
      // TODO 针对不同错误类型，返回不同的错误码，如果是原生错误，就返回正常，否则返回HTTP错误
      // catchError((err) => throwError(() => new BadGatewayException())),
    );
  }
}
