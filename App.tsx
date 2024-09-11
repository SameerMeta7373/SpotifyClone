import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from './src/Screens/Welcome';
import 'react-native-gesture-handler';

import BootSplash from 'react-native-bootsplash';
import LoginScreen from './src/Screens/LogIn';
import colors from './src/Utils/colors';
import SignUpScreen from './src/Screens/Signup';

import HomeScreen from './src/Screens/Home';
import {BottomTabNavigation} from './src/Components/Navigation/BottomTab';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <GestureHandlerRootView>
      <NavigationContainer
        onReady={() => {
          BootSplash.hide();
        }}>
        <Stack.Navigator
          screenOptions={{
            contentStyle: {backgroundColor: colors.primaryBlack},
          }}>
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="HomeScreen"
            component={BottomTabNavigation}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
