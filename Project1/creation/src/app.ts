import { createLogger } from 'redux-logger';
import { message } from 'antd';
import { RequestConfig } from 'umi';

export const dva = {
  config: {
    onAction: createLogger(),
    onError(e: Error) {
      message.error(e.message, 3);
    },
  },
};

// 网络请求配置
const baseUrl = process.env.NODE_ENV==='production'?'https://creationapi.shbwyz.com':'https://creationapi.shbwyz.com';
export const request: RequestConfig = {
  timeout: 100000,
  // 请求拦截器
  requestInterceptors: [(url, options) => {
    return {
      url: `${baseUrl}${url}`,
      options,
    };
  }],
  // 响应拦截器
  responseInterceptors: [response => {
    const codeMaps:{[key:number]:string} = {
      400: '错误的请求',
      403: '禁止访问',
      404: '找不到资源',
      500: '服务器内部错误',
      502: '网关错误。',
      503: '服务不可用，服务器暂时过载或维护。',
      504: '网关超时。',
    };
    if (Object.keys(codeMaps).indexOf(String(response.status)) !== -1){
        message.error({
          content: codeMaps[response.status]
        });
    }
    return response;
  }],
};
