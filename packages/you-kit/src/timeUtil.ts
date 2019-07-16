/**
 */
export default class timeUtil {
  static timeFormat(date, fmt) {
    var o = {
      'M+': date.getMonth() + 1, //月份
      'd+': date.getDate(), //日
      'h+': date.getHours(), //小时
      'm+': date.getMinutes(), //分
      's+': date.getSeconds(), //秒
      'q+': Math.floor((date.getMonth() + 3) / 3), //季度
      S: date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        (date.getFullYear() + '').substr(4 - RegExp.$1.length)
      );
    for (var k in o)
      if (new RegExp('(' + k + ')').test(fmt))
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length == 1
            ? o[k]
            : ('00' + o[k]).substr(('' + o[k]).length)
        );
    return fmt;
  }

  static stringToDate(sTime, fmt) {
    //做一个一一对应的hash表
    var minLength = Math.min(sTime.length, fmt.length),
      oTime = { y: '', M: '', d: '' };
    for (var i = 0; i < minLength; i++) {
      oTime[fmt[i]] += sTime[i];
    }
    return new Date(
      parseInt(oTime.y),
      parseInt(oTime.M) - 1,
      parseInt(oTime.d)
    );
  }

  /**
   * 获取字符串时间
   * @param n
   */
  static getDateStr(n) {
    let dd = new Date();
    dd.setDate(dd.getDate() + n); //获取n天后的日期
    let y = dd.getFullYear();
    let m = dd.getMonth() + 1; //获取当前月份的日期
    let mstr = '';
    if (m < 10) {
      mstr = '0' + m;
    } else {
      mstr = '' + m;
    }
    let d = dd.getDate();
    let dstr = '';
    if (d < 10) {
      dstr = '0' + d;
    } else {
      dstr = '' + d;
    }
    return y + '' + mstr + '' + dstr;
  }
}
