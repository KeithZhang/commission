import { Store, IOptions } from 'plume2';
import { fromJS } from 'immutable';
import { http, Config, Util } from 'you-kit';

import FormActor from './actors/form';
import MentionActor from './actors/mention';

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

  clearFormItemValue = (key: string) => {
    this.dispatch('clearFormItemValue', key);
  };

  changeFormItemValue = (data: Object) => {
    this.dispatch('changeFormItemValue', data);
  };

  changePasswordSecurity = (value: boolean) => {
    this.dispatch('changePasswordSecurity', value);
  };

  sendSmsCode = async () => {
    const mobile = this.state().get('mobilePhone');

    const data = await http.post(`${Config.Host}/find/pwd/send`, {
      mobile
    });
    console.log('sned sms code ...', data);

    this.dispatch(
      'addMention',
      fromJS({
        smsCodeMention: {
          type: 'normal',
          content: ''
        }
      })
    );
  };

  changeTimeEnd = () => {
    console.log('changeTimeEnd..');
    const timeEnd = this.state().get('timeEnd');
    this.dispatch('changeTimeEnd', !timeEnd);
  };

  done = async () => {
    const allState = this.state();
    const mobile = allState.get('mobilePhone');
    const code = allState.get('smsCode');
    const password = allState.get('newPassword');
    const data = await http.post(`${Config.Host}/find/pwd/change`, {
      mobile,
      code: '1234',
      password
    });
    console.log('done...', data);
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

  checkSmsCode = (): boolean => {
    const smsCode = this.state().get('smsCode');
    const result = Util.smsCodeReg.test(smsCode);
    console.log('checkPassword smsCode...', smsCode);
    console.log('checkPassword result...', result);

    result
      ? this.dispatch('clearMention', 'smsCodeMention')
      : this.dispatch(
          'addMention',
          fromJS({
            smsCodeMention: { type: 'error', content: '请输入4位短信验证码' }
          })
        );

    return result;
  };

  checkNewPassword = (): boolean => {
    const newPassword = this.state().get('newPassword');
    const result = Util.passwordReg.test(newPassword);
    console.log('checkPassword newPassword...', newPassword);
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
