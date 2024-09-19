import {FC} from 'react';
import {INavigation} from '../../Constants/interface';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {styles} from './style';
import colors from '../../Utils/colors';
import {useNavigation} from '@react-navigation/native';
import {image} from '../image';

export const Card: FC<INavigation> = ({
  source,
  name,
  title,
  onPress,
  albumName,
}) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={({pressed}) => [pressed && styles.pressed]}
      onPress={onPress}>
      <View style={styles.container}>
        <Image
          style={styles.imageStyle}
          source={source ? source : image.Artist}
        />
        <View style={{width: '30%'}}>
          {title ? (
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
              {title}
            </Text>
          ) : (
            <Text ellipsizeMode='tail' numberOfLines={1} style={styles.title}>{albumName}</Text>
          )}
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{color: colors.primaryFonts, width: 140}}>
            {name}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};
