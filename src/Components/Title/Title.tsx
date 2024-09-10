import {View, Text, StyleSheet} from 'react-native';
import colors from '../../Utils/colors';
import {INavigation} from '../../Constants/interface';
import {FC} from 'react';

const Title: FC<INavigation> = ({children}) => {
  return (
    <View style={styles.headerStyle}>
      <Text style={[styles.text]}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    margin: 30,
    width: '70%',
    alignSelf: 'center',
  },
  text: {
    textAlign: 'center',
    color: colors.primaryWhite,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
export default Title;
