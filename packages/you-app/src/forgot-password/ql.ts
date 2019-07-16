import { QL } from 'plume2';
import { Util } from 'you-kit';

export const doneDisabledQL = QL('doneDisabled', [
  'mobilePhone',
  'smsCode',
  'newPassword',
  (mobilePhone: string, smsCode: string, newPassword: string) => {
    return !(
      Util.mobilePhoneReg.test(mobilePhone) &&
      Util.smsCodeReg.test(smsCode) &&
      Util.passwordReg.test(newPassword)
    );
  }
]);

export const sendSmsCodeDisabledQL = QL('sendSmsCodeDisabled', [
  'mobilePhone',
  'timeEnd',
  (mobilePhone: string, timeEnd: boolean) => {
    return !Util.mobilePhoneReg.test(mobilePhone) || !timeEnd;
  }
]);
