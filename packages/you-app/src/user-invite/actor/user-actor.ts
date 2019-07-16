import { Actor, Action, IMap } from 'plume2';
import { fromJS } from 'immutable';
import { IUserInfo } from '../../common/webapi/userinfo';
declare type Param = { key: string; value: any };

export default class UserActor extends Actor {
  defaultState() {
    return {
      inviteUrl: ''
    };
  }

  @Action('actor: setItem')
  setItem(state: IMap, params: Param): IMap {
    return state.set(params.key, fromJS(params.value));
  }
}
