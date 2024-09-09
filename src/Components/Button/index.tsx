import {
  Image,
  Pressable,
  StyleProp,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {styles} from '../Button/style';

interface IButton {
  text: string;
  source: string;
  margin: StyleProp<ViewStyle>;
  backColor: StyleProp<ViewStyle>;
  txtStyle: StyleProp<TextStyle>;
}

function CButton({text, source, txtStyle, backColor, margin}: IButton) {
  return (
    <Pressable style={({pressed}) => [pressed && styles.pressed]}>
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
}

export default CButton;
