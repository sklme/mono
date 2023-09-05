/**
 * @file 网络请求的一些定义
 *
 * 包括请求参数，回包和错误码等错误
 */

import { ErrCode } from './error';

export interface HttpResponse<T = Record<string, any>> {
  code: ErrCode;
  message: string;
  data: T;
}

export interface BaseHttpRequest {
  token?: string;
  userName?: string;
}

// export interface HttpRequest<T> {
//   base: BaseHttpRequest;
// }
