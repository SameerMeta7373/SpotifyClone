import {Image, Pressable, Text, View} from 'react-native';
import {styles} from '../Button/style';
import {IButton} from '../../Constants/interface';
import {FC} from 'react';

const CButton: FC<IButton> = ({
  text,
  source,
  txtStyle,
  backColor,
  margin,
  onPress,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [pressed && styles.pressed]}>
      <View style={[styles.innercontainer, backColor]}>
        {source && (
          <View>
            <Image style={[styles.logoStyle]} source={source} />
          </View>
        )}
        <Text style={[styles.text, txtStyle, margin]}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default CButton;
