import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

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
    return this.axios.request<T>({
      method: 'GET',
      ...config,
    });
  }
}

export default BaseService;
