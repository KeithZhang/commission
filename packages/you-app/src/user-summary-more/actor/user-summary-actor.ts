import { Actor, Action, IMap } from 'plume2';
import { fromJS } from 'immutable';
declare type Param = { key: string; value: any };

export default class UserSummaryActor extends Actor {
  defaultState() {
    return {
      // 开始时间
      startDate: '',
      // 结束时间
      endDate: '',
      // 按月查：1， 按日查：0
      searchMode: '0',
      // 统计列表
      summaryList: []
    };
  }

  @Action('actor: setItem')
  setItem(state: IMap, params: Param): IMap {
    return state.set(params.key, fromJS(params.value));
  }
}
