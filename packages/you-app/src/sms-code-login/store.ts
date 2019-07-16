import { Store, IOptions } from 'plume2';
import { http, Config } from 'you-kit';

import FormActor from './actors/form';
import MentionActor from './actors/mention';
import { AsyncStorage } from 'react-native';

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

  clearFormItemValue = key => {
    this.dispatch('clearFormItemValue', key);
  };

  changeFormItemValue = data => {
    this.dispatch('changeFormItemValue', data);
  };

  sendSmsCode = async () => {
    const mobile = this.state().get('mobilePhone');
    const data = await http.post(`${Config.Host}/login/send`, {
      mobile
    });
    console.log('sned sms code ...', data);
  };

  smsLogin = async () => {
    const mobilePhone = this.state().get('mobilePhone');
    const smsCode = this.state().get('smsCode');
    const { res, err } = await http.post<any>(`${Config.Host}/login`, {
      mobile: mobilePhone,
      code: smsCode
    });
    if (!err) {
      AsyncStorage.setItem('token', res.token);
      window.token = res.token;
      YouNavigator.navigate('Home');
    }
  };
}
