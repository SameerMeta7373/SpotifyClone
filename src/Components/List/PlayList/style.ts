import {StyleSheet} from 'react-native';
import Fonts from '../../../Utils/Fonts';
import colors from '../../../Utils/colors';

export const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
  },
  imageStyle: {
    width: 65,
    height: 65,
    margin: 5,
  },
  textStyle: {
    color: colors.primaryFonts,
    fontSize: 16,
    fontFamily: Fonts.Gotham,
  },
  titleTextStyle: {
    marginVertical: 5,
    textAlignVertical: 'center',
    color: colors.primaryWhite,
    fontSize: 18,
    fontFamily: Fonts.Gotham,
    fontWeight: '900',
  },
  lyricsText: {
    backgroundColor: colors.primaryFonts,
    color: colors.primaryBlack,
    paddingHorizontal: 3,
    fontSize: 10,
    fontFamily: Fonts.Gotham,
    textAlignVertical: 'center',
    fontWeight: 'bold',
    marginRight: 4,
    borderRadius: 2,
    height: 15,
    marginTop: 4,
  },
});
