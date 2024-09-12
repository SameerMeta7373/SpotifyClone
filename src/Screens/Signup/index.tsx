import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import CButton from '../../Components/Button';
import Input from '../../Components/Input/input';
import colors from '../../Utils/colors';
import Title from '../../Components/Title/Title';
import {image} from '../../Components/image';
import {INavigation} from '../../Constants/interface';
import {FC} from 'react';
import {styles} from './style';

const SignUpScreen: FC<INavigation> = ({navigation}) => {
  return (
    <View style={{padding: 20}}>
      <View style={styles.imageContainer}>
        <Image style={styles.imageStyle} source={image.SpotifyColorLogo} />
      </View>
      <Title children="Enjoy Listening To Music." />
      <View style={{marginBottom: 20}}>
        <Input children="Enter Your UserName." />
        <Input children="Enter Your Email." />
        <Input children="Enter Password" />
      </View>
      <CButton
        onPress={() => {
          navigation.navigate('Login');
        }}
        text="Sign Up"
        margin={{marginLeft: '35%'}}
        backColor={{backgroundColor: colors.primaryTheme}}
        txtStyle={{fontSize: 24, color: colors.primaryBlack}}
      />

      <View style={styles.bottomContainer}>
        <Text style={styles.signUpText}>Already have an account?</Text>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text style={styles.textUnder}>Sign In.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;
