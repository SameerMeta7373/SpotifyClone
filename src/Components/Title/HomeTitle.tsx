import {FC} from 'react';
import {INavigation} from '../../Constants/interface';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../Utils/colors';

export const HomeTitle: FC<INavigation> = ({children, style}) => {
  return (
    <View style={styles.root}>
      <Text style={[styles.titleText,style]}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 10,
  },
  titleText: {
    color: colors.primaryWhite,
    fontSize: 28,
    fontWeight: '800',
  },
});
