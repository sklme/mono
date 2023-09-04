import { isDev } from 'src/utils/env';
import { homedir } from 'node:os';

const appName = 'testApp';
const devConfig = {
  // #region 日志路径
  appName,
  logPath: `${homedir()}/logs/${appName}/info`,
  errLogPath: `${homedir()}/logs/${appName}/err`,
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
