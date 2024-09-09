import {Image, Pressable, Text, View} from 'react-native';
import {styles} from './style';
import colors from '../../Utils/colors';
import {image} from '../../Components/image';
import CButton from '../../Components/Button';

function WelcomeScreen() {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.imageStyle} source={image.SpotifyLogo}></Image>
      </View>
      <View style={styles.headerStyle}>
        <Text style={[styles.text]}>Millions of songs Free on Spotify.</Text>
      </View>
      <CButton
        text="Sign up free"
        margin={{marginLeft: '35%'}}
        backColor={{backgroundColor: colors.primaryTheme}}
        txtStyle={{fontSize: 20, color: colors.primaryBlack}}
      />
      <CButton
        text="Continue with phone number"
        source={image.Mobilephone}
        txtStyle={{fontSize: 20}}
      />
      <CButton
        text="Continue with Google"
        source={image.GoogleLogo}
        txtStyle={{fontSize: 20}}
      />
      <CButton
        text="Continue with facebook"
        source={image.FacebookLogo}
        txtStyle={{fontSize: 20}}
      />
      <View>
        <Pressable style={({pressed}) => [pressed && styles.pressed]}>
          <Text
            style={[
              styles.text,
              {fontSize: 22, margin: 20, alignSelf: 'center'},
            ]}>
            Log in
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

export default WelcomeScreen;
