import {StyleSheet} from 'react-native';
import colors from '../../Utils/colors';
import Fonts from '../../Utils/Fonts';

const styles = StyleSheet.create({
  upperConatiner: {
    justifyContent: 'center',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  songDescription: {
    fontSize: 17,
    color: colors.primaryFonts,
    fontFamily: Fonts.Poppins,
    paddingBottom: 20,
  },
  lowerContainer: {
    width: '95%',
    alignSelf: 'center',
  },
  imageStyle: {
    width: 35,
    height: 35,
    margin: 5,
  },
  pressed: {
    opacity: 0.75,
  },
  properties: {
    resizeMode: 'contain',
    height: 35,
    width: 70,
    margin: 10,
  },
  playButton: {
    height: 60,
    width: 60,
  },
  linearGradient: {
    flex: 1,
  },
  headerTextAnimation: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 13,
    marginHorizontal: 20,
    color: colors.primaryWhite,
  },
  headerContainerAnimation: {
    flexDirection: 'row',
    height: 60,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  iconRootcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  likesText: {
    fontSize: 18,
    paddingTop: 14,
    color: colors.primaryFonts,
    paddingBottom: 20,
  },
});

export default styles;
