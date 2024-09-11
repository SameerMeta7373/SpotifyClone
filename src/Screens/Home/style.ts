import {StyleSheet} from 'react-native';
import colors from '../../Utils/colors';

export const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: colors.primaryWhite,
    backgroundColor: 'transparent',
  },
  rootContainer: {
    flex: 1,
    height: 950,
  },
  iconContainer: {
    flexDirection: 'row',
    marginVertical: 25,
    marginHorizontal: 60,
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
    color: colors.primaryWhite,
    marginBottom: 10,
  },
});
