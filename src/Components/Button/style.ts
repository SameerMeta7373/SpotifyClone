import {StyleSheet} from 'react-native';
import colors from '../../Utils/colors';
import Fonts from '../../Utils/Fonts';

export const styles = StyleSheet.create({
  innercontainer: {
    flexDirection: 'row', 
    paddingVertical: 12,
    borderWidth: 0.8,
    margin: 6,
    borderColor: colors.primaryWhite,
    borderRadius: 60,
    paddingHorizontal: 15,
  },
  text: {
    color: colors.primaryWhite,
    fontSize: 30,
    marginLeft: 20,
    fontFamily : Fonts.Poppins,
    fontWeight: 'bold',
  },
  logoStyle: {
    height: 30,
    width: 30,
  },
  pressed : {
    opacity : 0.75
  }
});
