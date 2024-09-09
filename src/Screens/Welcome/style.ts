import {StyleSheet} from 'react-native';
import colors from '../../Utils/colors';

export const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: colors.primaryBlack,
    flex: 1,
    padding: 15,
  },
  text: {
    alignSelf: 'center',
    color: colors.primaryWhite,
    fontSize: 30,
    marginLeft: 30,
    fontWeight: 'bold',
  },
  imageContainer: {
    padding: 20,
    marginTop: '30%',
    alignSelf: 'center',
    flex: 0.6,
  },
  imageStyle: {
    width: 100,
    height: 100,
  },
  headerStyle: {
    margin: 40,
    alignSelf: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
