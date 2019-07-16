import {
  StyleSheet,
  ViewStyle,
  ImageStyle,
  Dimensions,
  PixelRatio
} from 'react-native';
import YouTheme from './themes/basic';

const { width: screen_width, height: screen_height } = Dimensions.get('screen');
const styles = StyleSheet.create({
  // flex
  flex_1: {
    flex: 1
  },
  flex_2: {
    flex: 2
  },
  flex_3: {
    flex: 3
  },

  // font
  font_12: {
    fontSize: YouTheme.font.caption_sm
  },
  font_13: {
    fontSize: YouTheme.font.base
  },
  font_14: {
    fontSize: YouTheme.font.subhead
  },

  // color
  color_text_base: {
    color: YouTheme.color.text_base
  },
  color_text_caption: {
    color: YouTheme.color.text_caption
  },
  color_brand_primary: {
    color: YouTheme.color.brand_primary
  },
  color_brand_warning: {
    color: YouTheme.color.brand_warning
  },
  color_brand_error: {
    color: YouTheme.color.brand_error
  },

  // image
  image_60: {} as ImageStyle,

  // icon
  icon_20: {
    width: YouTheme.icon.sm,
    height: YouTheme.icon.sm
  } as ViewStyle,

  // border
  border_radius_12: {
    borderRadius: 12
  } as ImageStyle,

  //  margin
  margin_bottom_10: {
    marginBottom: 10
  },
  margin_bottom_18: {
    marginBottom: 18
  },
  margin_bottom_24: {
    marginBottom: 24
  },
  margin_16_0_16: {
    marginLeft: 16,
    marginRight: 16
  },
  margin_right_10: {
    marginRight: 10
  },
  // padding
  padding_51_18: {
    paddingLeft: 51,
    paddingRight: 18
  },
  padding_65_18: {
    paddingLeft: 65,
    paddingRight: 18
  },
  padding_37_18: {
    paddingLeft: 37,
    paddingRight: 18
  },

  // background
  backgound_color_white: {
    backgroundColor: YouTheme.color.fill_white
  },

  // text layout
  text_x_center: {
    textAlign: 'center'
  },
  text_y_center: {
    textAlignVertical: 'center'
  },

  // flex deriction
  flex_direction_row: {
    flexDirection: 'row'
  },
  flex_direction_column: {
    flexDirection: 'column'
  },

  // layout
  x_flexend_y_center: {
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  x_y_center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  y_center: {
    alignItems: 'center'
  },
  x_center: {
    justifyContent: 'center'
  },
  self_center: {
    alignSelf: 'center'
  },

  //  form item hight
  form_item_height: {
    height: 44
  },

  // bottom line
  bottom_line: {
    borderBottomColor: YouTheme.color.border,
    borderBottomWidth: 1 / PixelRatio.get()
  }
});

export default {
  ...styles,
  screen_width,
  screen_height
};
