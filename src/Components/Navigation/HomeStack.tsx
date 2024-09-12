import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';
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
        options={props => ({
          headerTransparent: true,
          headerTitle: '',
          headerLeft: () => (
            <Icons
              source={image.back}
              onPress={() => props?.navigation?.goBack()}
            />
          ),
        })}
      />
      <Stack.Screen
        name="MusicPlayer"
        component={MusicPlayer}
        options={props => ({
          presentation: 'modal',
          headerTransparent: true,
          headerLeft: () => (
            <Icons
              style={{marginLeft: 20}}
              source={image.BelowArrow}
              onPress={() => props?.navigation?.goBack()}
            />
          ),
          headerRight: () => (
            <Icons style={{resizeMode: 'contain'}} source={image.Properties} />
          ),
          headerTitle: '',
        })}
      />
    </Stack.Navigator>
  );
}
