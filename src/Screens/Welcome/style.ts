import {StyleSheet} from 'react-native';
import colors from '../../Utils/colors';
import Fonts from '../../Utils/Fonts';

export const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: colors.primaryBlack,
    flex: 1,
    padding: 15,
  },
  text: {
    textAlign: 'center',
    color: colors.primaryWhite,
    fontSize: 30,
    fontFamily : Fonts.Poppins,
    fontWeight: 'bold',
  },
  imageContainer: {
    marginTop: '50%',
    alignSelf: 'center',
    flex: 0.6,
  },
  imageStyle: {
    width: 100,
    height: 100,
  },
  headerStyle: {
    margin: 40,
    width: '70%',
    alignSelf: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
