import { go } from './go';
import { IAsyncResult, ISetting } from './types';

import { Platform, AsyncStorage } from 'react-native';

const enum StatusCode {
  SUCCESS = '000000'
}

export interface IResponseJSONData {
  result: string;
  data: any;
  error: Error;
}

const defaultReq = {
  method: 'GET',
  headers: {
    Accept: 'application/json; charset=utf-8',
    'Content-Type': 'application/json; charset=utf-8',
    credentials: 'omit', // app 不要cookie, 否则api请求失败后一直失败;
    Platform: Platform.OS,
    Version: ''
  }
};

const basic = async function<T>(
  input: RequestInfo,
  params: RequestInit = {},
  setting: ISetting = {}
): Promise<IAsyncResult<T>> {
  //判断是不是上传图片
  const contentType = setting.isUpload
    ? 'multipart/form-data'
    : 'application/json; charset=utf-8';

  const token = (await AsyncStorage.getItem('token')) || window.token || '';
  console.log('token...', token);

  //防止覆盖
  const headers = {
    ...defaultReq.headers,
    ...{ token },
    ...{ ['Content-Type']: contentType }
  };

  const request = {
    ...defaultReq,
    ...{ headers },
    ...params
  };

  console.log('request...', request);

  return go<T>(
    new Promise<T>((resolve, reject) => {
      //timeout
      const timeoutId = setTimeout(() => {
        //FIXEDME UI show timeout information
        //..
        reject(new Error('timeout'));
      }, 10000);

      if (__DEV__) {
        console.log('fetch url -> ', input);
        console.log('fetch params ->', request);
      }

      fetch(input, request)
        .then(res => {
          clearTimeout(timeoutId);
          console.log('res...', res);
          return res.json();
        })
        .then((res: IResponseJSONData) => {
          if (__DEV__) {
            console.log('fetch result:', res);
          }
          if (res.result === StatusCode.SUCCESS) {
            resolve(res.data);
          } else {
            reject(res.error);
          }
        })
        .catch(err => {
          clearTimeout(timeoutId);
          reject(err);
        });
    })
  );
};

export function get<T>(
  url: string,
  params: Object = {},
  setting: ISetting = {}
) {
  const str = Object.keys(params)
    .map(k => `${k}=${params[k]}`)
    .join('&');
  return basic<T>(`${url}?${str}`, {}, setting);
}

export function post<T>(url, params: Object = {}, setting: ISetting = {}) {
  const request = {
    method: 'POST',
    body: JSON.stringify(params)
  };

  return basic<T>(url, request, setting);
}
