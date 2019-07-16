import { NavigationScreenProp, NavigationState } from 'react-navigation';

import { ThemeType, StylesType } from 'you-ui';
import { List } from 'immutable';

declare global {
  const YouNavigator: NavigationScreenProp<NavigationState>;
  const YouTheme: ThemeType;
  const YouStyles: StylesType;
  interface Window {
    token: string;
  }
}
declare type IList = List<any>;
