import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../Screens/Home';
import colors from '../../Utils/colors';
import Icons from '../ImageIcons/Icons';
import {image} from '../image';
import {FC} from 'react';
import {IBottomTabNavigation} from '../../Constants/interface';
import SearchScreen from '../../Screens/Search';
import {Text} from 'react-native';
import {StackScreen} from './HomeStack';
import {useNavigation} from '@react-navigation/native';

const Bottom = createBottomTabNavigator();

export const BottomTabNavigation: FC<IBottomTabNavigation> = () => {
  const navigation = useNavigation();
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
        component={StackScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icons
              color={focused ? colors.primaryWhite : colors.primaryGrey}
              onPress={() => {
                navigation.navigate('HomePage');
              }}
              source={image.HomeLogo}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? colors.primaryWhite : colors.primaryGrey,
              }}>
              Home
            </Text>
          ),
        }}
      />
      <Bottom.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icons
              color={focused ? colors.primaryWhite : colors.primaryGrey}
              source={image.SearchWhite}
              onPress={()=>{navigation.navigate('Search')}}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? colors.primaryWhite : colors.primaryGrey,
              }}>
              Search
            </Text>
          ),
        }}
      />
    </Bottom.Navigator>
  );
};
