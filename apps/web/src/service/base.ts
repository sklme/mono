import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';
// import HttpResponse from '@/shares/http/http';
import { HttpResponse } from '@iskl/shares/types';

/**
 * 通用的请求，包含
 * 1. 错误处理
 * 2. post和get
 */

export class BaseService {
  baseURL: string;

  axios: AxiosInstance;

  constructor(baseURL = '/api') {
    this.baseURL = baseURL;

    this.axios = axios.create({
      baseURL,
    });
  }

  get<T>(config: AxiosRequestConfig) {
    return this.axios.request<HttpResponse<T>>({
      method: 'GET',
      ...config,
    });
  }
}

export default BaseService;
