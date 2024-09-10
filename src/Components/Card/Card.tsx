import {FC} from 'react';
import {INavigation} from '../../Constants/interface';
import {Image, StyleSheet, Text, View} from 'react-native';
import { image } from '../image';

export const Card: FC<INavigation> = ({source}) => {
  return (
    <View style={styles.container}>
    <Image style={styles.imageStyle} source={source} />
  </View>
  );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        justifyContent: 'center',
      },
      imageStyle: {
        width: 350,
        height: 250,
        marginBottom: 10,
      },
      textStyle: {
        color: 'white',
        fontSize: 16,
      },
})
