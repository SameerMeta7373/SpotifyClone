import {NavigationAction} from '@react-navigation/native';
import {ReactNode} from 'react';
import {
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageSourcePropType,
} from 'react-native';

export interface InputI {
  Header: string;
  textInputConfig: {};
  invalid: string;
  children: string;
  header: string;
  inputHeader: string;
}

export interface IButton {
  text: string;
  onPress?: () => void;
  source?: ImageSourcePropType;
  margin?: StyleProp<ViewStyle>;
  backColor?: StyleProp<ViewStyle>;
  txtStyle: StyleProp<TextStyle>;
}
export interface INavigation {
  navigation?: any;
  style ?: StyleProp<TextStyle>
  children?: ReactNode;
  source?: ImageSourcePropType;
}

export interface IconsI {
  source: ImageSourcePropType;
  onPress?: () => {};
  color? : string
  style? : StyleProp<ViewStyle>
}

export interface IBottomTabNavigation {
  navigation: any;
}
export interface ISearchBar {
  placeholder: string;
  onSearch?: ()=>void
}
export interface ISearchCard{
  children : string
}
