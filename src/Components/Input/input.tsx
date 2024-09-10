import {StyleSheet, Text, TextInput, View} from 'react-native';
import colors from '../../Utils/colors';
import {InputI} from '../../Constants/interface';
import {FC} from 'react';
import { styles } from './style';


const Input: FC<InputI> = ({
  inputHeader,
  textInputConfig,
  invalid,
  children,
  header,
}) => {
  const inputStyle = [styles.TextInput];

  if (textInputConfig && textInputConfig.multiLine) {
    inputStyle.push(styles.multiLine);
  }
  if (invalid) {
    inputStyle.push(styles.invalidInput);
  }

  return (
    <View>
      <View style={styles.inputContainer}>
        <Text style={{color: colors.primaryWhite}}>{header}</Text>
        <Text style={[styles.Text, invalid && styles.invalidLabel]}></Text>
        <TextInput
          placeholderTextColor = {colors.primaryGrey}
          placeholder={children}
          style={inputStyle}
          {...textInputConfig}
        />
      </View>
    </View>
  );
};


export default Input;
