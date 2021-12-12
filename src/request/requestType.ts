// import { AxiosRequestConfig } from 'axios';
// import service from './request';
// export interface BaseRules<T> {
//   [x: string]: any;
//   code: number | string;
//   data: T;
//   msg: string;
// }

// const request = <T>(config: AxiosRequestConfig): Promise<BaseRules<T>> => {
//   return new Promise((resolve, reject) => {
//     service.request<BaseRules<T>>(config).then(
//       (res) => {
//         resolve(res as any);
//       },
//       (err) => {
//         reject(err);
//       }
//     );
//   });
// };

// export default request;
