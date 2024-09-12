import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../../Screens/LogIn';
import SignUpScreen from '../../Screens/Signup';
import WelcomeScreen from '../../Screens/Welcome';
import colors from '../../Utils/colors';

const Stack = createNativeStackNavigator();
function AuthStack() {
  return (
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
    </Stack.Navigator>
  );
}

export default AuthStack;
