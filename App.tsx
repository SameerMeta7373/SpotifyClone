import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect } from 'react';
import BootSplash from 'react-native-bootsplash';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Icons from './src/Components/ImageIcons/Icons';
import AuthStack from './src/Components/Navigation/Auth';
import { BottomTabNavigation } from './src/Components/Navigation/BottomTab';
import { image } from './src/Components/image';
import { MusicPlayer } from './src/Screens/MusicPlayer';
import colors from './src/Utils/colors';
import { Apis } from './src/Utils/https';

const Stack = createStackNavigator();

function App() {
  const getData = async () => {
    const token = await Apis.getToken();
    console.log('Token ===>', token);
  };

  useEffect(() => {
    getData();
  }, []);

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
                <Icons
                  style={{resizeMode: 'contain', marginRight: 10}}
                  source={image.Properties}
                />
              ),
              headerTitle: '',
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
