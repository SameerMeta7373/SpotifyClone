import {StyleSheet} from 'react-native';
import colors from '../../Utils/colors';
import Fonts from '../../Utils/Fonts';
import {height, width} from '../../Utils/dimension';

export const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: Fonts.Poppins,
    textAlign: 'center',
    margin: 10,
    color: colors.primaryWhite,
    backgroundColor: 'transparent',
  },
  iconContainer: {
    flexDirection: 'row',
    marginVertical: height * 2.5,
    marginHorizontal: width * 14,
  },
  textStyle: {
    color: colors.primaryWhite,
  },
  titleIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: Fonts.Gotham,
    color: colors.primaryWhite,
    marginBottom: 10,
  },
});
