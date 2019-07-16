import { Actor, Action, IMap } from 'plume2';
import { Map } from 'immutable';

export default class MentionActor extends Actor {
  defaultState() {
    return {
      // mentions: {
      //   mobilePhoneMention: {
      //     type: 'normal',
      //     content: ''
      //   },
      //   passwordMention: { type: 'normal', content: '' }
      // },
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
