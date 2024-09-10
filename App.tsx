import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from './src/Screens/Welcome';
import SafeAreaView from 'react-native-safe-area-view';
import 'react-native-gesture-handler';

import BootSplash from 'react-native-bootsplash';
import Login from './src/Screens/LogIn';
import LoginScreen from './src/Screens/LogIn';
import colors from './src/Utils/colors';
import SignUpScreen from './src/Screens/Signup';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer
      onReady={() => {
        BootSplash.hide();
      }}>
      <Stack.Navigator
        screenOptions={{contentStyle: {backgroundColor: colors.primaryBlack}}}>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
