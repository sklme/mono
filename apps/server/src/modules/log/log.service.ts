import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { LOG_MODULE_OPTIONS } from 'src/modules/log/constants';
import { logModuleOptions } from 'src/modules/log/log.type';
import { isDev } from 'src/utils/env';
import {
  LeveledLogMethod,
  LogMethod,
  Logger,
  createLogger,
  format,
  transports,
} from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

// 扩展
dayjs.extend(utc);
dayjs.extend(timezone);

// 日志格式
const logFormat = format.printf(({ level, message, label, timestamp }) => {
  const ts = dayjs
    .utc(timestamp)
    .tz('Asia/Shanghai')
    .format('YYYY-MM-DD HH:mm:ss.SSS');

  return `${ts} [${label || 'app'}] ${level}: ${message}`;
});

// 通用日志记录参数
const dailyRotateFileTransportParams = {
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
};

@Injectable()
export class LogService {
  logger: Logger;

  log: LogMethod;
  error: LeveledLogMethod;
  warn: LeveledLogMethod;
  info: LeveledLogMethod;
  debug: LeveledLogMethod;
  http: LeveledLogMethod;
  verbose: LeveledLogMethod;
  silly: LeveledLogMethod;

  constructor(
    private readonly configService: ConfigService,
    @Inject(LOG_MODULE_OPTIONS)
    private readonly options: logModuleOptions | undefined,
  ) {
    const logPath = this.configService.get('logPath');
    const errLogPath = this.configService.get('errLogPath');

    const _options: logModuleOptions = {
      logPath,
      errLogPath,
      toUTC8: true,
      ...this.options,
    };

    this.logger = createLogger({
      level: 'info',
      format: format.combine(format.timestamp(), logFormat),
      transports: [
        new DailyRotateFile({
          filename: `${_options.logPath}/%DATE%.log`,
          ...dailyRotateFileTransportParams,
        }),
        new DailyRotateFile({
          level: 'error',
          filename: `${_options.errLogPath}/%DATE%.error.log`,
          ...dailyRotateFileTransportParams,
        }),
      ],
    });

    // 在开发环境，也把日志输出到控制台
    if (isDev) {
      this.logger.add(new transports.Console());
    }

    // TODO 使用Proxy优化结构
    this.log = this.logger.log.bind(this.logger);

    this.error = this.logger.error.bind(this.logger);
    this.warn = this.logger.warn.bind(this.logger);
    this.info = this.logger.info.bind(this.logger);
    this.http = this.logger.http.bind(this.logger);
    this.verbose = this.logger.verbose.bind(this.logger);
    this.debug = this.logger.debug.bind(this.logger);
    this.silly = this.logger.silly.bind(this.logger);

    // 代理所有的this.logger.xxx方法
    // const logger = this.logger;
    // this.logger = new Proxy(this.logger, {
    //   get(target, propKey, receiver) {
    //     const prop = Reflect.get(target, propKey, receiver);
    //     if (typeof prop === 'function') {
    //       return prop.bind(logger);
    //     }
    //     return prop;
    //   },
    // });
  }
}
