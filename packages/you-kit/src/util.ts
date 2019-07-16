const mobilePhoneReg = /^1\d{10}$/;
/**
  [0-9A-Za-z]{6,20}
  匹配整个字符串由6~20位由数字和26个英文字母混合而成
 */
const passwordReg = /^[0-9A-Za-z]{6,20}$/;

const smsCodeReg = /^[0-9]{6}$/;

const inviteCodeReg = /^[0-9]{6}$/;

export default {
  mobilePhoneReg,
  passwordReg,
  smsCodeReg,
  inviteCodeReg
};
