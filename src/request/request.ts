import axios, { AxiosInstance } from 'axios'
import axiosRetry from 'axios-retry'
// 创建axios实例
const service: AxiosInstance = axios.create({
  withCredentials: false, //是否携带cookie
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5000
})

// request请求拦截
service.interceptors.request.use((config: any) => {
  return config
}, (error: any) => {
  return Promise.reject(error)
})

// response响应拦截
// service.interceptors.response.use()

let flag: number = 0;
axiosRetry(service, {
  retries: 3, // 设置自动发送请求次数
  retryDelay: (retryCount) => {
    return retryCount * 1000; // 重复请求延迟
  },
  shouldResetTimeout: true, //  重置超时时间
  retryCondition: (error: any) => {
    flag = flag + 1;
    if (flag == 3) {
      flag = 0;
    }
    if (error.message.includes('timeout')) {
      //true为打开自动发送请求，false为关闭自动发送请求
      return true;
    } else {
      return false;
    }
  }
});

export default service;
