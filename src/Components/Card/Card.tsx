import {FC} from 'react';
import {INavigation} from '../../Constants/interface';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {styles} from './style';
import colors from '../../Utils/colors';
import {useNavigation} from '@react-navigation/native';

export const Card: FC<INavigation> = ({source}) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={({pressed}) => [pressed && styles.pressed]}
      onPress={() => navigation.navigate('PlayList')}>
      <View style={styles.container}>
        <Image style={styles.imageStyle} source={source} />
        <View style={{width: '30%'}}>
          <Text style={{color: colors.primaryWhite, width: 140}}>
            Ed Shereen, katty Perry, Pitbull, and more
          </Text>
        </View>
      </View>
    </Pressable>
  );
};
