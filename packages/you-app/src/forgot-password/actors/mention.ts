import { Actor, Action, IMap } from 'plume2';
import { fromJS, Map } from 'immutable';

export default class MentionActor extends Actor {
  defaultState() {
    return {
      mentions: Map()
    };
  }

  @Action('addMention')
  addMention(state: IMap, data: IMap): IMap {
    return state.update('mentions', mentions => {
      return mentions.merge(data);
    });
  }

  @Action('clearMention')
  clearMention(state: IMap, key: string): IMap {
    return state.deleteIn(['mentions', key]);
  }
}
