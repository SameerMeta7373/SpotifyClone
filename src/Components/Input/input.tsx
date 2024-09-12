import {StyleSheet, Text, TextInput, View} from 'react-native';
import colors from '../../Utils/colors';
import {InputI} from '../../Constants/interface';
import {FC} from 'react';
import {styles} from './style';

const Input: FC<InputI> = ({textInputConfig, invalid, children, }) => {
  const inputStyle = [styles.TextInput];

  if (textInputConfig && textInputConfig.multiLine) {
    inputStyle.push(styles.multiLine);
  }
  if (invalid) {
    inputStyle.push(styles.invalidInput);
  }

  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.Text, invalid && styles.invalidLabel]}></Text>
      <TextInput
        placeholderTextColor={colors.primaryGrey}
        placeholder={children}
        style={inputStyle}
        {...textInputConfig}
      />
    </View>
  );
};

export default Input;
