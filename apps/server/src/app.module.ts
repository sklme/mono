import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from 'src/middleware/logger.middleware';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { CatchAllExceptionFilter } from 'src/filters/catch-all.filter';
import { TransformInterceptor } from 'src/interceptors/transform.interceptor';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    // #region 全局操作
    {
      provide: APP_FILTER,
      useClass: CatchAllExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
    // #endregion 全局操作

    AppService,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('/*');
  }
}
