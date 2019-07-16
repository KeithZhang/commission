import { Actor, Action, IMap } from 'plume2';
import { fromJS } from 'immutable';

export default class FormActor extends Actor {
  defaultState() {
    return {
      inviteCode: '',
      mobilePhone: '',
      smsCode: '',
      password: '',
      passwordSecurity: true
    };
  }

  @Action('initInviteCode')
  initInviteCode(state: IMap, value): IMap {
    return state.set('inviteCode', value);
  }

  @Action('changeFormItemValue')
  changeFormItemValue(state: IMap, data): IMap {
    return state.merge(fromJS(data));
  }

  @Action('clearFormItemValue')
  clearFormItemValue(state: IMap, key): IMap {
    return state.set(key, '');
  }

  @Action('changePasswordSecurity')
  changePasswordSecurity(state: IMap, value: boolean): IMap {
    return state.set('passwordSecurity', value);
  }
}
