import { ViewAction } from 'plume2';
import { fromJS } from 'immutable';
import Store from '../store';
import { summary } from '../../common/webapi';

export class UserSummaryAction extends ViewAction {
  store: Store;

  setItem = (key, value) => {
    this.store.dispatch('actor: setItem', { key, value });
  };

  /**
   * 刷新列表
   */
  refreshList = async (mode: string) => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() - 1;
    const { res } = await summary.getSummaryList({
      mode,
      year,
      month
    });

    this.store.transaction(() => {
      this.store.dispatch('actor: setItem', { key: 'searchMode', value: mode });
      this.store.dispatch('actor: setItem', {
        key: 'summaryList',
        value: fromJS(res)
      });
    });
  };
}
