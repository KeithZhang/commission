import { http, Config } from 'you-kit';

//用户
export interface IFansInfo {}

/**
 * 查询订单列表 ..
 * @returns {Promise<IUserInfo>}
 */
export function queryOrderList(): Promise<IFansInfo> {
  return new Promise<IFansInfo>((resolve: any) => {
    resolve({});
  });
}

/**
 * 获取统计列表
 * @param searchParams
 */
export function getSummary(): Promise<any> {
  return http.post(`${Config.Host}/fans/summary`);
}
