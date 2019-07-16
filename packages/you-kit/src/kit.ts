import { Dimensions, Platform } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';

const { width, height } = Dimensions.get('window');

export default {
  screenWidth: width,
  screenHeight: height,

  get isAndroid(): boolean {
    return Platform.OS === 'android';
  },

  get isIOS(): boolean {
    return Platform.OS === 'ios';
  },

  /**
   * 是否为iphoneX
   */
  isIphoneX,

  /**
   * 转换图片格式, ios(jpg), android(webp)
   */
  getWebp: _getWebp,

  /**
   * 合并样式
   */
  concatStyle: _concatStyle
};

/**
 * 转webp格式, ios转jpg, ios不支持webp
 * @param source
 * @private
 */
function _getWebp(source, width, height, cropping) {
  let cleanSrc = _cleanUrl(source);
  //__DEV__ && console.log('_getWebp:cleanSrc=', cleanSrc);
  let newUrl = source;
  const formatFun = cropping ? _formatNoCropping : _format;
  if (Platform.OS === 'android') {
    newUrl = formatFun(cleanSrc, parseInt(width), parseInt(height), 'webp');
  } else if (Platform.OS === 'ios') {
    newUrl = formatFun(cleanSrc, parseInt(width), parseInt(height), 'jpg');
  }
  // __DEV__ && console.log('_getWebp:newUrl=', newUrl);
  return newUrl;
}

/**
 * 添除服务端的格式转换;
 * @param source
 * @returns {*}
 * @private
 */
function _cleanUrl(source) {
  source = source || '';
  let p = source.lastIndexOf('@');
  if (p != -1) {
    return source.substring(0, p);
  }
  return source;
}

/**
 * 格式化策略
 * 例如: oss策略为 x-oss-process=image/resize,m_fixed,h_100,w_100/format,jpg
 * @param src
 * @param width
 * @param height
 * @param format
 */
function _format(src, width, height, format) {
  var f = [src, '?x-oss-process=image'];
  if (width || height) {
    f.push('/resize,m_fixed,');
    if (width) {
      f.push(`,w_${width}`);
    }
    if (height) {
      f.push(`,h_${height}`);
    }
  }
  if (format) {
    f.push(`/format,${format}`);
  }
  // 根据重力自动旋转图片 /auto-orient,0
  f.push('/auto-orient,0');
  return f.join('');
}

/**
 * 格式化策略
 * 例如: oss策略为 ?x-oss-process=image/resize,w_200,h_200,m_pad,color_FFFFFF/format,webp
 * @param src
 * @param width
 * @param height
 * @param format
 */
function _formatNoCropping(src, width, height, format) {
  var f = [src, '?x-oss-process=image'];
  if (width || height) {
    f.push('/resize');
    if (width) {
      f.push(`,w_${width}`);
    }
    if (height) {
      f.push(`,h_${height}`);
    }
  }
  if (format) {
    f.push(`,m_pad,color_FFFFFF/format,${format}`);
  }
  return f.join('');
}

/**
 * 合并样式
 * @param propsStyle
 * @param style
 */
function _concatStyle(propsStyle: any, ...style): Array<any> {
  if (propsStyle instanceof Array) {
    return style.concat(propsStyle);
  } else {
    style.push(propsStyle);
    return style;
  }
}
