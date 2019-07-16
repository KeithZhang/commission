import { Store, IOptions } from 'plume2';
import UserActor from './actor/user-actor';
import { viewAction } from './action';
import { userinfo } from '../common/webapi';

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
    return [new UserActor()];
  }

  /**
   * 初始化页面
   */
  init = async () => {
    let inviteUrl = await userinfo.getInviteUrl();
    this.dispatch('actor: setItem', { key: 'inviteUrl', value: inviteUrl });
  };
}
