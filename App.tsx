import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from './src/Screens/Welcome';
import 'react-native-gesture-handler';
import BootSplash from 'react-native-bootsplash';
import LoginScreen from './src/Screens/LogIn';
import colors from './src/Utils/colors';
import SignUpScreen from './src/Screens/Signup';
import {BottomTabNavigation} from './src/Components/Navigation/BottomTab';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Icons from './src/Components/ImageIcons/Icons';
import {image} from './src/Components/image';
import {MusicPlayer} from './src/Screens/MusicPlayer';
import AuthStack from './src/Components/Navigation/Auth';

const Stack = createStackNavigator();

function App() {
  return (
    <GestureHandlerRootView>
      <NavigationContainer
        onReady={() => {
          BootSplash.hide();
        }}>
        <Stack.Navigator
          screenOptions={{
            cardStyle: {backgroundColor: colors.primaryBlack},
          }}>
          <Stack.Screen
            name="Auth"
            component={AuthStack}
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
