import { Store, IOptions } from 'plume2';
import UserSummaryActor from './actor/user-summary-actor';
import { viewAction } from './action';
import { summary } from '../common/webapi';
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
    return [new UserSummaryActor()];
  }

  /**
   * 初始化页面
   */
  init = async () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() - 1;
    const { res } = await summary.getSummaryList({
      mode: '0',
      year,
      month
    });
    this.dispatch('actor: setItem', { key: 'summaryList', value: fromJS(res) });
  };
}
