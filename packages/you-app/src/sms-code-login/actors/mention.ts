import { Actor, Action, IMap } from 'plume2';
import { fromJS } from 'immutable';

export default class MentionActor extends Actor {
  defaultState() {
    return {
      mention: ''
    };
  }

  @Action('changeMention')
  changeMention(state: IMap, data): IMap {
    return state.merge(fromJS(data));
  }
}
