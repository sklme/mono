/**
 * @file 网络请求的一些定义
 *
 * 包括请求参数，回包和错误码等错误
 */

export interface HttpResponse<T> {
  errCode: number;
  errMsg: string;
  data: T;
}

export interface BaseHttpRequest {
  token?: string;
  userName?: string;
}

// export interface HttpRequest<T> {
//   base: BaseHttpRequest;
// }