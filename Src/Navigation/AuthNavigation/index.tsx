import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../Screens/Login Screen';
import {BottomTabNavigation} from '../BottomNavigation';
import {useSelector} from 'react-redux';
import Log from '../../Screens/Login Screen';

const Stack = createNativeStackNavigator();

export const AuthNavigation = () => {
  const authState = useSelector((state:any) => state.auth);
  console.log('Auth state:', authState);

  return (
    <Stack.Navigator>
      {!authState.loggedin ? (
        <Stack.Screen
          name="LoginScreen"
          component={Log}
          options={{headerShown: false}}
        />
      ) : (
        <Stack.Screen
          name="Home"
          component={BottomTabNavigation}
          options={{headerShown: false}}
        />
      )}
    </Stack.Navigator>
  );
};
