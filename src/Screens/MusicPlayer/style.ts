import {StyleSheet} from 'react-native';
import colors from '../../Utils/colors';
import Fonts from '../../Utils/Fonts';

export const styles = StyleSheet.create({
  ImageContainer: {
    paddingHorizontal: 25,
    paddingVertical: 40,
  },
  ImageStyle: {
    height: 410,
    width: 362,
  },
  songNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  songName: {
    fontSize: 24,
    fontFamily: Fonts.Gotham,
    color: colors.primaryWhite,
    fontWeight: '600',
  },
  singerName: {
    fontSize: 20,
    fontFamily: Fonts.Gotham,
    color: colors.primaryWhite,
    fontWeight: '600',
  },
  slider: {
    width: 350,
    height: 60,
    alignSelf: 'center',
  },
  songControllContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  optionsContainer: {
    flexDirection: 'row',
    paddingVertical: 20,
    marginHorizontal: '10%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lyrics: {
    minHeight: 600,
    margin: 30,
    borderRadius: 16,
  },
  lyricsHeading: {
    fontSize: 20,
    color: colors.primaryWhite,
    fontWeight: '700',
    padding: 20,
    fontFamily: Fonts.Poppins,
  },
  headerSongName: {
    fontSize: 19,
    color: colors.primaryWhite,
    fontFamily: Fonts.Poppins,
    fontWeight: '600',
    alignSelf: 'center',
  },
  rootHeader: {
    fontSize: 16,
    fontFamily: Fonts.Poppins,
    color: colors.primaryWhite,
    fontWeight: '500',
  },
});
