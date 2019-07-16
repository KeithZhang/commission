import { Actor, Action, IMap } from 'plume2';
import { fromJS } from 'immutable';
declare type Param = { key: string; value: any };

export default class UserActor extends Actor {
  defaultState() {
    return {
      // 开始时间
      startDate: '',
      // 结束时间
      endDate: ''
    };
  }

  @Action('actor: setItem')
  setItem(state: IMap, params: Param): IMap {
    return state.set(params.key, fromJS(params.value));
  }
}
