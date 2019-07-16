import { Actor, Action, IMap } from 'plume2';
import { fromJS } from 'immutable';
import { IUserInfo } from '../../common/webapi/userinfo';

export default class UserActor extends Actor {
  defaultState() {
    return {
      userInfo: {
        userName: 'landen',
        userPhone: '13112341234'
      }
    };
  }

  @Action('user:setUserInfo')
  setUserInfo(state: IMap, params: IUserInfo): IMap {
    return state.set('userInfo', fromJS(params));
  }
}
