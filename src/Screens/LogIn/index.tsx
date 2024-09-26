import {Image, Text, TouchableOpacity, View} from 'react-native';
import CButton from '../../Components/Button';
import Input from '../../Components/Input/input';
import colors from '../../Utils/colors';
import Title from '../../Components/Title/Title';
import {image} from '../../Components/image';
import {INavigation} from '../../Constants/interface';
import {FC} from 'react';
import {styles} from './style';
import {Apis} from '../../Utils/https';
import {useDispatch} from 'react-redux';
import {logIn} from '../../../Store/Redux/authSlice';

const LoginScreen: FC<INavigation> = ({navigation}) => {
  const dispatch = useDispatch();

  const getToken = async () => {
    // console.log('Token ===>', );
    const token = await Apis.getToken()
    console.log('token====>', token);
    dispatch(logIn(token));
  };

  return (
    <View style={{padding: 20}}>
      <View style={styles.imageContainer}>
        <Image style={styles.imageStyle} source={image.SpotifyColorLogo} />
      </View>
      <Title children="Enjoy Listening To Music." />
      <View style={{marginBottom: 40}}>
        <Input children="Enter Your UserName." />
        <Input children="Enter Your Email." />
      </View>
      <CButton
        text="Sign In"
        onPress={() => {
          getToken();
         
        }}
        margin={{marginLeft: '35%'}}
        backColor={{backgroundColor: colors.primaryTheme}}
        txtStyle={{fontSize: 24, color: colors.primaryBlack}}
      />

      <View style={styles.bottomContainer}>
        <Text
          style={{
            color: colors.primaryWhite,
            textAlign: 'center',
            padding: 10,
          }}>
          Didn't have an account?
        </Text>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate('SignUp');
          }}>
          <Text style={styles.underText}>Sign Up.</Text>
        </TouchableOpacity>
        <Text>for free!</Text>
      </View>
    </View>
  );
};

export default LoginScreen;
