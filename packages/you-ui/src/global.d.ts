import { NavigationScreenProp, NavigationState } from 'react-navigation';

import { ThemeType, StylesType } from './styles';

declare global {
  const YouNavigator: NavigationScreenProp<NavigationState>;
  const YouTheme: ThemeType;
  const YouStyles: StylesType;
}
