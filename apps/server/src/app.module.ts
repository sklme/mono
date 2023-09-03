import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from 'src/middleware/logger.middleware';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { CatchAllExceptionFilter } from 'src/filters/catch-all.filter';
import { TransformInterceptor } from 'src/interceptors/transform.interceptor';
import { ConfigModule } from '@nestjs/config';
import databaseConfig from 'src/config/database.config';
import tokenConfig from 'src/config/token.config';

@Module({
  imports: [
    // #region 配置
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig, tokenConfig],
    }),
    // #endregion 配置
  ],
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
