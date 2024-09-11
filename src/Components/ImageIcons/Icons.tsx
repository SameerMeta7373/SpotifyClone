import {FC} from 'react';
import {Image, Pressable, StyleSheet} from 'react-native';
import {IconsI} from '../../Constants/interface';

const Icons: FC<IconsI> = ({source, onPress, color, style}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [pressed && styles.pressed]}>
      <Image
        style={[styles.imageStyle, style, {tintColor: color}]}
        source={source}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  imageStyle: {height: 30, width: 30},
});
export default Icons;
