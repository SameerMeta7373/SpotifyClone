import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../Screens/Home';
import colors from '../../Utils/colors';
import Icons from '../ImageIcons/Icons';
import {image} from '../image';

const Bottom = createBottomTabNavigator();

export const BottomTabNavigation = ({navigation}) => {
  return (
    <Bottom.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primaryWhite,
        tabBarInactiveTintColor: colors.primaryBlack,
        tabBarActiveBackgroundColor: 'transparent',
        tabBarLabelStyle: {fontSize: 14},
        tabBarStyle: {
          backgroundColor: 'transparent',
          position: 'absolute',
          borderTopWidth: 0,
          left: 0,
          right: 0,
          bottom: 0,
          elevation: 0,
        },
        headerShown: false,
      }}>
      <Bottom.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => <Icons source={image.HomeLogo} />,
          tabBarLabel: 'Home',
        }}
      />
    </Bottom.Navigator>
  );
};
