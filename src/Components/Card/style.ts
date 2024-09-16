import {StyleSheet} from 'react-native';
import colors from '../../Utils/colors';
import Fonts from '../../Utils/Fonts';

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'center',
  },
  imageStyle: {
    width: 170,
    height: 170,
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
    width: 140,
    fontSize: 16,
    fontFamily: Fonts.Gotham,
    fontWeight: 'bold',
  },
});
