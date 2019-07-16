import { http, Config } from 'you-kit';

//用户
export interface IUserInfo {
  userName: string;
  fansCount: number;
  inviteCode: string;
}

export function getUserInfo(): Promise<IUserInfo> {
  return new Promise<IUserInfo>((resolve: any) => {
    resolve({
      userName: 'keith99999',
      fansCount: '999',
      invicodeCode: 'sdf234'
    });
  });
}

/**
 * 获取统计列表
 * @param searchParams
 */
export function getSummaryList(searchParams: object): Promise<any> {
  return http.post(`${Config.Host}/bi/income/list`, searchParams);
}
