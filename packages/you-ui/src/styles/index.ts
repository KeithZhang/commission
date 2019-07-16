import YouTheme from './themes/basic';
import YouStyles from './common';

interface ColorType {
  /**
   * 文字主色（黑）
   */
  text_base: string;
  /**
   * 文字反色（白）
   */
  text_base_inverse: string;
  /**
   * 失效颜色（灰）
   */
  text_disabled: string;
  /**
   * 文字辅助色，描述文字色（灰）
   */
  text_caption: string;
  /**
   * 链接字体色
   */
  link: string;
  /**
   * 通用默认背景色
   */
  fill_base: string;
  /**
   * 失效背景色
   */
  fill_grey: string;
  /**
   * 白色背景色
   */
  fill_white: string;
  /**
   * 通用遮罩背景色
   */
  fill_mask_base: string;
  /**
   * 轻提示背景色
   */
  fill_mask_tip: string;
  /**
   * 品牌主色
   */
  brand_primary: string;
  /**
   * 品牌主色深
   */
  brand_primary_tap: string;
  brand_success: string;
  brand_warning: string;
  brand_error: string;
  /**
   * 边框色
   */
  border: string;
  /**
   * 分割线色
   */
  split: string;
}

interface FontType {
  /**
   * 一级标题，按钮 17
   */
  head: number;
  /**
   * 辅助文字 15
   */
  caption: number;
  /**
   * 二级标题 14
   */
  subhead: number;
  /**
   * 基础字号 13
   */
  base: number;
  /**
   * 辅助文字小 12
   */
  caption_sm: number;
  /**
   * 图标描述文字 10
   */
  icontext: number;
}

interface RadiusType {
  /**
   * 客服消息 8
   */
  md: number;
  /**
   * 图标 12
   */
  lg: number;
}

// 间距
interface SpaceType {
  /**
   * 水平间距 4
   */
  h_spacing_sm: number;
  /**
   * 水平间距 8
   */
  h_spacing_md: number;
  /**
   * 水平间距 16
   */
  h_spacing_lg: number;

  /**
   * 垂直间距 4
   */
  v_spacing_xs: number;
  //  v_spacing_sm: 6,
  /**
   * 垂直间距 8
   */
  v_spacing_md: number;
  /**
   * 垂直间距 16
   */
  v_spacing_lg: number;
  //  v_spacing_xl: 20,
}

// 图标大小
interface IconType {
  /**
   * 24
   */
  lg: number;
  /**
   * 22
   */
  md: number;
  /**
   * 20
   */
  sm: number;
  /**
   * 16
   */
  xs: number;
}

// 头像大小
interface HeadIconType {
  /**
   * 70
   */
  lg: number;
  /**
   * 50
   */
  md: number;
  /**
   * 20
   */
  sm: number;
}

// 图片大小
interface ImageType {
  /**
   * 120
   */
  lg: number;
  /**
   * 80
   */
  md: number;
  /**
   * 60
   */
  sm: number;
}

// 按钮高度，宽度都是算出来的，不能定宽，但是高度要定高
interface BtnType {
  /**
   * 44
   */
  height_lg: number;
  /**
   * 36
   */
  height_md: number;
  /**
   * 28
   */
  height_sm: number;
  /**
   * 22
   */
  height_xs: number;
  /**
   * 18
   */
  height_xss: number;
}

export type ThemeType = typeof YouTheme;
export type StylesType = typeof YouStyles;

const bindThemeToGlobal = globalName => {
  (global || window)[globalName] = YouTheme;
};

const bindStyleToGlobal = globalName => {
  (global || window)[globalName] = YouStyles;
};

bindThemeToGlobal('YouTheme');
bindStyleToGlobal('YouStyles');
