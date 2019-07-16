import { Actor, Action, IMap } from 'plume2';
import { fromJS } from 'immutable';

export default class FormActor extends Actor {
  defaultState() {
    return {
      mobilePhone: '',
      smsCode: '',
      newPassword: '',
      passwordSecurity: true,
      timeEnd: true
    };
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

  @Action('changeTimeEnd')
  changeTimeEnd(state: IMap, value: boolean): IMap {
    return state.set('timeEnd', value);
  }
}
