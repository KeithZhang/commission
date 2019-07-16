import { QL } from 'plume2';

import { Util } from 'you-kit';

export const loginDisabledQL = QL('loginDisabled', [
  'mobilePhone',
  'password',
  (mobilePhone: string, password: string) => {
    return !(
      Util.mobilePhoneReg.test(mobilePhone) && Util.passwordReg.test(password)
    );
  }
]);
