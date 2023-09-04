import { DynamicModule, Module } from '@nestjs/common';
import { LOG_MODULE_OPTIONS } from 'src/modules/log/constants';
import { LogService } from 'src/modules/log/log.service';
import { logModuleOptions } from 'src/modules/log/log.type';

@Module({})
export class LogModule {
  static forRoot(options?: logModuleOptions): DynamicModule {
    return {
      global: true,
      module: LogModule,
      providers: [
        LogService,
        {
          provide: LOG_MODULE_OPTIONS,
          useValue: options,
        },
      ],
      exports: [LogService],
    };
  }
}
