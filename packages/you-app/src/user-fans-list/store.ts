import { Store, IOptions } from 'plume2';
import UserFansActor from './actor/user-fans-actor';
import { viewAction } from './action';
import { fans } from '../common/webapi';
import { fromJS } from 'immutable';

export default class AppStore extends Store {
  constructor(props: IOptions) {
    super(props);
    if (__DEV__) {
      (window as any)._store = this;
    }
  }

  bindViewAction() {
    return viewAction;
  }

  bindActor() {
    return [new UserFansActor()];
  }

  /**
   * 初始化页面
   */
  init = async () => {
    const { res } = await fans.getSummary();
    this.dispatch('actor: setItem', { key: 'summaryData', value: fromJS(res) });
  };
}
