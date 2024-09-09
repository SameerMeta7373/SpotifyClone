import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from './src/Screens/Welcome';
import SafeAreaView from 'react-native-safe-area-view';
import 'react-native-gesture-handler';

import BootSplash from 'react-native-bootsplash';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer
      onReady={() => {
        BootSplash.hide();
      }}>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
