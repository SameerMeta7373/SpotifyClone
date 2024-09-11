import {StyleSheet} from 'react-native';
import colors from '../../Utils/colors';

export const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: colors.primaryBlack,
    flex: 1,
    minHeight: 1050,
  },
  card: {
    flexDirection: 'row',
  },
  sectionHeader: {
    marginRight: '40%',
    backgroundColor: 'red',
    // flex : 1
  },
  sectionList: {
    marginTop: 20,
  },
  contentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});
