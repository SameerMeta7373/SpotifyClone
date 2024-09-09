import {StyleSheet} from 'react-native';
import colors from '../../Utils/colors';

export const styles = StyleSheet.create({
  innercontainer: {
    flexDirection: 'row', // Lay out children side by side
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
