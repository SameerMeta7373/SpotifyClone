import {StyleSheet} from 'react-native';
import colors from '../../Utils/colors';
import Fonts from '../../Utils/Fonts';

export const styles = StyleSheet.create({
  ImageContainer: {
    marginHorizontal: 20,
    paddingVertical: 10,
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
    fontSize: 22,
    fontFamily: Fonts.Gotham,
    color: colors.primaryWhite,
    fontWeight: 'bold',
  },
  singerName: {
    fontSize: 18,
    fontFamily: Fonts.Gotham,
    color: colors.primaryWhite,
    fontWeight: '600',
  },
  timer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingBottom: 15,
  },
  slider: {
    width: 350,
    marginTop: 20,
    height: 30,
    alignSelf: 'center',
  },
  songControllContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  optionsContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
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
    fontSize: 14,
    color: colors.primaryWhite,
    fontFamily: Fonts.Poppins,
    maxWidth: 250,
    fontWeight: '600',
    alignSelf: 'center',
  },
  rootHeader: {
    fontSize: 14,
    fontFamily: Fonts.Poppins,
    color: colors.primaryWhite,
    fontWeight: '500',
  },
});
