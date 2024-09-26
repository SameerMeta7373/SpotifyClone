import {NavigationAction} from '@react-navigation/native';
import {ReactNode} from 'react';
import {
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageSourcePropType,
  ImageStyle,
  ListRenderItem,
} from 'react-native';

export interface InputI {
  Header?: string;
  textInputConfig?: {};
  invalid?: string;
  children: string;
  header?: string;
  inputHeader?: string;
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
  style?: StyleProp<TextStyle>;
  children?: ReactNode;
  source?: string;
  name?: string;
  title?: string;
  albumName?: string;
  onPress?: () => void;
}

export interface IconsI {
  source: ImageSourcePropType;
  onPress?: () => void;
  color?: string;
  style?: StyleProp<ImageStyle>;
}

export interface IBottomTabNavigation {
  navigation: any;
}
export interface ISearchBar {
  placeholder: string;
  onSearch?: () => void;
}
export interface ISearchCard {
  children: string;
}

export interface IListCard {
  onPress?: () => void;
  data?: string;
}

export interface IrenderSongItem {
  item: any;
}
export interface IList {
  renderItem: ListRenderItem<string>;
  data: string;
}
