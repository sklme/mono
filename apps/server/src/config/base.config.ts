import { isDev } from 'src/utils/env';

const devConfig = {
  // #region 日志路径
  logPath: '~/logs/info',
  errLogPath: '~/logs/err',
  // #endregion 日志路径
};

const prodConfig = {
  // #region 日志路径
  logPath: '/var/logs/info',
  errLogPath: '/var/logs/err',
  // #endregion 日志路径
};

// export default registerAs('base', () => (isDev ? devConfig : prodConfig));
export default () => (isDev ? devConfig : prodConfig);
