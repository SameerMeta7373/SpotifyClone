import {NavigationContainer} from '@react-navigation/native';
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
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
