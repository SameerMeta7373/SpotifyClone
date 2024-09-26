import {NavigationContainer} from '@react-navigation/native';
import {MusicPlayer} from '../../Screens/MusicPlayer';
import colors from '../../Utils/colors';
import {image} from '../image';
import Icons from '../ImageIcons/Icons';
import BootSplash from 'react-native-bootsplash';
import AuthStack from './Auth';
import {BottomTabNavigation} from './BottomTab';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

const MainNavigation = () => {
  const auth = useSelector(state => state.auth);
  console.log("auth========>",auth?.isLoggedIn);
  

  const Stack = createStackNavigator();
  return (
    <NavigationContainer
      onReady={() => {
        BootSplash.hide();
      }}>
      <Stack.Navigator
        screenOptions={{
          cardStyle: {backgroundColor: colors.primaryBlack},
        }}>
        {auth.isLoggedIn ? (
          <>
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
          </>
        ) : (
          <Stack.Screen
            name="Auth"
            component={AuthStack}
            options={{
              headerShown: false,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
