import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../Screens/Login Screen';
import {BottomTabNavigation} from '../BottomNavigation';

const Stack = createNativeStackNavigator();

export const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={BottomTabNavigation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
