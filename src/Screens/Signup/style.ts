import {StyleSheet} from 'react-native';
import colors from '../../Utils/colors';
import Fonts from '../../Utils/Fonts';

export const styles = StyleSheet.create({
  imageContainer: {
    padding: 20,
    marginTop: '30%',
    alignSelf: 'center',
  },
  imageStyle: {
    height: 80,
    width: 270,
  },
  pressed: {
    opacity: 0.75,
  },
  textUnder: {
    textDecorationLine: 'underline',
    fontSize: 14,
    fontFamily : Fonts.Poppins,
    alignSelf: 'center',
    color: colors.primaryTheme,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpText: {
    color: colors.primaryWhite,
    textAlign: 'center',
    padding: 10,
  },
});
