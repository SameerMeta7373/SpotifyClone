import {StyleSheet} from 'react-native';
import colors from '../../Utils/colors';
import Fonts from '../../Utils/Fonts';

export const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 12,
    width: 130,
    fontFamily : Fonts.Gotham,
    color: colors.primaryWhite,
  },
  innerContainer: {
    height: 120,
    width: 185,
    borderRadius: 10,
  },
  pressed: {
    opacity: 0.75,
  },
});
