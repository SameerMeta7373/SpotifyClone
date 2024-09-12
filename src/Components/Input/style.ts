import {StyleSheet} from 'react-native';
import colors from '../../Utils/colors';

export const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 22,
    color: colors.primaryWhite,
  },
  TextInput: {
    borderWidth: 1.5,
    borderRadius: 25,
    fontSize: 22,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderColor: colors.primaryWhite,
    color: colors.primaryWhite,
    backgroundColor: colors.primaryBlack,
  },
  Text: {
    fontSize: 16,
    color: colors.primaryWhite,
  },
  multiLine: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  invalidLabel: {
    color: 'red',
  },
  invalidInput: {
    backgroundColor: '#e9d1d1',
  },
});
