import { Store, IOptions } from 'plume2';
import { http, Config, Util } from 'you-kit';
import { fromJS } from 'immutable';

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

  changePasswordSecurity = value => {
    this.dispatch('changePasswordSecurity', value);
  };

  login = async () => {
    console.log('login...');
    if (!this.checkMobile() || !this.checkPassword()) {
      return;
    }

    const mobilePhone = this.state().get('mobilePhone');
    const password = this.state().get('password');
    const { res, err } = await http.post<any>(`${Config.Host}/login`, {
      mobile: mobilePhone,
      password
    });
    console.log('err...', err);
    if (!err) {
      await AsyncStorage.setItem('token', res.token);
      window.token = res.token;
      YouNavigator.navigate('Home');
    }
  };

  checkMobile = (): boolean => {
    const mobilePhone = this.state().get('mobilePhone');
    const result = Util.mobilePhoneReg.test(mobilePhone);
    console.log('checkMobile mobilePhone...', mobilePhone);
    console.log('checkMobile result...', result);

    result
      ? this.dispatch('clearMention', 'mobilePhoneMention')
      : this.dispatch(
          'addMention',
          fromJS({
            mobilePhoneMention: {
              type: 'error',
              content: '请输入正确的手机号'
            }
          })
        );

    return result;
  };

  checkPassword = (): boolean => {
    const password = this.state().get('password');
    const result = Util.passwordReg.test(password);
    console.log('checkPassword password...', password);
    console.log('checkPassword result...', result);

    result
      ? this.dispatch('clearMention', 'passwordMention')
      : this.dispatch(
          'addMention',
          fromJS({
            passwordMention: { type: 'error', content: '请输入6-20位密码' }
          })
        );

    return result;
  };
}
