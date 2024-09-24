import {StyleSheet} from 'react-native';
import colors from '../../Utils/colors';
import Fonts from '../../Utils/Fonts';
import { height, width } from '../../Utils/dimension';

export const styles = StyleSheet.create({
  container: {
    padding: 8,
    justifyContent: 'center',
  },
  imageStyle: {
    width: width * 42,
    height: height * 22,
    marginBottom: 10,
  },
  textStyle: {
    color: colors.primaryFonts,
    fontFamily: Fonts.Gotham,
    fontSize: 16,
  },
  pressed: {
    opacity: 0.75,
  },
  title: {
    color: colors.primaryFonts,
    width: width * 42,
    fontSize: 16,
    fontFamily: Fonts.Gotham,
    fontWeight: 'bold',
  },
});
