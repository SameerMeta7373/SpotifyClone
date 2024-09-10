import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {IconsI} from '../../Constants/interface';
import {FC} from 'react';

const Icons: FC<IconsI> = ({source, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [pressed && styles.pressed]}>
      <Image style = {{height : 35, width : 35}} source={source} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
});
export default Icons;
