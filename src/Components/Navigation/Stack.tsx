import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import LoginScreen from '../../Screens/LogIn';
import SignUpScreen from '../../Screens/Signup';
import WelcomeScreen from '../../Screens/Welcome';
import colors from '../../Utils/colors';
import {BottomTabNavigation} from './BottomTab';
import HomeScreen from '../../Screens/Home';
import PlayList from '../../Screens/PlayList';
import {image} from '../image';
import {MusicPlayer} from '../../Screens/MusicPlayer';
import Icons from '../ImageIcons/Icons';

const Stack = createNativeStackNavigator();

export function StackScreen() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {backgroundColor: colors.primaryBlack},
      }}>
      <Stack.Screen
        name="HomePage"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PlayList"
        component={PlayList}
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerLeft: props => <Icons source={image.back} onPress={()=>{navigation.goBack()}}/>,
        }}
      />
      <Stack.Screen
        name="MusicPlayer"
        component={MusicPlayer}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}
