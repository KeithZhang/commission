import { Store, IOptions } from 'plume2';

import FormActor from './actors/form';
import MentionActor from './actors/mention';
import { http, Config } from 'you-kit';

export default class AppStore extends Store {
  constructor(props: IOptions) {
    super(props);
    if (__DEV__) {
      (window as any)._store = this;
    }
  }

  bindActor() {
    return [new FormActor(), new MentionActor()];
  }

  init(inviteCode: string) {
    this.dispatch('initInviteCode', inviteCode);
  }

  clearFormItemValue = key => {
    this.dispatch('clearFormItemValue', key);
  };

  changeFormItemValue = data => {
    this.dispatch('changeFormItemValue', data);
  };

  changePasswordSecurity = value => {
    this.dispatch('changePasswordSecurity', value);
  };

  sendSmsCode = async () => {
    const mobile = this.state().get('mobilePhone');
    const data = await http.post(`${Config.Host}/register/send`, {
      mobile
    });
    console.log('sned sms code ...', data);
  };

  register = async () => {
    const allState = this.state();
    const mobilePhone = allState.get('mobilePhone');
    const smsCode = allState.get('smsCode');
    const password = allState.get('password');
    const inviteCode = allState.get('inviteCode');
    console.log('inviteCode...', inviteCode);
    const { res, err } = await http.post(`${Config.Host}/register`, {
      mobile: mobilePhone,
      code: smsCode,
      password,
      superior: inviteCode
    });
    if (!err) {
      YouNavigator.navigate('LoginRegister');
    }
  };
}
