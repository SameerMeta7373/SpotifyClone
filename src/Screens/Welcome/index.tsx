import {Image, Pressable, Text, View} from 'react-native';
import {styles} from './style';
import colors from '../../Utils/colors';
import {image} from '../../Components/image';
import CButton from '../../Components/Button';
import Title from '../../Components/Title/Title';
import {INavigation} from '../../Constants/interface';
import {FC} from 'react';
import Fonts from '../../Utils/Fonts';

const WelcomeScreen: FC<INavigation> = ({navigation}) => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.imageStyle} source={image.SpotifyLogo}></Image>
      </View>
      <Title children="Millions of songs Free on Spotify." />
      <CButton
        text="Sign up free"
        onPress={() => {
          navigation.navigate('SignUp');
        }}
        margin={{marginLeft: '35%'}}
        backColor={{backgroundColor: colors.primaryTheme}}
        txtStyle={{fontSize: 22 ,color: colors.primaryBlack, fontFamily : Fonts.Poppins}}
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
      <Pressable
        onPress={() => {
          navigation.navigate('Login');
        }}
        style={({pressed}) => [pressed && styles.pressed]}>
        <Text
          style={[
            styles.text,
            {fontSize: 22, margin: 20, alignSelf: 'center'},
          ]}>
          Log in
        </Text>
      </Pressable>
    </View>
  );
};

export default WelcomeScreen;
