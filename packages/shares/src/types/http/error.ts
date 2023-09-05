/**
 * @file 网络请求错误的定义
 */

export enum ErrCode {
  commonErrCode = -1,
  success = 0,
  // 没有权限
  noAuth = 10001,
  // 参数错误
  paramErr = 10002,
}

export class LogicException extends Error {
  name = 'LogicException';

  constructor(
    public readonly code: ErrCode,
    public readonly message: string,
    public readonly data?: Record<string, any>,
  ) {
    super(message);
  }
}
